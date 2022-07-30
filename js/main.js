$(window).load(function() {				
			$('.preloader').fadeOut(); // will first fade out the loading animation
			$('.preloader_spiner').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').removeClass('preloader_active')	
			
			
			
})
$(window).load(function() {
				$('#slider').nivoSlider();
			});	

$(document).ready(function() {
	$('#Container a').nivoLightbox({
    effect: 'fall',  // The effect(fade,fadeScale,slideLeft,slideRight,slideUp,slideDown,fall,)
});
$(".header_area").sticky({topSpacing:0});

     /* jQuery Smooth Scroll */
	
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				var headerH = 20;
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
		$('html,body').animate({
				scrollTop: target.offset().top - headerH + "px"
				}, 1000, 'easeOutBack');
			return false;
			}
			  }
		});
		/* End Smooth Scroll */
		
		/* jQuery spy Scroll */
		
		$('body').scrollspy({ 
			target: '.navbar-collapse',
			offset: 95
		}); 
		/* End spy Scroll */	   
    

$(document).ready(function() {
  $('#Container').mixItUp(); 
     $('.promo_area').parallax("50%", 0.2)
  });
    $("#clients").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 9,
	itemsDesktop : [1199,7],
	itemsDesktopSmall : [979,3]
    
  });
    });