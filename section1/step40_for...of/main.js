'use strict';
const colors = ['Red', 'Green', 'Blue'];
for (const color of colors) {
  console.log(color);
}
//const color(変数color)にcolorsの値を一つずつ代入(of)している

const str = 'JavaScript';
for (const value of str) {
  console.log(value);
}
//一つだけの文字列だと一文字ずつ出力される

// const arr = 123456; 数値型はエラーが出た
// for (const arrrr of arr) {
//   console.log(arrrr);
// }