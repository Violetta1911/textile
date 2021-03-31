$(function(){

    $('.product-slider__inner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
          });

    $(".js-range-slider").ionRangeSlider({
        skin: "big",
        type: "double",
        min: 0,
        max: 0,
        from: 0,
        to: 0,
       
        grid: false,             // show/hide grid
        force_edges: false,     // force UI in the box
        hide_min_max: false,    // show/hide MIN and MAX labels
        hide_from_to: false,    // show/hide FROM and TO labels
        block: false   
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