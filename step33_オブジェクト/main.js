'use strict';
//例題：ユーザーオブジェクトの操作
//変数userを用意
//下記のオブジェクトを作成
//name: Taro Yamada
//gender: men
//birthYear: 1990
//各値にプロパティ(変数・キー)を指定して、
//取り出してコンソールに表示

//オブジェクトの作成
let user = new Object();

//name,gender,birthYearを設定
user.name = 'Taro Yamada';
user.gender = 'men';
user.birthYear = 1990;

//コンソールに出力
console.log(user);


//オブジェクト初期化子
let user2 = {
  name: 'Taro Yamada',
  gender: 'men',
  birthYear: 1990
};
console.log(user2);

//ドット記述法を使ってプロパティを取得
console.log(user2.name);
console.log(user2.gender);
console.log(user2.birthYear);

//プラケット記法を使ってプロパティを取得
console.log(user2['name']);
console.log(user2['gender']);
console.log(user2['birthYear']);

//オブジェクトの個数を求める
console.log(Object.keys(user).length);
console.log(Object.keys(user2).length);

//プロパティ(変数・キー)を取得
let keys1 = Object.keys(user);
let keys2 = Object.keys(user2);
console.log(keys1);
console.log(keys2);

//キーを追加
user.prefecture = 'Kanagawa';
console.log(user);

user2['prefecture'] = 'Kanagawa';
console.log(user2);

//値の書き換え
user.prefecture = 'Chiba';
console.log(user);

user2['prefecture'] = 'Chiba';
console.log(user2);

//複数のオブジェクトを結合して新しいオブジェクトを作成する
let obj1 = {
  a: 1,
  b: 2,
  c: 3
};
let obj2 = {
  d: 4,
  e: 5,
  f: 6
};
let mergedObj = Object.assign(obj1, obj2);
console.log(mergedObj);

//空のオブジェクトを作成
let person = {};
console.log(person);