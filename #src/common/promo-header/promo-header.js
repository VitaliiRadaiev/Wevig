let promoHeader = document.querySelector('[data-promo-header]');
if (promoHeader) {
    let promoBg = document.querySelector('.promo-header__bg');
    if (promoBg) {
        const setBgWidth = () => {
            let width = ((promoBg.clientHeight + 200) / 100 * 177.77);
            if (width > document.documentElement.clientWidth) {
                promoBg.style.width = width + 'px';
                promoBg.style.height = 'calc(100% + 100px)';
            } else {
                promoBg.style.width = 'calc(100% + 100px)';
                promoBg.style.height = (document.documentElement.clientWidth / 100 * 56.25) + 'px';
            }
        }

        setBgWidth();
        window.addEventListener('resize', setBgWidth);
    }

    let bgImages = Array.from(promoBg.querySelectorAll('img'));
    if(bgImages.length) {

        let anim = anime.timeline({
            easing: 'easeOutQuad',
            autoplay: false,
        })
        .add({
            targets: '.promo-header__bg-layer--2 img',
            scale: [1.6, 1],
            translateY: ['100%', '0%'],
            duration: 1500,
            delay: 0,
        })
        .add({
            targets: '.promo-header__bg-layer--1 img',
            translateX: ['-100%', '0%'],
            duration: 1000,
            delay: 0,
        }, '-=1000')
        .add({
            targets: '.promo-header__bg-layer--4 img',
            translateY: ['100%', '0%'],
            scale: [0, 1],
            duration: 600,
            delay: 0,
        })
        .add({
            targets: ['.promo-header__title', '.promo-header__subtitle'],
            translateY: ['100%', '0%'],
            opacity: [0, 1],
            duration: 400,
            delay: (el, i) => 200 * i,
        })
        .add({
            targets: '.header__logo',
            translateY: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 400,
            delay: 0,
        })
        .add({
            targets: [...document.querySelectorAll('.header__menu .menu__list li'), '.header__btn', '.header__burger '],
            translateY: ['-100%', '0%'],
            opacity: [0, 1],
            duration: 300,
            delay: (el, i) => 40 * (i + 1),
        })

        promoBg.classList.add('spiner');

        let wrappedImagesByPromise = bgImages.map(img => {
            return new Promise(resolve => {
                img.src = img.dataset.src;
                img.onload = () => {
                    resolve();
                }
            })
        })

        Promise.all(wrappedImagesByPromise)
        .then(data => {
            promoBg.classList.remove('spiner');
            promoBg.classList.add('loaded');

            anim.play();
        });
    }
}