import '../../../_modules/module';

const nav = document.querySelectorAll('h2.accordion_nav');
console.log(nav);
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', function() {
    this.classList.toggle('active');
    // navの次にある要素を取得。
    const content = this.nextElementSibling;
    // contentのstyle属性のheightがあるか判定、あればnull、無ければcontentの要素の高さを属性として入れる。
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + 'px';
    }
  });
}
