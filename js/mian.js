$(document).ready(function () {
  $('a').click(function (event) {
    event.preventDefault();
  })
  $('.navbar .navbar-nav .nav-link').click(function () {
    $('html').animate({
      scrollTop: $(`#${$(this).data('scroll')}`).offset().top,
    }, {
      duration: 500,
      easing: 'swing'
    })
  })
  $(".main-slider").owlCarousel({
    items: 1,
    nav: false,
    margin: 0,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      }
    }
  });
  $(".work-slider").owlCarousel({
    loop: true,
    // nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 8,
      }
    }
  });
});

$(".reviews-slider").owlCarousel({
  dots: true,
  margin: 24,
  loop: true,
  items: 1,
  smartSpeed: 900,
  autoplay: true,
  autoplayTimeout: 4000,
});

