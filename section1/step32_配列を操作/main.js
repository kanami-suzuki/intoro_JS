'use strict';
let colors = ['Red', 'Green', 'Blue'];
console.log(colors);

//末尾に値を追加
colors.push('Black');
console.log(colors);

//先頭に追加
colors.unshift('White');
console.log(colors);

//値の変更(更新)
colors[1] = 'Aka';
console.log(colors);

//指定した位置に1つ以上の値を挿入
let insertArr = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'D;');
console.log(insertArr);
//splice()関数で配列に挿入する
//第一引数が配列を変更する開始位置 例だと1(2番目)
//第二引数は削除する場合は整数を入れる。今回は削除しないので0
//第三引数以降に挿入したい値を入れる。複数でも大丈夫

//複数追加
insertArr.splice(2, 0, 'X', 'Y', 'Z');
console.log(insertArr);

//指定した位置から削除
insertArr.splice(2, 2);
console.log(insertArr);
//第二引数はいくつ消すかを指定する。今回は3番目から2つ消すという意味(X,Y)

//配列の結合
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);
console.log(arr1);
console.log(arr2);
//concat()関数でarr1にarr2を結合して、mergedArrに代入している。arr1とarr2の値は変わらない

//先頭を削除
let arr3 = ['a', 'b', 'c', 'd'];
arr3.shift();
console.log(arr3);

//末尾を削除
arr3.pop();
console.log(arr3);