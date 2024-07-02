'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  //getElementsByClassName()エディタ。クラス名で要素を取得する
  let elements = document.getElementsByClassName('foo');

  //HTMLCollectionという配列型式が返ってくる
  console.log(elements);

  //要素の中身を取り出す
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    console.log(elements[i].textContent);
  }
}, false);