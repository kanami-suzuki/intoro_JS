'use strict';
//演習 おみくじプログラムの作成
//switch文を使用
//変数numの値によってコンソールへの出力を変える
//1 → 大吉
//2 → 中吉
//3 → 小吉
//4 → 吉
//5 → 凶
//それ以外 → 想定外の数値です

let num = Math.floor(Math.random() * 5 + 1);
//Math.random()関数は0以上1未満のランダムな値を返す
//Math.random() * (max - min + 1) + min
//が所謂公式の式のようなもので、上記の式に当てはめて計算する
//maxが5、minが1
//Math.floor()関数は与えられた数値以下の最大の整数を返す
switch (num) {
  case 1:
    console.log('大吉');
    break;
  case 2:
    console.log('中吉');
    break;
  case 3:
    console.log('小吉');
    break;
  case 4:
    console.log('吉');
    break;
  case 5:
    console.log('凶');
    break;
  default:
    console.log('想定外の数値です');
    break;
}