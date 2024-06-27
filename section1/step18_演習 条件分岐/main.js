'use strict';

//Aさんの体重は 60kg 身長は 1.7m です

//①復習：AさんのBMIを求めて出力
//BMI = 体重kg / (身長m * 身長m)

//②BMIの数値により「痩せ」「普通」「肥満」を出力
//25以上が「肥満」
//18.5以上25未満が「普通」
//18.5未満が「痩せ」

let width = 60;
let height = 1.7;
let bmi = 60 / (1.7 * 1.7);
console.log(bmi);

if (bmi >= 25) {
  console.log('肥満');
} else if (bmi >= 18.5) {
  console.log('普通')
} else {
  console.log('痩せ');
}