const loader = document.querySelector('.preloader');
const loaderImage = document.querySelector('.preloader__image');

window.addEventListener('load', () => {
    loaderImage.style.animation = 'loader 2.5s linear forwards';
    setTimeout(() => loader.style.display = "none", 2500);
})


const buttonPopup = document.querySelector('.header__menu');
const popupWindow = document.querySelector('.popup');
const body = document.body;
const linkPopup = document.querySelectorAll('.popup__link')

buttonPopup.addEventListener('click', popup);

linkPopup.forEach(linkExit => linkExit.addEventListener('click', popupExit));

function popup() {
    buttonPopup.classList.toggle('active');
    popupWindow.classList.toggle('active');
    body.classList.toggle('active');
}

function popupExit() {
    buttonPopup.classList.remove('active');
    popupWindow.classList.remove('active');
    body.classList.remove('active');
}

const about = document.querySelector('#about');
const experience = document.querySelector('#experience');
const skill = document.querySelector('#skill');

const menu1 = document.querySelector('.menu-1');
const menu2 = document.querySelector('.menu-2');
const menu3 = document.querySelector('.menu-3');

menu1.addEventListener('click', () => about.scrollIntoView({behavior: "smooth"}))
menu2.addEventListener('click', () => experience.scrollIntoView({behavior: "smooth"}))
menu3.addEventListener('click', () => skill.scrollIntoView({behavior: "smooth"}))

const menuItem1 = document.querySelector('.menu-des-1');
const menuItem2 = document.querySelector('.menu-des-2');
const menuItem3 = document.querySelector('.menu-des-3');

menuItem1.addEventListener('click', menuItemOne)

function menuItemOne() {
    about.scrollIntoView({behavior: "smooth"});
    menuItem1.classList.add('active');
    menuItem2.classList.remove('active');
    menuItem3.classList.remove('active');
}

menuItem2.addEventListener('click', menuItemTwo)

function menuItemTwo() {
    experience.scrollIntoView({behavior: "smooth"});
    menuItem2.classList.add('active');
    menuItem1.classList.remove('active');
    menuItem3.classList.remove('active');
}

menuItem3.addEventListener('click', menuItemThree)

function menuItemThree() {
    skill.scrollIntoView({behavior: "smooth"});
    menuItem3.classList.add('active');
    menuItem2.classList.remove('active');
    menuItem1.classList.remove('active');
}

const header = document.querySelector('.header');
const scrollTop = document.querySelector('.top-link__link');

scrollTop.addEventListener('click', () => header.scrollIntoView({behavior: "smooth"}));

gsap.registerPlugin(ScrollTrigger);

gsap.to(".fade", {
      scrollTrigger: {
        trigger: ".fade",
        start: "80px 55%",
      },
      opacity: 1,
      y: 0,
      delay: 2.5,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.6,
      },
    });

   // let fadeExperience = () => {
  //if (loader.classList.contains('not')) {
    gsap.to(".fade-bot", {
      scrollTrigger: {
        trigger: ".fade-bot",
        start: "0 70%",
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
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
      },
    });
 // }
//}

//fadeExperience();

    gsap.to(".fade-skill", {
      scrollTrigger: {
        trigger: ".fade-skill",
        start: "0 75%",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });
