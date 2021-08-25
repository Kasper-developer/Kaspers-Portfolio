window.addEventListener('DOMContentLoaded', () => {
	// Анимация AOS

	AOS.init();

	AOS.init({

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 50, // offset (in px) from the original trigger point
		delay: 200, // values from 0 to 3000, with step 50ms
		duration: 700, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
	});
	// Hamburger
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu-list__item'),
		modalThanks = document.querySelector('#thanks'),
		closeModal = document.querySelector('.modal__close'),
		closeBtn = document.querySelector('.menu__close');

	hamburger.addEventListener('click', () => {
		menu.classList.add('menu--active');
		document.body.style.overflow = 'hidden';
	})

	closeBtn.addEventListener('click', () => {
		menu.classList.remove('menu--active');
		document.body.style.overflow = '';
	})

	closeModal.addEventListener('click', () => {
		modalThanks.classList.remove('show', 'fade');
	})

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('menu--active');
			document.body.style.overflow = '';
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

	// Skills-lines

	const counters = document.querySelectorAll('.skills-level__counter'),
		lines = document.querySelectorAll('.skills-level__line span');

	counters.forEach((counter, i) => {
		lines[i].style.width = counter.innerHTML;
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href = '#up']").click(function () {
		const _href = $(this).attr("href");
		$(".promo").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	// JQUERY VALIDATE FORM 

	function validateForm(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйcта введите свое имя",
					minlength: jQuery.validator.format('Введите минимум {0} символов')
				},
				phone: 'Пожалуйста введите свой номер телефона',
				email: {
					required: "Пожалуйста введите свою почту",
					email: "Неправильно введен адрес почты"
				},
				checkbox: 'Пожалуйста поставьте галочку для отправки'
			},
		});
	}
	validateForm('#contacts-form');

	// PHP MAILER

	$('form').submit(function (e) {
		let $form = $(this);
		if (!$form.valid()) return false;
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find('input').val('');
			modalThanks.classList.add('show', 'fade');
			$('form').trigger('reset');
		});
		return false
	})
})