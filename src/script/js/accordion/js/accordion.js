import '../../../_modules/module';

document.addEventListener('DOMContentLoaded', () => {
  // アコーディオンメニュー＆アコーディオンコンテント要素を取得し変数に格納
  const nav = document.querySelectorAll('h2.accordion_navItem');
  const content = document.querySelectorAll('p.accordion_contentItem');
  // 非表示・表示させる関数
  const showContent = () => {
    // 非表示のclassがあれば、非表示classと、2回目以降に閉じるclassも消す。
    if (content[0].classList.contains('hidden')) {
      content[0].classList.remove('hidden', 'slideout');
      // 非表示classがなければ、閉じるclassを追加し、遅らせて非表示classを追加。
    } else {
      content[0].classList.add('slideout');
      // 非表示のclassの付与を200ms遅らせる。（cssアニメーション時間と合わせる）
      setTimeout(() => {
        content[0].classList.add('hidden');
      }, 200);
    }
  };
  nav[0].addEventListener('click', showContent);
});
