'use strict';
//例題：四角形の面積を求める関数
const getRectangle = new Function('height', 'width', 'return height * width');
//new Function()で新しいFunctionオブジェクトを作る

console.log(getRectangle(3, 5));