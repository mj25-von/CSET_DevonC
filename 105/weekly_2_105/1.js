var rpsDatabase = {
  'rock':     { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
  'paper':    { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
  'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
};

const buttons = document.querySelectorAll('[data-choice]');
const resultsList = document.getElementById('resultsList');
const scoreDisplay = document.getElementById('score');

let score = { you: 0, computer: 0 };

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
  return rpsDatabase[userChoice][computerChoice];
}

function updateResults(userChoice, computerChoice) {
  const li = document.createElement('li');
  li.textContent = `You - ${capitalize(userChoice)}, Computer - ${capitalize(computerChoice)}`;
  resultsList.appendChild(li);
}

function updateScore(scoreValue) {
  if (scoreValue === 1) score.you++;
  if (scoreValue === 0) score.computer++;
  scoreDisplay.textContent = `You: ${score.you}, Computer: ${score.computer}`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const scoreValue = determineWinner(userChoice, computerChoice);

    updateResults(userChoice, computerChoice);
    updateScore(scoreValue);
  });
});
