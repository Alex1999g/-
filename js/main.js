const btnOne = document.querySelector('.btn1');
const btnTwo = document.querySelector('.btn2');
const btnThree = document.querySelector('.btn3');
const btnFour = document.querySelector('.btn4');
const btnFive = document.querySelector('.btn5');

const strOne = document.querySelector('#str1');
const strDopOne = document.querySelector('#strDop1');
const strTwo = document.querySelector('#str2');
const strDopTwo = document.querySelector('#strDop2');
const strThree = document.querySelector('#str3');
const strDopThree = document.querySelector('#strDop3');
const strFour = document.querySelector('#str4');
const strDopFour = document.querySelector('#strDop4');
const strFive = document.querySelector('#str5');
const strDopFive = document.querySelector('#strDop5');

const dropdownOne = document.querySelector('#dropdown1');
const dropdownTwo = document.querySelector('#dropdown2');
const dropdownThree = document.querySelector('#dropdown3');
const dropdownFour = document.querySelector('#dropdown4');
const dropdownFive = document.querySelector('#dropdown5');


btnOne.addEventListener('click', () => {
  strOne.classList.toggle('btn-no-visible');
  strDopOne.classList.toggle('btn-visible');
  dropdownOne.classList.toggle('dropdown1');
});

btnTwo.addEventListener('click', () => {
    strTwo.classList.toggle('btn-no-visible');
    strDopTwo.classList.toggle('btn-visible');
    dropdownTwo.classList.toggle('dropdown1');
});

btnThree.addEventListener('click', () => {
  strThree.classList.toggle('btn-no-visible');
  strDopThree.classList.toggle('btn-visible');
  dropdownThree.classList.toggle('dropdown1');
});

btnFour.addEventListener('click', () => {
  strFour.classList.toggle('btn-no-visible');
  strDopFour.classList.toggle('btn-visible');
  dropdownFour.classList.toggle('dropdown1');
});

btnFive.addEventListener('click', () => {
  strFive.classList.toggle('btn-no-visible');
  strDopFive.classList.toggle('btn-visible');
  dropdownFive.classList.toggle('dropdown1');
});


const swiper = new Swiper('.hero__swiper', {

    loop: true,
    autoplay: {
        delay: 1000,
    },
    simulateTouch: false,
});

const select = document.querySelector('.gallery__select-btn-one');
const selectCntainer = document.querySelector('.gallery__dropdown-container');
const strokeSelect = document.querySelector('#gallery__stroke');
const strokeSelectDop = document.querySelector('#gallery__stroke-dop');
const selectValue = document.querySelector('#spangallery');
const selectBtnOne = document.querySelector('#btnSelect1');
const selectBtnTwo = document.querySelector('#btnSelect2');

selectBtnOne.addEventListener('click', () => {
  const textSelect = selectValue.textContent;
  const selectBtnValue = selectBtnOne.textContent;

  selectValue.textContent = selectBtnValue;
  selectBtnOne.textContent = textSelect;
});

selectBtnTwo.addEventListener('click', () => {
  const textSelect = selectValue.textContent;
  const selectBtnValue = selectBtnTwo.textContent;

  selectValue.textContent = selectBtnValue;
  selectBtnTwo.textContent = textSelect;
});

select.addEventListener('click', () => {
  strokeSelect.classList.toggle('stroke-novisible');
  strokeSelectDop.classList.toggle('stroke-dop');
  selectCntainer.classList.toggle('select-dropdwn-visible');
});


const gallerySwiper = new Swiper('.gallery__swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.gallery__swiper-btn-next',
      prevEl: '.gallery__swiper-btn-prev',
    },

    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
});

new Accordion('.accordion-container');

let tabsBtn = document.querySelectorAll('.tabs__acc-btn');
let tabsItem = document.querySelectorAll('.content-tabs');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function(element){ element.classList.remove('content-tabs--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('content-tabs--active');
    });
});

const newSwiper = new Swiper('.swiper__new', {
  loop: true,

  navigation: {
    nextEl: '.new__swiper-button-next',
    prevEl: '.new__swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
});

const proectsSwiper = new Swiper('.proects__swiper', {
  loop: true,

  navigation: {
    nextEl: '.proects__swiper-button-next',
    prevEl: '.proects__swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
});


ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
}
