'use strict';
//三項演算子
//構文：条件式 ? trueの場合 : falseの場合

//例題
//年齢が20歳以上の場合は、ビールと出力
//年齢が20未満の場合は、コーラと出力
let age = 10;
// age >= 20 ? console.log('ビール') : console.log('コーラ');
let beverage = (age >= 20) ? 'ビール' : 'コーラ';
console.log(beverage);