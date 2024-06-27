'use strict';
//みかんの合計金額を計算するプログラム
//Aさんが1個100円のみかんを20個買いました。
//みかんの単価と個数を引数に渡すと、合計金額を計算して返す関数を作成
//作成した関数を呼び出して、Aさんの支払い合計金額はいくらになるかを計算して出力する
//※消費税は考慮しないものとする
//回答例では、function命令で定義する方法で実装すること

function getTotal(price, quantity) {
  return price * quantity;
}
console.log(getTotal(100, 20));