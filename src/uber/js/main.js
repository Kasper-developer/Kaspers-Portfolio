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

	const openHamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu__item');

	openHamburger.addEventListener('click', () => {
		menu.classList.toggle('menu__active');
		openHamburger.classList.toggle('hamburger__active');
		document.body.classList.toggle('hidden');
	})

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.toggle('menu__active');
			openHamburger.classList.toggle('hamburger__active');
			document.body.classList.remove('hidden');
		})
	})

	// Плавная прокрутка в меню

	let anchors = document.querySelectorAll('nav a[href*="#"]');

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

	/* 	function showModalByScroll() {
			if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
				openModal();
				window.removeEventListener('scroll', showModalByScroll);
			}
		}
	
		window.addEventListener('scroll', showModalByScroll) */
})