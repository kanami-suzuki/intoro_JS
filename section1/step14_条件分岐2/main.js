'use strict';
//else if

//例題
//テストの点数Xによって、
//通知表の成績をコンソールに
//出力するプログラムを書く

// 90点以上 A
// 80点以上 B
// 60点以上 C
// 60点未満 D

let X = 60;
if (X >= 90) {
  console.log('A');
} else if (X >= 80) {
  console.log('B');
} else if (X >= 60) {
  console.log('C');
} else {
  console.log('D');
}