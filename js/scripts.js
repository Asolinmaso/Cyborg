$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    autoplay:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
      1280: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });

