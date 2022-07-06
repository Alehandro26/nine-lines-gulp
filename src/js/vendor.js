import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import Share from 'ninelines-sharing';
import LocomotiveScroll from 'locomotive-scroll';
import Preloader from 'ninelines-preloader';

const loader = document.querySelector('.preloader');
const loaderImage = document.querySelector('.preloader__image');

Preloader.init("../images/sprites/png/Logo.png", 0)
    .then(() => {
        loaderImage.style.animation = "loader 2.5s linear forwards";
        setTimeout((() => loader.style.display = "none"), 2500); 
    });

export const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

Array.from(document.querySelectorAll('[data-social]')).forEach((link) => {
    link.addEventListener('click', () => {
        let url = location.origin + location.pathname;

        switch (event.currentTarget.dataset.social) {
            case 'facebook':
                Share.facebook(url);
                break;

            case 'vk':
                Share.vk(url);
                break;

            case 'telegram':
                Share.telegram(url);
                break;
        }
    });
});

svg4everybody();
objectFitImages();
// objectFitVideos();


window.objectFitImages = objectFitImages;
// window.objectFitVideos = objectFitVideos;

require('ninelines-ua-parser');
