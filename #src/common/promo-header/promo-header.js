let promoHeader = document.querySelector('[data-promo-header]');
if (promoHeader) {
    let promoBg = document.querySelector('.promo-header__bg');
    if (promoBg) {
        // const setBgWidth = () => {
        //     let width = ((promoBg.clientHeight + 200) / 100 * 177.77);
        //     if (width > document.documentElement.clientWidth) {
        //         promoBg.style.width = width + 'px';
        //         promoBg.style.height = 'calc(100% + 100px)';
        //     } else {
        //         promoBg.style.width = 'calc(100% + 100px)';
        //         promoBg.style.height = (document.documentElement.clientWidth / 100 * 56.25) + 'px';
        //     }
        // }

        // setBgWidth();
        // window.addEventListener('resize', setBgWidth);
        setCoverVideoIframe(promoBg, promoHeader, {desk: {w: 16, h: 9}, mob: {w:555, h: 700}});
    }

    let bgImages = Array.from(promoHeader.querySelectorAll('.promo-header__bg-layer img'));
    if (bgImages.length) {

        let anim = anime.timeline({
            easing: 'easeOutQuad',
            autoplay: false,
        })
            .add({
                targets: '.promo-header__bg-layer--3 img',
                scale: [1.6, 1],
                translateY: ['100%', '0%'],
                duration: 1500,
                delay: 0,
            })
            .add({
                targets: '.promo-header__bg-layer--2 img',
                scale: [1.6, 1],
                translateY: ['100%', '0%'],
                duration: 700,
                delay: 0,
            })
            .add({
                targets: '.promo-header__bg-layer--5 img',
                translateX: ['200%', '0%'],
                opacity: [0, 1],
                duration: 800,
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

            promoHeader.classList.add('spiner');

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
                promoHeader.classList.remove('spiner');
                promoHeader.classList.add('loaded');

                anim.play();
            });
    }
}


function setCoverVideoIframe(iframe, parent, size) {

    const setSize = (widthVideo = 16.56, heightVideo = 9.31) => {
        let percentHeight = heightVideo / widthVideo * 100;
        let percentWidth = widthVideo / heightVideo * 100;

        if ((parent.clientHeight / parent.clientWidth * 100) < percentHeight) {
            iframe.style.width = 'calc(100% + 14%)';
            iframe.style.height = (parent.clientWidth / 100 * percentHeight) + ((parent.clientWidth / 100 * percentHeight) * 0.14) + 'px';
        } else {
            iframe.style.width = (parent.clientHeight / 100 * percentWidth) + ((parent.clientWidth / 100 * percentHeight) * 0.14)  + 'px';
            iframe.style.height = 'calc(100% + 14%)';
        }
    }

    setSize(size.desk.w, size.desk.h);


    window.addEventListener('resize', () => {
        setSize(size.desk.w, size.desk.h);
    });
}