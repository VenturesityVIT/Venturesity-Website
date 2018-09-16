/* JS for Photostack */

document.documentElement.style.overflowX = 'hidden';

$(function () {
	$(".photostack").Photostack();
});

const calcEventHeight = $ => {
	'use strict';
	const navHeight = $("#nvbar").outerHeight();
	const viewportHeight = window.innerHeight;
	const newEventHeight = viewportHeight - navHeight;
	$(".event-section").height(newEventHeight);
}

// function to handle our team animations
($ => {
	if(!window.matchMedia('(orientation: portrait)').matches) {
		$('.member').hover(function() {
			console.log(this.id);
			$(this).find('.desc').css({
				'display': 'initial'
			});
			$(this).css ({
				'background-color': 'rgba(255, 255, 255, 0.7)'
			});
		}, function() {
			$(this).find('.desc').css({
				'display': 'none'
			});
			$(this).css ({
				'background-color': 'transparent'
			});
		});
	}
})(jQuery);

(function ($) {
	"use strict";
	const navHeight = $("#nvbar").outerHeight();
	const viewportHeight = window.innerHeight;
	$("#carouselExampleIndicators")[0].css({
		'position': 'relative',
		'top': navHeight 
	});
})(jQuery);

(calcEventHeight)(jQuery);


(function ($) {
	"use strict";

	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 60
	});

	$('#topNav').affix({
		offset: {
			top: 200
		}
	});

	new WOW().init();

	$('a.page-scroll').bind('click', function (event) {
		var $ele = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($ele.attr('href')).offset().top - 60)
		}, 1450, 'easeInOutExpo');
		event.preventDefault();
	});

	$('.navbar-collapse ul li a').click(function () {

		$('.navbar-toggle:visible').click();
	});

	$('#galleryModal').on('show.bs.modal', function (e) {
		$('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
	});

})(jQuery);