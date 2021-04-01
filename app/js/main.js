$(function(){

    $('.products__slider').slick({
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
            from: 0
            
        });
  
  $('.gtbuilder__tab  .tab, .personal-info__tab .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.gtbuilder__tab, .personal-info__tab').find('.tab-item').removeClass('active-tab').hide();
      $('.gtbuilder__tab .tabs, .personal-info__tab .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });
     

  var mixer = mixitup ('.products__inner-box');  
  
});