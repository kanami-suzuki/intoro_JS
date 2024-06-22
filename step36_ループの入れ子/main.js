'use strict';
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

//例題：二次元配列に格納されているテストの点数を全て取り出して表示する
//多次元配列(二次元配列)
//配列の中に配列を入れることを二次元配列という
const scores = [
  [100, 99, 98],
  [90, 89, 88],
  [80, 79, 78],
];
//for文を使用せずに各値を取り出すには以下のようにする
console.log(scores[0][0]);
console.log(scores[0][1]);
console.log(scores[0][2]);
console.log(scores[1][0]);
console.log(scores[1][1]);
console.log(scores[1][2]);
console.log(scores[2][0]);
console.log(scores[2][1]);
console.log(scores[2][2]);

//仮に学校の人数分などになると、コードが膨大になるため、for文を使用する
for (let i = 0; i < scores.length; i++) {
  for (let j = 0; j < scores.length; j++) {
    console.log(`score: ${scores[i][j]}`);
  }
}