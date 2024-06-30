'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function (e) {
  //タグ名で要素を取得するときはgetElementsByTagName()メソッドを使用する
  let elements = document.getElementsByTagName('p');
  //戻り値にHTMLCollectionというものが表示される
  //配列風・配列型式のデータ、オブジェクト
  console.log(elements);

  //for文を使用して各要素のテキストのみを抜き出して表示する
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    console.log(elements[i].textContent);
  }
}, false);