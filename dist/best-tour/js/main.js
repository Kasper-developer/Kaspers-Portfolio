$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      prevEl: '.hotel-slider__button-prev',
      nextEl: '.hotel-slider__button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    effect: 'coverflow',
    speed: 550,
  })

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      prevEl: '.reviews-slider__button-prev',
      nextEl: '.reviews-slider__button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    speed: 550,
  })

  var menuButton = $('.menu-button')
  menuButton.on('click', function () {
    console.log('Клик по кнопке')
    $('.navbar-bottom').toggleClass('navbar-bottom--visible')
    $('body').toggleClass('lock')
    $('.menu-button--top--line').toggleClass('menu-button--top')
    $('.menu-button--bottom--line').toggleClass('menu-button--bottom')
    $('.menu-button--middle--line').toggleClass('menu-button--middle')
  })

  var modalButton = $('[data-toggle=modal]')
  var modalClose = $('.modal__close')
  modalButton.on('click', openModal)
  modalClose.on('click', closeModal)

  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.addClass('modal__overlay--visible')
    modalDialog.addClass('modal__dialog--visible')
    $('body').addClass('lock')
  }

  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
    $('body').removeClass('lock')
  }

  $('.modal__form').validate({
    errorClass: 'invalid',
    rules: {
      name: 'required',
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: 'Please specify your name',
        minlenght: 'The name must be more then 2 letter ',
      },
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
      phone: {
        required: 'We need your phone number to contact you',
        phone: 'Your email address must be in the format of +998901001010',
      },
    },
  })
  AOS.init()
})
