'use strict';
//ボタンをクリックしたら処理を実行する
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) { //イベント処理
  // idによるノードの取得
  let headerTitle = document.getElementById('headerTitle');

  //テキストの置換
  headerTitle.textContent = 'タイトルが変更されました。'
}, false)