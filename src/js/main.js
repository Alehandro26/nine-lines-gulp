import * as Vendor from './vendor';
import {locoScroll} from './vendor';

Vendor;

const buttonPopup = document.querySelector('.header__menu');
const popupWindow = document.querySelector('.popup');
const body = document.body;
const linkPopup = document.querySelectorAll('.popup__link');

buttonPopup.addEventListener('click', popup);

linkPopup.forEach(linkExit => linkExit.addEventListener('click', popupExit));

function popup() {
    buttonPopup.classList.toggle('header__menu_active');
    popupWindow.classList.toggle('popup_active');
    body.classList.toggle('active');
}

function popupExit() {
    buttonPopup.classList.remove('header__menu_active');
    popupWindow.classList.remove('popup_active');
    body.classList.remove('active');
}

const about = document.querySelector('#about');
const experience = document.querySelector('#experience');
const skill = document.querySelector('#skill');

const menu1 = document.querySelector('.menu-1');
const menu2 = document.querySelector('.menu-2');
const menu3 = document.querySelector('.menu-3');

menu1.addEventListener('click', () => about.scrollIntoView({behavior: "smooth"}));
menu2.addEventListener('click', () => experience.scrollIntoView({behavior: "smooth"}));
menu3.addEventListener('click', () => skill.scrollIntoView({behavior: "smooth"}));

const menuItem1 = document.querySelector('.menu-des-1');
const menuItem2 = document.querySelector('.menu-des-2');
const menuItem3 = document.querySelector('.menu-des-3');

menuItem1.addEventListener('click', menuItemOne);

function menuItemOne() {
    locoScroll.scrollTo(about);
    menuItem1.classList.add('menu-des__item_active');
    menuItem2.classList.remove('menu-des__item_active');
    menuItem3.classList.remove('menu-des__item_active');
}

menuItem2.addEventListener('click', menuItemTwo);

function menuItemTwo() {
    locoScroll.scrollTo(experience);
    menuItem2.classList.add('menu-des__item_active');
    menuItem1.classList.remove('menu-des__item_active');
    menuItem3.classList.remove('menu-des__item_active');
}

menuItem3.addEventListener('click', menuItemThree);

function menuItemThree() {
    locoScroll.scrollTo(skill);
    menuItem3.classList.add('menu-des__item_active');
    menuItem2.classList.remove('menu-des__item_active');
    menuItem1.classList.remove('menu-des__item_active');
}

const scrollTop = document.querySelector('.top-link__link');

scrollTop.addEventListener('click', () => locoScroll.scrollTo(0, 0));

gsap.registerPlugin(ScrollTrigger);

let fadeExperience = () => {
  setTimeout(() => {
    gsap.to(".fade", {
      scrollTrigger: {
        trigger: ".fade",
        start: "80px 55%",
        scroller: "[data-scroll-container]",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.6,
      },
    });

    gsap.to(".fade-bot", {
      scrollTrigger: {
        trigger: ".fade-bot",
        start: "0 75%",
        scroller: "[data-scroll-container]",
      },
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      stagger: {
        amount: 0.4,
      },
    });

    gsap.to(".fade-left", {
      scrollTrigger: {
        trigger: ".fade-left",
        start: "0 65%",
        scroller: "[data-scroll-container]",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
      },
    });

    gsap.to(".fade-right", {
      scrollTrigger: {
        trigger: ".fade-right",
        start: "0 65%",
        scroller: "[data-scroll-container]",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
      },
    });

       gsap.to(".fade-skill", {
      scrollTrigger: {
        trigger: ".fade-skill",
        start: "0 75%",
        scroller: "[data-scroll-container]",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });

  }, 2500)
};

fadeExperience();

const linkTop = document.querySelector('.top-link');
const footer = document.querySelector('.footer');

locoScroll.on('scroll', ({limit, scroll}) => {
  if ((scroll.y + footer.clientHeight) >= limit.y) {
    linkTop.classList.add('active');
  } else if (scroll.y + footer.clientHeight < limit.y) {
    linkTop.classList.remove('active');
  }
})

if (document.documentElement.clientWidth >= 1024) {
  locoScroll.on('scroll', ({ limit, scroll }) => {
  let progressValue = document.querySelector('.top-link__progress');
  const progress = Math.round( scroll.y / limit.y * 100 );

  linkTop.style.background = `conic-gradient(#d2233c ${progress}%, #fff ${progress}%)`;
  progressValue.textContent = `${progress} %`;
}) 
} else {
  window.addEventListener('scroll', scrollPercetnage);

  function scrollPercetnage() {
  let progressValue = document.querySelector('.top-link__progress');
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round( pos * 100 / calcHeight);

  linkTop.style.background = `conic-gradient(#d2233c ${scrollValue}%, #fff ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue} %`;
  };
};


 
