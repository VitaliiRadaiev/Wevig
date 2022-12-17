let blogListRowSliders = document.querySelectorAll('[data-slider="blog-list-row-slider"]');
if (blogListRowSliders.length) {
    blogListRowSliders.forEach(blogListRowSlider => {

        let sliderData = new Swiper(blogListRowSlider.querySelector('.swiper'), {
            speed: 600,
            //loop: true,
            navigation: {
                nextEl: blogListRowSlider.querySelector('.current-posts__slider-btn.next'),
                prevEl: blogListRowSlider.querySelector('.current-posts__slider-btn.prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1568: {
                    slidesPerView: 4,
                    spaceBetween: 85,
                },
            },

        });

    })
}