import '../../../_modules/module';

const tabcontent1 = document.querySelector('.tab_contentItem1');

// classを取得して、クリックイベントとして関数を追加

document.querySelector('.tab_navItem1').onclick = () => {
  tabcontent1.style.display = 'block';
};
