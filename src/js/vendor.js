import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
// import objectFitVideos from 'object-fit-videos';
import Share from 'ninelines-sharing';

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
