'use strict';

// == と === の違い
let num = 100; //数値型
let str = '100'; //文字列型

if (num == str) {
  console.log('同じ');
} else {
  console.log('同じではない');
}

if (num === str) {
  console.log('同じ');
} else {
  console.log('同じではない');
}

// ==は抽象的な比較で、内容が同じであれば型が異なってもtrueとみなされる。あえて曖昧な比較をしたいときに使用する
// ===は厳密な比較で、型も内容も同じでないとtrueとみなされない。開発の時はこちらの方がバグの発生が少ない