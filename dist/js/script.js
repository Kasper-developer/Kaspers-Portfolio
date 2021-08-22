window.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeBtn = document.querySelector('.menu__close');

	hamburger.addEventListener('click', () => {
		menu.classList.add('menu--active');
		document.body.style.overflow = 'hidden';
	})

	closeBtn.addEventListener('click', () => {
		menu.classList.remove('menu--active');
		document.body.style.overflow = '';
	})
})