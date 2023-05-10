const myString = [];

let currentIndex = myString.length;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function getNextText() {
  if (myString.length === 0) {
    return "add your text";
  }
  if (currentIndex === myString.length) {
    shuffleArray(myString);
    currentIndex = 0;
  }
  const text = myString[currentIndex];
  currentIndex++;
  return text;
};

const generateButton = document.getElementById('generate');
const textElement = document.getElementById('text');
const addPhraseButton = document.getElementById('add-phrase-button');
const newPhraseInput = document.getElementById('new-phrase-input');
const deleteAllButton = document.getElementById('delete-all-button');

generateButton.addEventListener('click', function() {
  textElement.innerHTML = getNextText();
});

addPhraseButton.addEventListener('click', function() {
  const newPhrase = newPhraseInput.value;
  if (newPhrase !== "") {
    myString.push(newPhrase);
    currentIndex = myString.length;
    newPhraseInput.value = "";
  }
});

deleteAllButton.addEventListener('click', function() {
  myString.length = 0;
  currentIndex = myString.length;
  textElement.innerHTML = "";
});