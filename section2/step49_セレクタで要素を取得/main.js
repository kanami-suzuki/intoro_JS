'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  //特定のクラスに一致する最初の要素を取得
  //クラス名はcssに書くように「.クラス名」とすること
  let element = document.querySelector('.foo');
  //一致するクラス名の一番最初の要素が取得できる
  console.log(element);
  //中身のテキストを抜き出す
  console.log(element.textContent);

  //複数の要素を取得する
  let elements = document.querySelectorAll('.foo');
  //NodeListという配列型式の結果が返ってくる
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    console.log(elements[i].textContent);
  }
}, false);