

$(document).ready(function($) {
	"use strict";
    
    // PORTFOLIO GALLERY 
    // $('.portfolio a').featherlightGallery({
	// 	previousIcon: '&#9664;',   
	// 	nextIcon: '&#9654;',         
	// 	galleryFadeIn: 100,
	// 	galleryFadeOut: 300    
	// });


	// var $slider = document.getElementById('sidebar');
	// var $toggle = document.getElementById('pullboxdown');
	
	// $toggle.addEventListener('click', function() {
	// 	var isOpen = $slider.classList.contains('slide-in');
	
	// 	$slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
	// });
     $('.pullboxdown').click( function(){

		// var isOpen = $('.sidebar').hasClass('slide-in');
		// //$('.sidebar').removeClass(isOpen ? 'slide-in' : 'slide-out');
		// $('.sidebar').addClass(isOpen ? 'slide-out' : 'slide-in');
		// $('.sidebar')
		 //if()
		// animateCSS('.sidebar', 'slideOutLeft', function() {
		// 	// Do something after animation
		// 	$('.sidebar').css('margin-left','-280px');
		//   })
		// const element =  document.querySelector('.sidebar')
		//element.classList.add('animated', 'slideOutLeft')

		//element.addEventListener('animationend', function() { 	$('.sidebar').css('margin-left','-280px'); })
	 
	});

	 function animateCSS(element, animationName, callback) {
		const node = document.querySelector(element)
		node.classList.add('animated', animationName)
	
		function handleAnimationEnd() {
			node.classList.remove('animated', animationName)
			node.removeEventListener('animationend', handleAnimationEnd)
	
			if (typeof callback === 'function') callback()
		}
	
		node.addEventListener('animationend', handleAnimationEnd)
	}


});


