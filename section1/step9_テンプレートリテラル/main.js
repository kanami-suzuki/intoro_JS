'use strict';
//文字列結合
let lastName = 'なかむら';
let firstName = 'ゆうた';
let massage1 = 'こんにちは ' + lastName + '' + firstName + ' さん';
console.log(massage1);

//テンプレートリテラル
let massage2 = `こんにちは ${lastName} ${firstName} さん
JavaScriptの学習を始めましょう`;
console.log(massage2);
//改行も反映される