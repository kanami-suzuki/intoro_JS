'use strict';
let num = 10;

//インクリメント
num++;
console.log(num);

//デクリメント
num--;
console.log(num);

//前置演算子のインクリメント
++num;
console.log(num);

//前置演算子のデクリメント
--num;
console.log(num);

let num1 = 10;
let num2 = 10;
let ans1 = ++num1;
let ans2 = num2++;
console.log(ans1);
//前置演算子は数値にインクリメントされてから変数に代入される
console.log(ans2);
//後置演算子は変数に代入されてからインクリメントされる