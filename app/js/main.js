$(function () {
  $(".products__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
  });

  $('.blog').on('click', function (){
    $('.submenu').slideToggle('')
    });

});
