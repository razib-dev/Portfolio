$ (function(){

   //  Stykey Header Start
   $(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else {
         $('.navbar').removeClass('bg');
    }
    });
    //  Stykey Header End

     // Banner_part Slider Start
     $('.banner_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows:false,
      dots:true,
      Infinite:true,
    });
    // Banner_part Slider End

    //  Service_part Slider Start
    $('.service_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows:false,
    });
    // Service_part Slider End

    // Project_part Mixitup Start
    var containerEl = document.querySelector('.project_main');
    var mixer = mixitup(containerEl);
    // Project_part Mixitup End

    // Client Part Start

    $('.client-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      centerMode:true,
      centerPadding:false,
      autoplaySpeed: 1000,
      arrows:false,
      dots:true,
      Infinite:true,
    });
    // Client Part End

    $('.test-popup-link').magnificPopup({
      type: 'image'
      // gallery:{enabled:true}
    });

});