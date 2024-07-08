'use strict';

let sayHelloButton = document.getElementById('sayHelloButton');

function sayHelloEventHandler(e) {
  console.log('Hello');
}
sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

const removeHelloButton = document.getElementById('removeHelloButton');

//removeEventListener()任意のタイミングでイベントハンドラを無効にすることができる
function removeEventHandler(e) {
  console.log('remove');
  sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
}
removeHelloButton.addEventListener('click', removeEventHandler, false);