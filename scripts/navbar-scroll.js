$(function () {
	var topNav = $('.menu__list');
  
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
