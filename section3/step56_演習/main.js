'use strict';
let counterText = document.getElementById('counterText');
let num = 0;
counterText.textContent = num;

let plusBtn = document.getElementById('plusBtn');
let resetBtn = document.getElementById('resetBtn');

plusBtn.addEventListener('click', () => {
  num += 1;
  counterText.textContent = num;
})

resetBtn.addEventListener('click', () => {
  num = 0;
  counterText.textContent = num;
})