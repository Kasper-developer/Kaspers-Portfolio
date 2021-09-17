window.addEventListener('DOMContentLoaded', () => {
	document.body.style.overflow = 'hidden'

	// Анимация AOS

	AOS.init();

	AOS.init({

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 50, // offset (in px) from the original trigger point
		delay: 200, // values from 0 to 3000, with step 50ms
		duration: 700, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
	});
	// Hamburger
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu-list__item'),
		burgerItem = document.querySelectorAll('.hamburger span'),
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

	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= 900) {
			burgerItem.forEach(item => {
				item.style.background = '#000'
			})
		} else {
			burgerItem.forEach(item => {
				item.style.background = '#fff'
			})
		}
	})

	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= 500) {
			document.querySelector('.sidepanel__divider').style.background = '#000'
			document.querySelector('.sidepanel__text span').style.color = '#000'
			document.querySelectorAll('.sidepanel svg path')[0].style.fill = '#000'
			document.querySelectorAll('.sidepanel svg path')[1].style.fill = '#000'
			document.querySelectorAll('.sidepanel svg path')[2].style.fill = '#000'
			document.querySelectorAll('.sidepanel svg path')[3].style.fill = '#000'
			document.querySelectorAll('.sidepanel svg path')[4].style.fill = '#000'
		} else {
			document.querySelector('.sidepanel__divider').style.background = '#fff'
			document.querySelector('.sidepanel__text span').style.color = '#fff'
			document.querySelectorAll('.sidepanel svg path')[0].style.fill = '#fff'
			document.querySelectorAll('.sidepanel svg path')[1].style.fill = '#fff'
			document.querySelectorAll('.sidepanel svg path')[2].style.fill = '#fff'
			document.querySelectorAll('.sidepanel svg path')[3].style.fill = '#fff'
			document.querySelectorAll('.sidepanel svg path')[4].style.fill = '#fff'
		}
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
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
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
				checkbox: 'Пожалуйста поставьте галочку'
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

	const portfolioImage = document.querySelectorAll('.portfolio-item__img'),
		portfolioBtn = document.querySelectorAll('.portfolio-item__btn');

	portfolioImage.forEach((item, i) => {
		item.addEventListener('mouseover', () => {
			portfolioBtn[i].classList.add('portfolio-item__btn--bottom')
		})
		item.addEventListener('mouseout', () => {
			portfolioBtn[i].classList.remove('portfolio-item__btn--bottom')
		})
	})
	particlesJS("particleCanvas-Blue", {
		particles: {
			number: {
				value: 100,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: "#ffa500"
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000"
				},
				polygon: {
					nb_sides: 3
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: true,
					speed: 1,
					opacity_min: 0.1,
					sync: false
				}
			},
			size: {
				value: 10,
				random: true,
				anim: {
					enable: false,
					speed: 10,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: "#ffffff",
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 0.5,
				direction: "none",
				random: true,
				straight: false,
				out_mode: "bounce",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 394.57382081613633,
					rotateY: 157.82952832645452
				}
			}
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: true,
					mode: "grab"
				},
				onclick: {
					enable: false,
					mode: "push"
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 200,
					line_linked: {
						opacity: 0.2
					}
				},
				bubble: {
					distance: 1500,
					size: 40,
					duration: 7.272727272727273,
					opacity: 0.3676323676323676,
					speed: 3
				},
				repulse: {
					distance: 50,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	});

	particlesJS("particleCanvas-White", {
		particles: {
			number: {
				value: 250,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: "#ffa500"
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000"
				},
				polygon: {
					nb_sides: 3
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.5,
				random: true,
				anim: {
					enable: false,
					speed: 0.2,
					opacity_min: 0,
					sync: false
				}
			},
			size: {
				value: 15,
				random: true,
				anim: {
					enable: true,
					speed: 10,
					size_min: 0.1,
					sync: false
				}
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: "#ffffff",
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 0.5,
				direction: "none",
				random: true,
				straight: false,
				out_mode: "bounce",
				bounce: false,
				attract: {
					enable: true,
					rotateX: 3945.7382081613637,
					rotateY: 157.82952832645452
				}
			}
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: false,
					mode: "grab"
				},
				onclick: {
					enable: false,
					mode: "push"
				},
				resize: true
			},
			modes: {
				grab: {
					distance: 200,
					line_linked: {
						opacity: 0.2
					}
				},
				bubble: {
					distance: 1500,
					size: 40,
					duration: 7.272727272727273,
					opacity: 0.3676323676323676,
					speed: 3
				},
				repulse: {
					distance: 50,
					duration: 0.4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: true
	});
})