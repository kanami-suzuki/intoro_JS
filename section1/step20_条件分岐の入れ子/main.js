'use strict';
//例題 2の倍数、かつ、3の倍数の時に、メッセージを表示する
let x = 13;
if ((x * 2) || (x * 3)) {
  console.log('こんにちは');
}

//答
let num = 18;
if (num % 2 === 0) { // 変数numを2で割った時の余りを求めて、結果が0だった時にtrueになる
  console.log(`${num}は2の倍数です`);
  if (num % 3 === 0) { // 変数numを3で割った時の余りを求めて、結果が0だった時にtrueになる
    console.log(`${num}は2の倍数、かつ、3の倍数です`)
  }
}

if ((num % 2 === 0) && (num % 3 === 0)) {
  console.log(`${num}は2の倍数、かつ、3の倍数です`)
}