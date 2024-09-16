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
                <li><a href="./drag_conveyors.html">Drag Conveyors</a></li>
                <li><a href="./excavators.html">Escaveyors/Vertical Conveyors</a></li>
                <li><a href="./multiple_discharge_conveyors.html">Multiple Discharge Conveyors</a></li>
                <li><a href="./bucket_conveyors.html">Bucket Conveyors</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Products</h3>
            <ul>
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










//inecting header

const header_code = `<div class="container">
  <div class="row">
    <div class="col-12">
      <nav class="main-nav">
        <!-- ***** Logo Start ***** -->
        <a href="index.html" class="logo" style="display: grid; grid-template-columns: 100%; align-items: center; justify-content: center;">
          <img src="./assets/images/Mit-Mol-Logo-12-new.png" alt="website logo" style="height: 60px; width: auto; margin: auto;">
          <marquee behavior="" direction="left" style="position: absolute; color: red; font-size: 0.6rem; margin-bottom: -65px;">Conveying excellence since 1990</marquee>
        </a>
        <!-- ***** Logo End ***** -->
        <!-- ***** Menu Start ***** -->
        <ul class="nav">
          <li class="scroll-to-section"><a href="./index.html" class="active">Home</a></li>
          <li class="scroll-to-section"><a href="./about.html">About us</a></li>
          <li class="scroll-to-section"><a href="#" onclick="megamenufun()">Our products</a></li>
          <li class="scroll-to-section"><a href="./service.html">Our services</a></li>
          <li class="scroll-to-section"><a href="./career.html">Career</a></li>
          <li class="scroll-to-section">
            <div class="main-red-button"><a href="./contact.html">Contact now</a></div>
          </li>
        </ul>
        <a class='menu-trigger'>
          <span>Menu</span>
        </a>
        <!-- ***** Menu End ***** -->
      </nav>
    </div>
  </div>
</div>
<div class="custom-megamenu-dropdown-content" id="megamenu_my">
  <div class="custom-megamenu-dropdown-row">
    <div class="custom-megamenu-dropdown-column">
      <a href="belt_conveyors.html">
        <i class="fas fa-cogs"></i> Belt conveyors
        <p>Efficient bulk and unit material handling system</p>
      </a>
      <a href="chain_conveyors.html">
        <i class="fas fa-link"></i> Chain conveyors
        <p>Durable solution for light and heavy duty tasks</p>
      </a>
      <a href="screw_conveyors.html">
        <i class="fas fa-arrow-right"></i> Screw conveyors
        <p>For bulk solid handling application in manufacturing and processing units</p>
      </a>
    </div>
   
    <div class="custom-megamenu-dropdown-column">
      <a href="drag_conveyors.html">
        <i class="fas fa-dolly"></i> Drag conveyors
        <p>Durable and long life system for movement of bulk materials</p>
      </a>
      <a href="excavators.html">
        <i class="fas fa-truck-loading"></i> Escaveyors/Vertical conveyor
        <p>For vertically handling unit loads between 2 or more levels</p>
      </a>
      <a href="multiple_discharge_conveyors.html">
        <i class="fas fa-external-link-alt"></i> Multiple discharge conveyors
        <p>A single system to convey and elevate products to multiple locations</p>
      </a>
    </div>
    <div class="custom-megamenu-dropdown-column">
      <a href="modular_flex_conveyors.html">
        <i class="fas fa-random"></i> Modular flex conveyors
        <p>Adaptive unit handling systems for versatile and dynamic layouts.</p>
      </a>
      <a href="telescopic_conveyors.html">
        <i class="fas fa-expand-arrows-alt"></i> Telescopic conveyors
        <p>Extendable conveyors designed for efficient loading and unloading operations</p>
      </a>
      <a href="special_accessories_products.html">
        <i class="fas fa-tools"></i> Special accessories/products
        <p>Customized solutions for unique needs.</p>
      </a>
    </div>
    <div class="custom-megamenu-dropdown-column">
      <a href="roller_conveyors.html">
        <i class="fas fa-recycle"></i> Roller conveyors
        <p>Reliable system for light and heavy units<br><br></p>
      </a>
      <!--<a href="./wire_mesh_belt_conveyors.html">
        <i class="fas fa-angle-double-up"></i> Wire mesh belt conveyors
        <p>Vertical material handling.<br><br></p>
      </a>--->
      <a href="bucket_elevators.html">
        <i class="fas fa-box"></i> Bucket elevators
        <p>For vertical bulk material transport.<br><br></p>
      </a>
      <a href="spiral_conveyors.html">
        <i class="fas fa-rotate"></i> Spiral conveyors
        <p>Vertical material transport with
continuous flow, optimizing
space and movement.</p>
      </a>
    </div>
  </div>
</div>
`



// Select the header element and replace its inner HTML
document.querySelector('#let_change_header_height').innerHTML = null;
document.querySelector('#let_change_header_height').innerHTML = header_code;












// counting


      document.addEventListener('DOMContentLoaded', () => {
        const yearsCountElement = document.getElementById('years-count');
        let years = 0;
        const targetYears = 34;
        
        const updateCount = () => {
          if (years < targetYears) {
            years++;
            yearsCountElement.textContent = years;
            setTimeout(updateCount, 50); // Adjust the speed of counting here
          }
        };
      
        updateCount();
      });
      