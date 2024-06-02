'use strict';

//if文
let temperature = 29;
if (temperature > 28) { //trueの文
  console.log('冷房稼働');
}
// >は演算子の一種で、「比較演算子」という
//比較演算子は左右の値を比較して、その結果が真であるかに基づいて論理値を返す
//論理値とはtrueかfalseのどちらかで、条件式が成り立つ場合はtrueが返り、成り立たない場合はfalseが返る

console.log(29 > 28); //true
console.log(20 > 28); //false

// 以上
let a = 100;
if (a >= 100) {
  console.log('100以上');
}

//より大きい
let b = 101;
if (b > 100) {
  console.log('100より大きい');
}

//以下
let c = 100;
if (c <= 100) {
  console.log('100以下');
}

//未満
let d = 99;
if (d < 100) {
  console.log('100未満');
}

//等しい
let e = 100;
if (e === 100) {
  console.log('100と等しい');
}

//等しくない
let f = 101;
if (f !== 100) {
  console.log('100と等しくない');
}

//ifの条件を満たさなかった場合　if/else
let g = 100;
if (g >= 100) {
  console.log('100以上');
} else {
  console.log('100以上ではない');
}