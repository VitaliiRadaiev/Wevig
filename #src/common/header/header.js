let header = document.querySelector('[data-header]');

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('header--is-scroll', window.pageYOffset > 50);
    })
}

let mobileMenu = document.querySelector('[data-mobile-menu]');
if(mobileMenu) {
    let btnOpen = document.querySelector('[data-action="mobile-menu-open"]');
    let btnClose = document.querySelector('[data-action="mobile-menu-close"]');

    if(btnOpen) {
        btnOpen.addEventListener('click', () => {
            mobileMenu.classList.add('mobile-menu--open');
            document.body.classList.add('overflow-hidden');
        })
    }
    if(btnClose) {
        btnClose.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu--open');
            document.body.classList.remove('overflow-hidden');
        })
    }
}

