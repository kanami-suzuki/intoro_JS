'use strict';

//&& 論理AND
//論理値Aが論理値Bがあったときに、結果がどちらもtrueになるときに結果がtrueとなる
console.log(true && true)
console.log(true && false)
console.log(false && false)

// || 論理値OR
//論理値Aが論理値Bがあったときに、結果がどちらかがtrueになったときに結果がtrueとなる
console.log(true || true)
console.log(true || false)
console.log(false || false)

// ! 論理NOT
//論理値を反転させる演算子
console.log(!true);
console.log(!false);

//論理演算子の優先順位は、! > && > || の順に高い
console.log(false && true || true);
console.log(false && (true || true));

//例題) 運転免許証を持っていて、
//かつ、いわゆるゴールド免許の場合には、
//「あなたは優良ドライバーです」と表示する

let hasDriverLicense = true;
let hasGoldLicense = true;
if (hasDriverLicense && hasGoldLicense) {
  console.log('あなたは優良ドライバーです');
}