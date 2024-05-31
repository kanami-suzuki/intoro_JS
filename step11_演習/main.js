'use strict';
//Aさんは
//・体重が60kg
//・身長が1.7m
//BMIを計算して、consoleへ出力する

//補足
//BMI = 体重kg / (身長m * 身長m)
//BMI・・・肥満度を表す体格指数

let weight = 60;
let height = 1.7;
let BMI = weight / (height * height);
console.log(BMI);