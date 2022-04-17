document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.section-tree-button').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active');
      document.querySelector('section-tree-button').style.color = 'red';
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.burger');
  const menuClose = document.querySelector('.menu-close');
  const menuBurger = document.querySelector('.nav');

  burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger-active');
  });

  menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');
  });
});

start();
