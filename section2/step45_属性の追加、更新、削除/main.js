'use strict';
let showText = document.getElementById('showText');

//class属性を追加・更新（赤）
let setRedClassButton = document.getElementById('setRedClassButton');
setRedClassButton.addEventListener('click', function (e) {
  //属性をセット(追加)するにはsetAttribute()メソッドを使用する
  //第一引数に属性の名前(今回はclass属性)、第二引数に属性の値(今回はclass名のred)を記述する
  showText.setAttribute('class', 'red');
})

//class属性を追加・更新（青）
let setBlueClassButton = document.getElementById('setBlueClassButton');
setBlueClassButton.addEventListener('click', function (e) {
  showText.setAttribute('class', 'blue');
})

//属性の削除
let removeClassButton = document.getElementById('removeClassButton');
removeClassButton.addEventListener('click', function (e) {
  //属性の削除にはremoveAttribute()メソッドを使用する。引数には削除したい属性を記述する
  showText.removeAttribute('class')
})