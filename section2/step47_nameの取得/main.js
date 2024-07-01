'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  //getElementsByName()name属性を取得する
  let elements = document.getElementsByName('inputText');
  console.log(elements); //NodeListという配列型式が返ってくる
  console.log(elements[0].value);
}, false);