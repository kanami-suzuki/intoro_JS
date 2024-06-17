'use strict';
// 宣言、初期化
let colors = ['Red', 'Green', 'Blue'];
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); //存在しないインデックスを指定するとundefinedが出力される

// 複数のデータ型
let arr = [1, '2', 3, ['a', 'b', 'c']];
console.log(arr);
//複数のデータ型を格納することができるが、開発上では混乱しやすくなるため、データ型は統一したほうがいい

//配列の個数を取得
console.log(colors.length);

//末尾の値を取得
console.log(colors[colors.length - 1]);
//配列のインデックスは0から始まるので、尾数からマイナス１する必要がある

//空の配列を宣言
let emptyArr = [];
console.log(emptyArr);