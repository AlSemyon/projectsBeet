'use strict';

(function($) {
	$('.carousel').slick({
		dots: true,
		dotsClass: 'slick-dots carousel__dots'
	});

	$(document).ready(function() {
		$('.home').on('click', function(e) {
			e.preventDefault();

			$('.carousel').slick('slickGoTo', 0);
		})
	});


})(jQuery);