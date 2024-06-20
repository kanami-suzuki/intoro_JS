'use strict';
//例題：オブジェクトuserに
//生まれた年から年齢を計算するメソッドを追加

let user = {
  name: 'Taro Yamada',
  gender: 'men',
  birthYear: 1990,
  calcAge: function (thisYear) { //オブジェクト(の)メソッド(関数)
    // console.log(birthYear); //エラーになる
    console.log(this);
    console.log(this.birthYear);
    return thisYear - this.birthYear;
  }
}
console.log(user.calcAge(2024));
//calcAge()の引数に今年の年数を入れる

//メソッドから直接プロパティにアクセスすることはできない
//そのため例題のメソッド内(calcAge)から目標のプロパティ(birthYear)にアクセスするには
//this.birthYearとする必要がある。this.とは例題だとオブジェクトuserを指す
//calcAge()の中でthisを呼び出すと、オブジェクトuserを呼び出すことができる。
//つまり、this.birthYear=user.birthYearとなる
//関数呼び出しの「.」の前のオブジェクトがthisになる
//thisをつけている一つ上のオブジェクトが対象

console.log(this);
console.log(this === window);

//上に何もない時はグローバルオブジェクトを参照する。
//グローバルオブジェクトはブラウザ環境のオブジェクトWindowオブジェクトとも言う