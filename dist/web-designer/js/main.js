document.addEventListener('DOMContentLoaded', () => {
	// Анимация AOS

	AOS.init();

	AOS.init({

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 50, // offset (in px) from the original trigger point
		delay: 200, // values from 0 to 3000, with step 50ms
		duration: 600, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
	});
	// Hamburger
	const hamburger = document.querySelector('.header-burger'),
		headerItem = document.querySelectorAll('.header-burger__item'),
		burgerList = document.querySelector('.header-nav__list'),
		menuItem = document.querySelectorAll('.header-nav__list li')

	hamburger.addEventListener('click', () => {
		headerItem.forEach(item => {
			item.classList.toggle('header-burger__item--active')
			burgerList.classList.toggle('header-nav__list--active')
			document.body.classList.toggle('lock')
		})
	})
	menuItem.forEach((item, i) => {
		item.addEventListener('click', () => {
			burgerList.classList.remove('header-nav__list--active')
			document.body.classList.remove('lock')
			headerItem.forEach(item => {
				item.classList.remove('header-burger__item--active')
			})
		})
	})
	// Плавная прокрутка в меню

	let anchors = document.querySelectorAll('a[href*="#"]');

	for (anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			anchorId = this.getAttribute('href')
			document.querySelector(anchorId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		})
	}

	// = Событие прокрутки scroll
	const pageUp = document.querySelector('.pageup');

	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= 1600) {
			pageUp.classList.add('show', 'fade')
		} else {
			pageUp.classList.remove('show', 'fade')
		}
	})

	// Модальные окна и несколько доп.функций

	const triggerBtns = document.querySelectorAll('[data-btn="offer"]'),
		closeModalBtn = document.querySelector('[data-close="modal"]'),
		modal = document.querySelector('.modal');


	function openModal() {
		modal.classList.add('show', 'fade');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}
	triggerBtns.forEach(btn => {
		btn.addEventListener('click', openModal)
	})

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show', 'fade');
		document.body.style.overflow = '';
	}

	closeModalBtn.addEventListener('click', closeModal)

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code == 'Escape') {
			closeModal();
		}
	})

	// Swipers

	const swiper = new Swiper('.slider', {
		// Optional parameters
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			450: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 30
			},

			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},

			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},

			1200: {
				slidesPerView: 4,
				spaceBetween: 30
			},
		},
	});

	const swipe = new Swiper('.work__slider', {
		// Optional parameters
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
	});

	const swip = new Swiper('.review__slider', {
		// Optional parameters
		slidesPerView: 2,
		spaceBetween: 0,
		loop: true,

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			450: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 30
			},

			768: {
				slidesPerView: 1,
				spaceBetween: 20
			},

			970: {
				slidesPerView: 2,
				spaceBetween: 30,
			},

			1200: {
				slidesPerView: 2,
				spaceBetween: 30
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
	});

	/*
	Для родителя слойлеров пишем атрибут data-spollers
	Для заголовков слойлеров пишем атрибут data-spoller
	Если нужно включать\выключать работу спойлеров на разных размерах экранов
	пишем параметры ширины и типа брейкпоинта.
	Например: 
	data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
	data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px
	
	Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
	*/

	// SPOLLERS
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length > 0) {
			initSpollers(spollersRegular);
		}

		// Получение слойлеров с медиа запросами
		const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
			return item.dataset.spollers.split(",")[0];
		});

		// Инициализация слойлеров с медиа запросами
		if (spollersMedia.length > 0) {
			const breakpointsArray = [];
			spollersMedia.forEach(item => {
				const params = item.dataset.spollers;
				const breakpoint = { };
				const paramsArray = params.split(",");
				breakpoint.value = paramsArray[0];
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});

			// Получаем уникальные брейкпоинты
			let mediaQueries = breakpointsArray.map(function (item) {
				return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
			});
			mediaQueries = mediaQueries.filter(function (item, index, self) {
				return self.indexOf(item) === index;
			});

			// Работаем с каждым брейкпоинтом
			mediaQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);

				// Объекты с нужными условиями
				const spollersArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				// Событие
				matchMedia.addListener(function () {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length > 0) {
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_active');
					_slideToggle(spollerTitle.nextElementSibling, 500);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
			if (spollerActiveTitle) {
				spollerActiveTitle.classList.remove('_active');
				_slideUp(spollerActiveTitle.nextElementSibling, 500);
			}
		}
	}
	//SlideToggle
	let _slideUp = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.height = target.offsetHeight + 'px';
			target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			window.setTimeout(() => {
				target.hidden = true;
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideDown = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide');
			if (target.hidden) {
				target.hidden = false;
			}
			let height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			target.offsetHeight;
			target.style.transitionProperty = "height, margin, padding";
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			window.setTimeout(() => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
				target.classList.remove('_slide');
			}, duration);
		}
	}
	let _slideToggle = (target, duration = 500) => {
		if (target.hidden) {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
})

