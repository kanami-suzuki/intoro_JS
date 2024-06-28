'use strict';
//ボタンをクリックしたらテキストを変更する
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  let headerTitle = document.getElementById('headerTitle');
  //テキストの置換
  headerTitle.textContent = 'タイトルが変更されました';
}, false)

//textContentプロパティでブラウザ上のテキストを変更することができる