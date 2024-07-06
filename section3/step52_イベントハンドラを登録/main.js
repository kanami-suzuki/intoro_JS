'use strict';

//コンソール出力
window.console.log('Hello');

//アラート(警告)
// window.alert('Hello');

//確認ダイアログ
// window.confirm('Hello');

//別のwindowを開く
// window.open('https://www.google.co.jp');

//windowを閉じる
// window.close();

//スクロール
//ボタンを押したら下にスクロール
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  //第一引数は横方向のスクロール、第二引数は縦方向のスクロール
  window.scroll(0, 200);
})