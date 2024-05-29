'use strict';

let myName = 'nakamura'; //文字列(string)型
let num = 123; //数値(number)型
let dec = 123.456; //数値(number)型
//整数も浮動小数も同じ数値型として判断される

console.log(myName);
console.log(num);
console.log(dec);

console.log(typeof myName);
console.log(typeof num);
console.log(typeof dec);

myName = 456;
console.log(myName);
console.log(typeof myName);

//同じ変数でデータ型を途中で変更することは、理論上は可能だが、開発時にバグの原因となったりするため、推奨されない
//JSのように代入時にデータ型が決まる言語を「動的型付け言語」という
//javaやCのような言語は変数の宣言時にデータ型を決めてしまう言語もあり、「静的型付け言語」と呼ばれる