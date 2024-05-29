'use strict';

let ans = 1 + 2;
console.log(ans)

let i = 20;
let j = 10;
let ans1 = i + j;
console.log(ans1);

let ans2 = i - j;
console.log(ans2);

let ans3 = i * j;
console.log(ans3);

let ans4 = i / j;
console.log(ans4);

let x = 3;
let y = 2;
//小数点まで出る
let ans5 = x / y;
console.log(ans5);

//割った数のあまり
let ans6 = x % y;
console.log(ans6);

//べき乗
//xのy乗 3の2乗
let ans7 = Math.pow(x, y);
console.log(ans7);
//Math.pow()パワー関数べき乗を意味するpowerの略

//べき乗の演算子
//ES2016から使えるようになった
//xのy乗 3の2乗
let ans8 = x ** y;
console.log(ans8)