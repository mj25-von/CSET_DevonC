const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function generateQuestion() {
  const operations = ["+", "-", "*", "/", "%"];
  const a = Math.floor(Math.random() * 10) + 1; 
  const b = Math.floor(Math.random() * 10) + 1;
  const op = operations[Math.floor(Math.random() * operations.length)];

  let question = `${a} ${op} ${b}`;
  let answer;

  switch (op) {
    case "+": answer = a + b; break;
    case "-": answer = a - b; break;
    case "*": answer = a * b; break;
    case "/": answer = Math.floor(a / b); break; 
    case "%": answer = a % b; break;
  }

  return { question, answer };
}


function askQuestion(q, callback) {
  rl.question(`${q.question} = ? `, (userInput) => {
    callback(userInput);
  });
}


async function playMaxScore() {
  let score = 0;
  for (let i = 0; i < 20; i++) {
    const q = generateQuestion();
    await new Promise(resolve => {
      askQuestion(q, (userInput) => {
        if (userInput.toLowerCase() === "skip") {
          console.log("Skipped!");
        } else if (parseInt(userInput) === q.answer) {
          score += 10;
          console.log("Correct! +10");
        } else {
          score -= 5;
          console.log(`Wrong! -5 (Correct answer: ${q.answer})`);
        }
        resolve();
      });
    });
  }
  console.log(`Game Over! Your final score: ${score}`);
  rl.close();
}


async function playThreeOut() {
  let score = 0;
  let lives = 3;
  while (lives > 0) {
    const q = generateQuestion();
    await new Promise(resolve => {
      askQuestion(q, (userInput) => {
        if (parseInt(userInput) === q.answer) {
          score += 10;
          console.log("Correct! +10");
        } else {
          lives--;
          console.log(`Wrong! Lives left: ${lives}`);
        }
        resolve();
      });
    });
  }
  console.log(`Game Over! Your final score: ${score}`);
  rl.close();
}


rl.question("Choose mode (1 = Max Score, 2 = Three-Out): ", (mode) => {
  if (mode === "1") {
    playMaxScore();
  } else if (mode === "2") {
    playThreeOut();
  } else {
    console.log("Invalid choice. Exiting.");
    rl.close();
  }
});
