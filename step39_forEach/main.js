'use strict';
//例題：配列から一つずつ要素を取り出してコンソールに出力
let colors = ['Red', 'Green', 'blue'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//forEachに書き換え
colors.forEach(color => {
  console.log(color)
});
//for文でiの役割がfunctionの引数
//配列の値を一つずつ取り出す繰り返し処理をシンプルに記述することができる
//引数colorには配列の値が一つ目(0番目)から配列の値がなくなるまでループして入る