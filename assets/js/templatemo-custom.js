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
            <li><a href="./bucket_elevators.html">Bucket Elevators</a></li>
        </ul>
    </div>
    <div class="footer-section">
        <h3>Products</h3>
        <ul>
            <li><a href="./modular_flex_conveyors.html">Modular Flex Conveyors</a></li>
            <li><a href="./telescopic_conveyors.html">Telescopic Conveyors</a></li>
            <li><a href="./spiral_conveyors.html">Spiral Conveyors</a></li>
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
        <svg style="transform: scale(2);" version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 210.000000 187.000000" preserveAspectRatio="xMidYMid meet">
            <metadata fill="#03a4ed">
            </metadata>
            <g transform="translate(0.000000,187.000000) scale(0.100000,-0.100000)" fill="#03a4ed" stroke="none">
            <path d="M801 1715 c-60 -69 -62 -146 -5 -214 l23 -28 -24 -23 c-52 -49 -53 -147 -2 -201 l22 -24 -30 -43 c-42 -61 -41 -126 3 -181 28 -35 30 -40 15 -53 -9 -7 -25 -33 -36 -57 -23 -53 -17 -94 23 -149 l29 -40 -25 -23 c-52 -49 -52 -138 0 -199 l25 -30 -25 -27 c-29 -32 -47 -92 -38 -130 16 -62 85 -136 107 -114 8 8 3 20 -20 43 -17 18 -36 43 -43 56 -15 31 -5 91 23 126 l23 28 34 -21 c125 -73 432 -81 493 -13 47 52 14 120 -67 141 -107 27 -304 6 -411 -43 -60 -27 -64 -26 -90 38 -18 42 -13 86 14 123 19 26 34 28 64 8 79 -52 359 -79 439 -42 78 36 96 98 41 144 -73 60 -335 52 -466 -14 -47 -23 -50 -23 -68 -7 -46 41 -46 137 0 178 17 15 22 15 72 -8 61 -28 204 -56 288 -56 66 0 150 22 180 48 11 9 23 29 27 44 5 23 0 34 -28 62 -46 46 -142 63 -269 47 -93 -12 -214 -45 -224 -61 -15 -24 -44 -8 -65 36 -25 51 -22 89 10 134 l20 29 56 -26 c119 -54 354 -69 439 -28 52 26 74 68 54 104 -27 47 -74 65 -185 69 -117 5 -233 -15 -309 -53 l-50 -25 -22 27 c-34 41 -38 87 -13 139 12 24 27 44 34 44 7 0 32 -9 55 -21 73 -35 175 -51 303 -47 100 3 121 6 145 24 154 115 -66 218 -332 155 -49 -12 -107 -31 -129 -42 -36 -19 -40 -19 -57 -3 -26 23 -42 78 -34 115 4 17 22 48 41 69 18 20 31 40 27 44 -14 13 -32 5 -62 -29z m526 -201 c39 -30 36 -55 -10 -77 -51 -26 -141 -32 -234 -18 -121 19 -219 51 -197 63 14 8 136 46 164 51 14 3 75 4 137 4 96 -2 115 -5 140 -23z m-13 -248 c40 -17 49 -29 41 -56 -18 -57 -198 -72 -362 -31 -124 31 -130 42 -44 69 132 43 288 50 365 18z m6 -262 c43 -25 45 -50 7 -78 -26 -19 -42 -21 -155 -21 -106 0 -140 4 -204 24 -47 14 -78 29 -78 37 0 8 3 14 8 14 4 0 48 12 97 25 117 32 269 32 325 -1z m-11 -250 c75 -30 60 -80 -32 -105 -65 -18 -218 -5 -316 26 -100 32 -97 40 27 71 109 28 262 32 321 8z m-7 -254 c71 -21 72 -77 2 -100 -61 -21 -275 -7 -358 22 -74 26 -75 35 -3 58 115 37 274 46 359 20z" fill="#03a4ed"/>
            </g>
            </svg> Spiral conveyors
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
      











      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
      
      // Insert the link as the first child of the <head>
      document.head.insertBefore(link, document.head.firstChild);