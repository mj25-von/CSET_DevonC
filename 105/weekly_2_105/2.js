const buttonContainer = document.getElementById('buttonContainer');
const colorSelect = document.getElementById('colorSelect');

let originalColors = [];

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 10; i++) {
  const button = document.createElement('button');
  button.textContent = `Button ${i + 1}`;
  const randomColor = getRandomColor();
  button.style.backgroundColor = randomColor;
  originalColors.push(randomColor); 
  buttonContainer.appendChild(button);
}

function changeButtonColors(option) {
  const buttons = document.querySelectorAll('#buttonContainer button');

  buttons.forEach((btn, index) => {
    if (option === 'red') btn.style.backgroundColor = 'red';
    else if (option === 'green') btn.style.backgroundColor = 'green';
    else if (option === 'blue') btn.style.backgroundColor = 'blue';
    else if (option === 'random') btn.style.backgroundColor = getRandomColor();
    else if (option === 'reset') btn.style.backgroundColor = originalColors[index];
  });
}

colorSelect.addEventListener('change', (e) => {
  changeButtonColors(e.target.value);
});
