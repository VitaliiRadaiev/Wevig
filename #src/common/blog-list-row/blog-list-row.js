let listOfPosts = document.querySelector('.blog__list');
if (listOfPosts) {
    const initSliders = (blogListRowSliders) => {
        if (blogListRowSliders.length) {
            blogListRowSliders.forEach(blogListRowSlider => {
                let slider = blogListRowSlider.querySelector('.swiper');

                if (slider.classList.contains('swiper-initialized')) return;

                let sliderData = new Swiper(slider, {
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
    }

    initSliders(listOfPosts.querySelectorAll('[data-slider="blog-list-row-slider"]'));

    let observer = new MutationObserver(mutationRecords => {
        initSliders(listOfPosts.querySelectorAll('[data-slider="blog-list-row-slider"]'));
    });


    observer.observe(listOfPosts, {
        childList: true,
        subtree: true,
    });
}