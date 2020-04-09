import '../../../_modules/module';

// 対象のclassを取得して、クリックイベントの関数を追加
//   タブ中身を、toggleメソッドでactiveクラスを付け外しすることで、表示/非表示を切り替える。
document.querySelector('.tab_navItem1').onclick = () => {
  document.querySelector('.tab_contentItem1').classList.toggle('is-active');
};
// document.addEventListener('DOMcontentLoaded', () => {
//   const tab_navItem = document.querySelector('.tab_navItem');
//   const tab_contentItem = document.querySelector('.tab_contentItem');

//   tab_navItem.onclick = () => {
//     tab_contentItem.classList.toggle('is-active');
//   };
// });
