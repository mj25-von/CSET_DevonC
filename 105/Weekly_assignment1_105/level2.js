const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateQuestion() {
  const operations = ["+", "-", "*", "/", "%"];
  const op = operations[randInt(0, operations.length - 1)];
  
  let a = randInt(1, 20); 
  let b = randInt(1, 20);

  
  if ((op === "/" || op === "%") && b === 0) {
    b = randInt(1, 20);
  }

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
          console.log("✅ Correct! +10");
        } else {
          score -= 5;
          console.log(`❌ Wrong! -5 (Correct answer: ${q.answer})`);
        }
        resolve();
      });
    });
  }
  console.log(`🎯 Game Over! Your final score: ${score}`);
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
          console.log("✅ Correct! +10");
        } else {
          lives--;
          console.log(`❌ Wrong! Lives left: ${lives}`);
        }
        resolve();
      });
    });
  }
  console.log(`🎯 Game Over! Your final score: ${score}`);
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
