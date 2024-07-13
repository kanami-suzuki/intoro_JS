'use strict'
//イベントハンドラ
function keyUp(e) { //keyUpイベントが発生した時に呼ばれる関数
  //入力された値を取得
  let str = inputText.value;

  //改行できないようにするためにreplace()メソッドを使用する
  //replace()メソッドは、第一引数に該当する文字列を第二引数に置き換えるメソッド
  //この場合は改行を空文字にする
  //詳しくは「JavaScript 正規表現 改行 削除」と調べると出てくる
  str = str.replace(/\r?\n/g, '');

  //残りの文字数を設定
  let num = 10 - str.length;
  console.log(num);

  //文字数表示部分の要素を取得
  const characterCount = document.getElementById('characterCount');

  //残りの文字数を表示できるようにcharacterCountのテキストにnumを代入
  characterCount.textContent = num;

  //残りの文字数のp要素を取得
  const characterCountWrap = document.getElementById('characterCountWrap');

  //文字色の設定
  if (num >= 0) {
    characterCountWrap.style.color = 'black';
  } else {
    characterCountWrap.style.color = 'red';
  }
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);