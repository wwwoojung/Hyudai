const TOPBANNER = document.querySelector('.TopBanner');

const TOPBANNER_DOTS = document.querySelectorAll('.TopBanner .dots li');

const TOPBANNER_SLIDE = new Swiper('.TopBanner_slide', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex);
            TOPBANNER_DOTS.forEach(it => it.classList.remove('on'));
            TOPBANNER_DOTS[this.realIndex].classList.add('on');
        }
    }
});


TOPBANNER_DOTS.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        TOPBANNER_SLIDE.slideToLoop(idx);
    })
});

const TOPBANNER_CLOSE = document.querySelector('.TopBanner .close');

TOPBANNER_CLOSE.addEventListener('click', e => {
    e.preventDefault();
    TOPBANNER.classList.add('on');
});


const HEADER = document.querySelector('.Header');
const MAIN_SLIDE_ARROW_LEFT = document.querySelector('.MainVisual .arrow_left');
const MAIN_SLIDE_ARROW_RIGHT = document.querySelector('.MainVisual .arrow_right');
const MAIN_SLIDE_NUM = document.querySelector('.MainVisual .num strong');
const MAIN_SLIDE_NUM_TOTAL = document.querySelector('.MainVisual .num span');
const MAIN_SLIDE_LIST = document.querySelectorAll('.MainVisual .right_link li');

window.addEventListener('scroll', () => {
    const sct = window.scrollY;
    sct > 0
        ? HEADER.classList.add('on')
        : HEADER.classList.remove('on');
});

const MAIN_SLIDE = new Swiper('.MainSlide', {
    loop: true,
    slideActiveClass: 'on',
    on: {
        init: function () {
            MAIN_SLIDE_NUM_TOTAL.innerHTML = `0${this.slides.length - 2}`;
        },
        slideChangeTransitionStart: function () {
            //console.log(this.realIndex, this.slides.length);
            MAIN_SLIDE_NUM.innerHTML = `0${this.realIndex + 1}`;
            MAIN_SLIDE_LIST.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_LIST[this.realIndex].classList.add('on');
        }
    }
});

MAIN_SLIDE_ARROW_LEFT.addEventListener('click', () => {
    MAIN_SLIDE.slidePrev();
});
MAIN_SLIDE_ARROW_RIGHT.addEventListener('click', () => {
    MAIN_SLIDE.slideNext();
});

MAIN_SLIDE_LIST.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        MAIN_SLIDE.slideToLoop(idx);
    })
});


const PORTFOLIO_LEFT_SLIDE = new Swiper('.mp_slide_left', {
    loop: true,
    effect: "fade",
    //allowTouchMove: false,
    fadeEffect: {
        crossFade: true
    },
    slideActiveClass: 'on',
    loopedSlides: 30,
});
const PORTFOLIO_RIGHT_SLIDE = new Swiper('.mp_slide_right', {
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 18,
    //allowTouchMove: false,
    slideActiveClass: 'on',
    loopedSlides: 30,
});


//두 개의 슬라이드 연결

PORTFOLIO_LEFT_SLIDE.controller.control = PORTFOLIO_RIGHT_SLIDE;
PORTFOLIO_RIGHT_SLIDE.controller.control = PORTFOLIO_LEFT_SLIDE;


const PORTFOLIO_SLIDE_ARROW_LEFT = document.querySelector('.MainPortfolio .arrow_left');
const PORTFOLIO_SLIDE_ARROW_RIGHT = document.querySelector('.MainPortfolio .arrow_right');

PORTFOLIO_SLIDE_ARROW_LEFT.addEventListener('click', () => {
    PORTFOLIO_RIGHT_SLIDE.slidePrev();
});

PORTFOLIO_SLIDE_ARROW_RIGHT.addEventListener('click', () => {
    PORTFOLIO_RIGHT_SLIDE.slideNext();
});


const SOLUTION_SLIDE_ARROW_LEFT = document.querySelector('.MainSolution .arrow_left');
const SOLUTION_SLIDE_ARROW_RIGHT = document.querySelector('.MainSolution .arrow_right');
const SOLUTION_SLIDE_NUM = document.querySelector('.MainSolution .num strong');
const SOLUTION_SLIDE_NUM_TOTAL = document.querySelector('.MainSolution .num span');
const SOLUTION_SLIDE_LIST = document.querySelectorAll('.MainSolution .desc_box li');
const SOLUTION_SLIDE_DOTS = document.querySelectorAll('.MainSolution .dots li');


const SOLUTION_SLIDE = new Swiper('.solu_slide', {
    loop: true,
    //slidesPerView: 2,
    spaceBetween: 100,
    centeredSlides: true,
    slidesPerView: "auto",
    slideActiveClass: 'on',
    on: {
        init: function () {
            SOLUTION_SLIDE_NUM_TOTAL.innerHTML = `0${this.slides.length}`;
        },
        slideChangeTransitionStart: function () {
            //console.log(this.realIndex, this.slides.length);
            SOLUTION_SLIDE_NUM.innerHTML = `0${this.realIndex + 1}`;
            SOLUTION_SLIDE_LIST.forEach(it => it.classList.remove('on'));
            SOLUTION_SLIDE_LIST[this.realIndex].classList.add('on');
            SOLUTION_SLIDE_DOTS.forEach(it => it.classList.remove('on'));
            SOLUTION_SLIDE_DOTS[this.realIndex].classList.add('on');
        }
    }
});


SOLUTION_SLIDE_ARROW_LEFT.addEventListener('click', () => {
    SOLUTION_SLIDE.slidePrev();
});

SOLUTION_SLIDE_ARROW_RIGHT.addEventListener('click', () => {
    SOLUTION_SLIDE.slideNext();
});

SOLUTION_SLIDE_DOTS.forEach((it, idx) => {
    it.addEventListener('click', () => {
        SOLUTION_SLIDE.slideToLoop(idx)
    })
});


const FOOTER_RIGHT_ANCHOR = document.querySelectorAll('.Footer .f_top .right > li > a');
const FOOTER_RIGHT_LINK = document.querySelectorAll('.Footer .f_top .right .link');



FOOTER_RIGHT_ANCHOR.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();

        // FOOTER_RIGHT_ANCHOR.forEach(it => it.classList.remove('on'));
        //e.target.classList.toggle('on');

        if (it.classList.contains('on')) {
            it.classList.remove('on');
            FOOTER_RIGHT_LINK[idx].classList.remove('on');
        } else {
            FOOTER_RIGHT_ANCHOR.forEach(el => el.classList.remove('on'));
            it.classList.add('on');
            FOOTER_RIGHT_LINK.forEach(el => el.classList.remove('on'));
            FOOTER_RIGHT_LINK[idx].classList.add('on');
        }

    })
});


const TOP_LANG_BTN = document.querySelector('.Header .lang a');

TOP_LANG_BTN.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('on')
})
















