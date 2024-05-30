'use strict';
let x = 1;
let y = 2;
let z = 3;

let ans1 = x + y * z;
console.log(ans1);
//掛け算が優先される

let ans2 = (x + y) * z;
console.log(ans2);
//括弧が先に計算される