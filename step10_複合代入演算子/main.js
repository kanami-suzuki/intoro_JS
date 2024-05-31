'use strict';
//複合代入演算子を使わない場合
let num = 20;
num = num + 10;
console.log(num);

//複合代入演算子を使った場合
let num1 = 20;
num1 += 10;
console.log(num1);

//関連して利用頻度が高いもの
let num2 = 20;
num2 -= 10;
console.log(num2);

let num3 = 20;
num3 *= 10;
console.log(num3);

let num4 = 20;
num4 /= 10;
console.log(num4);