'use strict'

function count(num) {
  let textCounter = document.getElementById('textCounter');
  textCounter.textContent = `残り${num}文字`;
  if (num < 0) {
    textCounter.style.color = 'red';
  } else {
    textCounter.style.color = '#000';
  }
}

let inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', () => {
  let counter = inputText.value.length;
  count(10 - counter);
})