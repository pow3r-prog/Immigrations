$(function () {
	let topNav = $('.header__menu');
  
	if (topNav.length) {
	  $(window).on('scroll', function () {
		if ($(this).scrollTop()) {			
			topNav.addClass('_scroll');			
		} else {
		  	topNav.removeClass('_scroll');
		}
	  });
	}
  });
