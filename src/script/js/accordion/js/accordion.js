import '../../../_modules/module';

document.addEventListener('DOMContentLoaded', () => {
  // アコーディオンメニュー＆アコーディオンコンテント要素を取得し変数に格納
  const nav = document.getElementsByClassName('accordion_navItem');
  const content = document.getElementsByClassName('accordion_contentItem');
  // 表示非表示のclassを付け外しする関数を定義
  function showContent() {
    content[0].classList.toggle('show');
    content[0].classList.toggle('hide');
  }
  // タブメニューがクリックされたら実行
  nav[0].addEventListener('click', showContent);
});
