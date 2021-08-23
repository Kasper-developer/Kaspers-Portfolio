window.addEventListener('DOMContentLoaded', () => {
	// Hamburger
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

	// Skills-lines

	const counters = document.querySelectorAll('.skills-level__counter'),
		lines = document.querySelectorAll('.skills-level__line span');

	counters.forEach((counter, i) => {
		lines[i].style.width = counter.innerHTML	;
	})
})