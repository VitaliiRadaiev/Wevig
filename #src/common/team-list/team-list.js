let teamListSlider = document.querySelector('[data-slider="team-list"]');
if(teamListSlider) {
    const slider = teamListSlider;
	if(slider) {
		let mySwiper;

		function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider.querySelector('.swiper'), {
					slidesPerView: 1,
                    spaceBetween: 30,
					speed: 600,
                    navigation: {
                        nextEl: slider.querySelector('.current-posts__slider-btn.next'),
                        prevEl: slider.querySelector('.current-posts__slider-btn.prev'),
                    },
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.querySelector('.swiper').classList.contains('swiper-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}
}