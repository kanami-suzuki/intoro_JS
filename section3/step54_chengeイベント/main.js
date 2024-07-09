'use strict';
//チェックボックスにチェックを入れたり外したりするときに、checkイベントが発生する
//checkイベントはinput,select,textarea要素において、ユーザーによる要素の値の変更が確定したときに発生する
//このcheckイベントがチェンジするのをトリガーにして処理を実行するプログラムを記述する

//イベントハンドラ
function handleChenge() {
  //全てにチェックの要素を取得
  const checkAll = document.getElementById('checkAll');

  //name属性がlanguageのチェックボックス要素を取得
  const checkBoxes = document.getElementsByName('language');

  //name属性がlanguageのチェックボックス要素をループ処理
  for (let i = 0; i < checkBoxes.length; i++) {
    //各チェックボックスのチェック状態を全てチェックの状態に合わせる
    checkBoxes[i].checked = checkAll.checked;
  }
}

//checkAllチェックボックスのchangeイベントのイベントハンドラを登録
const ca = document.getElementById('checkAll');
ca.addEventListener('change', handleChenge, false);