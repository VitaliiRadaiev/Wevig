let promoHeader = document.querySelector('[data-promo-header]');
if (promoHeader) {
    let promoBg = document.querySelector('.promo-header__bg');
    if (promoBg) {
        const setBgWidth = () => {
            let width = ((promoBg.clientHeight + 100) / 100 * 177.77);
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
}