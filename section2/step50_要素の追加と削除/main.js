'use strict';
let addButton = document.getElementById('addButton');
addButton.addEventListener('click', function (e) {
  //入力欄のinput要素を取得
  let inputLanguage = document.getElementById('inputLanguage');

  //input要素から文字列を取得
  let language = inputLanguage.value;

  //入力欄が未入力で追加ボタンが押されたら何も反応しないようにする
  if (language === '') {
    return;
  }

  //li要素を生成
  let listItem = document.createElement('li');

  //li要素のコンテンツに入力された文字列を設定
  listItem.textContent = language;

  //ul要素を取得
  let languageList = document.getElementById('languageList');

  //リストの末尾に生成したli要素を追加
  languageList.appendChild(listItem);

  //入力欄をクリア
  inputLanguage.value = '';
})

//要素の削除
let removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function (e) {
  //ul要素を取得
  let languageList = document.getElementById('languageList');

  //リストの末尾から要素を削除
  languageList.removeChild(languageList.lastElementChild);
})