'use strict';
//DOMContentLoadedイベント
//DOMツリーの構築が完了したタイミングで発生するイベント
//画像やスタイルシートなどの、HTMLで記述したリソースの読み込み前に発生する
//スタイルシートや画像などを読み込む前に発生するイベント

//loadイベント
//DOMツリーの構築とページ全体のリソース(スタイルシートや画像など)全てを読み込んだ後に発生するイベント

//例題：「Now loading...」表示＋画像表示をする
//DOMContentLoadedイベントが発生したらalertダイアログを表示する
//loadイベントが発生したら、「Now loading...」を非表示にする
document.addEventListener('DOMContentLoaded', function () {
  alert('DOMContentLoaded');
}, false)

//画像の読み込みが終わったら「Now loading...」を消す
window.onload = function () {
  const nowLoading = document.getElementById('nowLoading');
  nowLoading.style.display = 'none';
}