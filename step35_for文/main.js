'use strict';
//例題１：繰り返し処理forを使用してコンソールに1〜3まで順に表示
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
//let i = 1 初期化式。ループの回数を管理する変数を定義(初期化)する
//i <= 3 条件式。条件を満たす間だけ処理を繰り返す
//i++ 増減式 ループの回数を管理する変数を加算または減算する

//例題２：配列['a', 'b', 'c']の値をfor文を使用して一つずつコンソールに出力
let arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}