const myString = [
    "Поцеловать Локи в носик",
    "Подарить Сильвии хахаски",
    "Покушать",
    "Побешать",
    "Сказать Билли, что он котик",
    "Укусить Люка за нос",
    "Зацеловать Волче"
];

let currentIndex = myString.length;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getNextText() {
  if (currentIndex === myString.length) {
    shuffleArray(myString);
    currentIndex = 0;
  }

  const text = myString[currentIndex];
  currentIndex++;

  return text;
}

const generateButton = document.getElementById('generate');
const textElement = document.getElementById('text');

generateButton.addEventListener('click', function() {
  textElement.innerHTML = getNextText();
});

