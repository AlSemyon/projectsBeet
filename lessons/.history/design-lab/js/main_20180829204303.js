'use strict';

(function($) {
    $('.menu__link').click(function(e){
        e.preventDefault();

        location.hash = '';
        
        var target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top
        },500)
    })
})(jQuery);