// モーダル要素の取得
const modal = document.getElementById('easyModal');


// 開くボタン取得
const buttonOpen = document.getElementById('modalOpen');


// 閉じるボタン取得
const buttonClose = document.getElementsByClassName('modalClose')[0];


// クリックで開くイベントリスナー
// buttonOpen.addEventListener('click', function() {
//   modal.style.display = 'block';
// })

// // クリックで閉じるイベントリスナー
// buttonClose.addEventListener('click', function() {
//   modal.style.display = 'none';
// })

// // モーダル以外の場所クリックのイベントリスナー
// modal.addEventListener('click', function() {
//   modal.style.display = 'none';
// })

// クリックで開くイベントリスナー
buttonOpen.addEventListener('click', modalOpen);

// // クリックで閉じるイベントリスナー
buttonClose.addEventListener('click', modalClose);

// // モーダル以外の場所クリックのイベントリスナー
addEventListener('click', outsideClose);

// モーダルオープンの関数
function modalOpen() {
  modal.style.display = 'block';
} 

// モーダルを閉じる関数
function modalClose() {
  modal.style.display = 'none';
}

// モーダル以外がクリックされた時に閉じる関数
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  } 
  console.log(e.target);
}