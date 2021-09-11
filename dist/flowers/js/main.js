$(document).ready(function () {
	AOS.init()
	AOS.init({
		offset: 65, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 650, // values from 0 to 3000, with step 50ms
	})
	const flowersSlider = new Swiper('.flowers-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 6,
		speed: '0.6s',
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 40,
			},
		},
	})
	const reviewsSlider = new Swiper('.reviews-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		speed: '0.9s',
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	$('#review-1').on('click', function () {
		$.fancybox.open(
			[
				{
					src: '../img/reviews/image-1.jpg',
					opts: {
						caption: 'Первая картинка',
						thumb: '../img/reviews/image-1.jpg',
					},
				},
				{
					src: '../img/reviews/image-3.jpg',
					opts: {
						caption: 'Вторая картинка',
						thumb: '../img/reviews/image-3.jpg',
					},
				},
				{
					src: '../img/reviews/image-4.jpg',
					opts: {
						caption: 'Третья картинка',
						thumb: '../img/reviews/image-4.jpg',
					},
				},
			],
			{
				loop: true,
				thumbs: {
					autoStart: true,
				},
			},
		)
	})

	$('#review-2').on('click', function () {
		$.fancybox.open(
			[
				{
					src: '../img/reviews/image-2.jpg',
					opts: {
						caption: 'Первая картинка',
						thumb: '../img/reviews/image-2.jpg',
					},
				},
				{
					src: '../img/reviews/image-5.jpg',
					opts: {
						caption: 'Вторая картинка',
						thumb: '../img/reviews/image-6.jpg',
					},
				},
				{
					src: '../img/reviews/image-6.jpg',
					opts: {
						caption: 'Третья картинка',
						thumb: '../img/reviews/image-6.jpg',
					},
				},
			],
			{
				loop: true,
				thumbs: {
					autoStart: true,
				},
			},
		)
	})

	const addTrigger = document.querySelectorAll('.add__btn'),
		removeTrigger = document.querySelectorAll('.remove__btn'),
		counterInput = document.querySelectorAll('.counter__input');

	addTrigger.forEach((item, i) => {
		item.addEventListener('click', function () {
			counterInput[i].value++;
			counterInput[i].value = counterInput[i].value++
		})
	})
	removeTrigger.forEach((item, i) => {
		item.addEventListener('click', function () {
			if (counterInput[i].value <= 1) {
				counterInput[i].value = 1;
			} else {
				counterInput[i].value--;
				counterInput[i].value = counterInput[i].value--;
			}
		})
	})
})
