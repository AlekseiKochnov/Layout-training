new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  simulateTouch: false,
});

let howWeWorkBtn = document.querySelectorAll('.howWeWork__btnTop');
let howWeWorkDescr = document.querySelectorAll('.howWeWork__allDescr');
let howWeWorkImg = document.querySelectorAll('.howWeWork__allImg');

howWeWorkBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    const img = e.currentTarget.dataset.path;

    howWeWorkBtn.forEach(function (btn) { btn.classList.remove('howWeWork__btnTop-active') });
    e.currentTarget.classList.add('howWeWork__btnTop-active');

    howWeWorkDescr.forEach(function (element) { element.classList.remove('howWeWork__allDescr-active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('howWeWork__allDescr-active');

    howWeWorkImg.forEach(function (element) { element.classList.remove('howWeWork__img-active') });
    document.querySelector(`[data-img="${img}"]`).classList.add('howWeWork__img-active');
  })
})

let questions = document.querySelectorAll('.frequentlyAskedQuestions__btn');

questions.forEach(function (el) {
  el.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelector(`[data-accordion="${path}"]`).classList.toggle('frequentlyAskedQuestions__accordion-active');

    document.querySelector(`[data-line="${path}"]`).classList.toggle('frequentlyAskedQuestions__line-active');

    document.querySelector(`[data-icon="${path}"]`).classList.toggle('frequentlyAskedQuestions__icon-active');

    document.querySelector(`[data-path="${path}"]`).classList.toggle('frequentlyAskedQuestions__btn-active');
  })
})

let line1 = document.querySelector('.header__line1');
let line2 = document.querySelector('.header__line2');
let line3 = document.querySelector('.header__line3');
let burger = document.querySelector('.header__burger');
let headerNav = document.querySelector('.header__nav');
let headerNavBtn = document.querySelector('.header__navBtn');
let headerLink = document.querySelectorAll('.header__link');

burger.addEventListener('click', function () {
  line1.classList.toggle('header__line1-active');
  line2.classList.toggle('header__line2-active');
  line3.classList.toggle('header__line3-active');
  headerNav.classList.toggle('header__nav-active');
  document.body.classList.toggle('stopScroll');
})

headerNavBtn.addEventListener('click', function () {
  line1.classList.remove('header__line1-active');
  line2.classList.remove('header__line2-active');
  line3.classList.remove('header__line3-active');
  headerNav.classList.remove('header__nav-active');
  document.body.classList.remove('stopScroll');
})

headerLink.forEach(function (el) {
  el.addEventListener('click', function () {
    line1.classList.remove('header__line1-active');
    line2.classList.remove('header__line2-active');
    line3.classList.remove('header__line3-active');
    headerNav.classList.remove('header__nav-active');
    document.body.classList.remove('stopScroll');
  })
})

let headerBtnLupa = document.querySelector('.header__btnLupa');
let headerForm = document.querySelector('.header__form');
let headerSearchLupa = document.querySelector('.header__searchLupa')
let headerSearchClose = document.querySelector('.header__searchClose')

headerBtnLupa.addEventListener('click', function () {
  headerForm.classList.add('header__form-active');

  body.addEventListener('click', function () {
    headerForm.classList.remove('header__form-active');
  })
})

headerSearchLupa.addEventListener('click', function () {
  headerForm.classList.remove('header__form-active');
})

headerSearchClose.addEventListener('click', function () {
  headerForm.classList.remove('header__form-active');
})

headerForm.addEventListener('submit', (e) => {
  e.preventDefault()
})