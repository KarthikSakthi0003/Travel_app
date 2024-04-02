$(".specialOffers").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 3000,
  autoplay: true,
  // autoplaySpeed: 20,
  prevArrow: ".arrowPrevtesti",
  nextArrow: ".arrowNexttesti",
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 556,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".WondersSlider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: false,
  // autoplaySpeed: 20,
  prevArrow: ".arrowPrevtesti2",
  nextArrow: ".arrowNexttesti2",
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 756,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".HandpickSlider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: false,
  // autoplaySpeed: 20,
  prevArrow: ".arrowPrevtesti",
  nextArrow: ".arrowNexttesti ",
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 756,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".slider").slick({
  slidesToShow: 3,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 20,
  prevArrow: ".arrowPrevtesti_t",
  nextArrow: ".arrowNexttesti_t",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".datematrix").slick({
  slidesToShow: 7,
  // speed: 3000,
  autoplay: false,
  autoplaySpeed: 20,
  prevArrow: ".arrowPrevdate",
  nextArrow: ".arrowNextdate",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});