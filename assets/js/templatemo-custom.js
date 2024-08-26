(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	// $('.owl-our-team').owlCarousel({
	// 	items:3,
	// 	loop:true,
	// 	dots: true,
	// 	nav: false,
	// 	autoplay: true,
	// 	margin:0,
	// 	  responsive:{
	// 		  0:{
	// 			  items:1
	// 		  },
	// 		  600:{
	// 			  items:2
	// 		  },
	// 		  1000:{
	// 			  items:3
	// 		  },
	// 		  1600:{
	// 			  items:3
	// 		  }
	// 	  }
	// })
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }






	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);





//extra




$(document).ready(function(){
  $('#customtestimonialSlider').carousel({
    interval: 10000
  });

  $('#customtestimonialSlider').hover(function(){
    $(this).carousel('pause');
  }, function(){
    $(this).carousel('cycle');
  });
});





//megamenu js

let megamenu = false;

function megamenufun(){
if(megamenu === false){
  document.getElementById("megamenu_my").style.display="block";
  megamenu = true
}
else{
  document.getElementById("megamenu_my").style.display="none";
  megamenu = false
}
}
