let currentPostsSections = document.querySelectorAll('[data-current-posts]');
if(currentPostsSections.length) {
    currentPostsSections.forEach(currentPostsSection => {
        let sliderWrap = currentPostsSection.querySelector('.current-posts__slider');
        if(sliderWrap) {
            let sliderData = new Swiper(sliderWrap.querySelector('.swiper'), {
                speed: 600,
                //loop: true,
                navigation: {
                    nextEl: sliderWrap.querySelector('.current-posts__slider-btn.next'),
                    prevEl: sliderWrap.querySelector('.current-posts__slider-btn.prev'),
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1268: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1568: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    },
                },

            });
        }
    })
}