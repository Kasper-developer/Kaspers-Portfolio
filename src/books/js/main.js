$(document).ready(function () {
	$('.navbar-burger').on('click', function () {
		$('.navbar-burger, .menu__list').toggleClass('active')
		$('body').toggleClass('lock')
	});
	AOS.init();
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
})
