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














//footerr

const footerHTML = `
    <div class="footer-content">
        <div class="footer-section">
            <h3>Products</h3>
            <ul>
                <li><a href="./belt_conveyors.html">Belt Conveyors</a></li>
                <li><a href="./chain_conveyors.html">Chain Conveyors</a></li>
                <li><a href="./screw_conveyors.html">Screw Conveyors</a></li>
                <li><a href="./roller_conveyors.html">Roller Conveyors</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Products</h3>
            <ul>
                <li><a href="./wire_mesh_belt_conveyors.html">Wire Mesh Belt Elevators</a></li>
                <li><a href="./bucket_conveyors.html">Bucket Conveyors</a></li>
                <li><a href="./drag_conveyors.html">Drag Conveyors</a></li>
                <li><a href="./excavators.html">Excavators</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Products</h3>
            <ul>
                <li><a href="./multiple_discharge_conveyors.html">Multiple Discharge Conveyors</a></li>
                <li><a href="./modular_flex_conveyors.html">Modular Flex Conveyors</a></li>
                <li><a href="./telescopic_conveyors.html">Telescopic Conveyors</a></li>
                <li><a href="./special_accessories_products.html">Special Accessories/Products</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Services</h3>
            <ul>
                <li><a href="./service.html#design">Design</a></li>
                <li><a href="./service.html#manufacturing">Manufacturing</a></li>
                <li><a href="./service.html#installation">Installation & Commissioning</a></li>
                <li><a href="./service.html#service-maintenance">Service & Maintenance</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2002 MIT - MOL CONVEYORS PVT. LTD. All Rights Reserved</p>
    </div>
`;

// Select the footer element and replace its inner HTML
document.querySelector('footer').innerHTML = null;
document.querySelector('footer').innerHTML = footerHTML;










//logo injecting
// JavaScript to clear the logo class div and inject new content
document.addEventListener('DOMContentLoaded', function() {
  // Select the first logo class div
  const logoDiv = document.querySelector('.logo');
  
  // Clear the content of the div
  if (logoDiv) {
      logoDiv.innerHTML = '';
      
      // Create new content
      const newContent = `
          <img src="./assets/images/Mit-Mol-Logo-12-new.png" alt="website logo" style="height: 60px; width: auto; margin: auto;">
          <marquee behavior="" direction="left" style="position: absolute; color: red; font-size: 0.6rem; margin-bottom: -65px;">
              Conveying Excellence since 1990
          </marquee>
      `;
      
      // Inject the new content into the div
      logoDiv.innerHTML = newContent;
  }
});
