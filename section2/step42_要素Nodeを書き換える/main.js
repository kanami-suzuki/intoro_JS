'use strict';
//ボタンをクリックしたらテキストを変更する
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  //idによるノードの取得
  let inputColorName = document.getElementById('inputColorName');

  //取得したinput要素の入力値を取得
  let colorNameText = inputColorName.value;

  //取得したinput要素のname属性値を取得
  //getAttribute()メソッドを使用し、取得したい属性値を引数に入力する
  let inputName = inputColorName.getAttribute('name');

  //showText(p要素)のidを取得
  let showText = document.getElementById('showText');

  showText.textContent = `name属性: ${inputName}, 入力されたテキスト： ${colorNameText}`;
}, false)