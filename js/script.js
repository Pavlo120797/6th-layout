$(document).ready(function () {
  $('.slider-capture').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    draggable: true,
    slidesToScroll: 1,

  });
  $('.slider-play').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    draggable: true,
    slidesToScroll: 1,

  });
  $('.color-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 6000,
    draggable: true,
    slidesToScroll: 1,

  });


});

$(function () {
  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse('hide');
  });
});