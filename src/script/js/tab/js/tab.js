import '../../../_modules/module';

// 読み込みでイベント発火する関数
document.addEventListener('DOMContentLoaded', () => {
  // tab_navItemのHTMLCollectionを取得して、変数tabsに格納
  const tabs = document.getElementsByClassName('tab_navItem');
  if (tabs) {
    // .tan_navItemの要素に対し、要素の数だけclickイベントの関数tabSwitchを繰り返し。
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch);
    }
  }
  // タブをクリックすると実行する関数
  function tabSwitch() {
    const activeTab = document.getElementsByClassName('is-active');
    const showContent = document.getElementsByClassName('is-show');
    const contentItem = document.getElementsByClassName('tab_contentItem');
    // タブのclassの値を変更する記述：.is-activeを持つ要素から.is-activeを削除、そして追加。
    activeTab[0].classList.remove('is-active');
    this.classList.add('is-active');
    // タブコンテンツのclassの値を変更する記述：
    // .is-showを持つ要素から.is-showを削除、そして追加。
    // slice.call()により、tabsの要素を配列にする。
    // その配列の中から、クリックされたタブのインデックス番号(is-activeを持つ要素の番号)を返し、
    // 同じインデックス番号を持つ.tab_contentItemに.is-showを与える。
    showContent[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    contentItem[index].classList.add('is-show');
  }
});
