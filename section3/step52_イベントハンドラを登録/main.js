'use strict';
let sayHelloButton = document.getElementById('sayHelloButton');

//addEventListener()オブジェクト
//構文：addEventListener(イベントの種類, 実行したい処理, false)
//イベントの種類：clickとか
//実行したい処理(function{})の中身console.log()とか
//false：イベントの伝搬型式というもの。使用頻度は低いので、とりあえずfalseを書くものという認識で良い

//通常
sayHelloButton.addEventListener('click', function (e) {
  console.log('Hello');
  console.log(e) //イベントのオブジェクトに関する情報が格納されている。eはなくてもOK
})

//eなし
sayHelloButton.addEventListener('click', function () {
  console.log('Hello');
})

//アロー関数
sayHelloButton.addEventListener('click', () => {
  console.log('Hello');
})

//処理を外で記述
function sayHelloButtonHandler(e) {
  console.log('Hello!');
  console.log(e);
}
sayHelloButton.addEventListener('click', sayHelloButtonHandler, false);