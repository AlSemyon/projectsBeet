'use strict';

(function($) {
    $('.menu__link').click(function(e){
        e.preventDefault();
        var target = $(this.hash);

        $('body').animate({
            scrollTop: target.offset().top
        }, 1000)
    })
})(jQuery);