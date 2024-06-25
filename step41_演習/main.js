'use strict';
//演習問題
//テストの点数の合計値と平均値を求めるプログラムの作成
//スコアは100,90,80,70,60とする

//問題により与えられた点数を配列に格納
//合計値に格納する変数を0で初期化
//繰り返し処理forにより、配列に格納した点数を一つずつ取り出し
//合計値を格納する変数に足していく
//繰り返し処理が終わったら、平均値を求める
//最後に合計値と平均値をコンソールに出力する

let scores = [100, 90, 80, 70, 60];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}
let average = total / scores.length;
console.log(`合計：${total}, 平均：${average}`);