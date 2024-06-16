'use strict';
//例題：タイマー処理
//3秒経過したらコンソールに「Timeout」と表示する
//標準関数

const displayMassage = function () {
  console.log('Timeout');
}
setTimeout(displayMassage, 3000);
//第一引数に指定した秒数後に実行したい関数を指定する。第二引数に秒数をミリ秒で指定する

//例題：名前の入力が完了したら
//「Hello ○○さん」とコンソールに表示する
//ユーザー定義関数

//コールバック関数
function greeting(name) {
  console.log(`Hello ${name}さん`);
}

//名前の入力を求める関数
function inputUserName(callback) {
  let name = prompt('あなたのお名前を入力してください');
  callback(name); //ここでgreeting(name)が実行されている
}
//prompt()は標準関数

//関数呼び出し
//入力を求める関数の引数にコールバック関数を入れることで、別の関数でコールバック関数を呼び出すことができる
inputUserName(greeting);

//1 inputUserName関数を呼び出す
//2 greeting()関数を引数として渡す
//3 inputUserName関数が実行される
//4 引数にはgreeting()関数が入っている
//5 ユーザーに入力してもらった文字列をprompt()で受け取り、文字列を変数nameに代入する
//6 inputUserName関数の引数(callback)で受け取ったgreeting()関数を実行する
//7 greeting()関数の引数は変数nameを渡す。nameにはユーザーの名前が入っている