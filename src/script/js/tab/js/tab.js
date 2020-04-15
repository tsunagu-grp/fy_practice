import '../../../_modules/module';

// 読み込みでイベント発火する関数
document.addEventListener('DOMContentLoaded', () => {
  // tab_navItemのHTMLCollectionを取得して、変数tabsに格納
  const tabs = document.getElementsByClassName('tab_navItem');
  // .tan_navItemの要素に対し、要素の数だけclickイベントの関数tabSwitchを繰り返し
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  }
  // タブをクリックすると実行する関数
  function tabSwitch() {
    // タブのclassの値を変更する記述：.is-activeを持つ要素から.is-activeを削除、そして追加。
    document
      .getElementsByClassName('is-active')[0]
      .classList.remove('is-active');
    this.classList.add('is-active');
    // タブコンテンツのclassの値を変更する記述：
    // .is-showを持つ要素から.is-showを削除、そして追加。
    // slice.call()メソッドにより、tabsの要素を配列にする。
    // その配列の中からクリックしたタブのインデックス番号を返し、
    // 同じインデックス番号を持つ.tab_contentItemの要素に.is-showを与える。
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document
      .getElementsByClassName('tab_contentItem')
      [index].classList.add('is-show');
  }
});
