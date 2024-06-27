'use strict';

//スペルミス
// konsole.log('Hello');
console.log('Hello');
//Uncaught ReferenceError: konsole is not defined at 行数
//konsoleが定義されていないという意味

//全角
//console.log('Hello')： //セミコロンが全角
console.log('Hello');
//Uncaught SyntaxError: Invalid or unexpected token (at 行数)
//無効または予期しないトークン(大なり記号や括弧など)があることを指している