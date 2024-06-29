'use strict';
//ボタンをクリックしたら処理を実行する
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) { //イベント処理
  // idによるノードの取得
  let headerTitle = document.getElementById('headerTitle');
  console.log(headerTitle);

  //コンテンツ(テキスト)を取得
  console.log(headerTitle.textContent);
}, false)
//getElementById()メソッド(関数)
//引数に指定した文字列がHTML上にidとして一致した場合に要素を取得できる
//Elementは日本語で要素。直訳すると「idの要素を取得する」のような感じになる
//一致する要素がないときはnullが返ってくる