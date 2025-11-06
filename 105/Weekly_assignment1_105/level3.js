const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateQuestion(difficulty) {
  let a, b, op;
  let operations = [];

  switch (difficulty) {
    case "easy":
      
      operations = ["+", "-"];
      op = operations[randInt(0, operations.length - 1)];
      a = randInt(1, 9);
      b = randInt(1, 9);
      break;

    case "medium":
      
      operations = ["+", "-", "*", "/", "%"];
      op = operations[randInt(0, operations.length - 1)];
      if (op === "+" || op === "-") {
        a = randInt(1, 99);
        b = randInt(1, 99);
      } else {
        a = randInt(1, 9);
        b = randInt(1, 9);
      }
      break;

    case "hard":
      
      operations = ["+", "-", "*", "/", "%"];
      op = operations[randInt(0, operations.length - 1)];
      if (op === "+" || op === "-") {
        a = randInt(1, 999);
        b = randInt(1, 999);
      } else {
        a = randInt(10, 99); 
        b = randInt(1, 9);   
      }
      break;

    default:
      throw new Error("Invalid difficulty");
  }

  
  if ((op === "/" || op === "%") && b === 0) {
    b = 1;
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


async function playMaxScore(difficulty) {
  let score = 0;
  for (let i = 0; i < 20; i++) {
    const q = generateQuestion(difficulty);
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


async function playThreeOut(difficulty) {
  let score = 0;
  let lives = 3;
  while (lives > 0) {
    const q = generateQuestion(difficulty);
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
  rl.question("Choose difficulty (easy, medium, hard): ", (difficulty) => {
    difficulty = difficulty.toLowerCase();
    if (!["easy", "medium", "hard"].includes(difficulty)) {
      console.log("Invalid difficulty. Exiting.");
      rl.close();
      return;
    }

    if (mode === "1") {
      playMaxScore(difficulty);
    } else if (mode === "2") {
      playThreeOut(difficulty);
    } else {
      console.log("Invalid choice. Exiting.");
      rl.close();
    }
  });
});
