'use strict';
let birthYear = '2000';
let age = 18;

console.log(birthYear + age);
console.log(age + birthYear);
//文字列の結合になる

//'文字列' + 数値 = '文字列'
//数値 + '文字列' = '文字列'
//数値 + 数値 = 数値
//'文字列' + '文字列' = '文字列'

//文字列型の値を強制的に数値にする
//Number()数値型以外のデータ型を数値型に変換することができる
//値が数値に変換できない場合はNaNが帰ってくる
//NaNは「Not a Number」の略
console.log(Number(birthYear) + age);
console.log(Number('Nakamura'));

console.log(age + '歳');

//String()
//文字列型に変換する
console.log(String(age) + '歳');