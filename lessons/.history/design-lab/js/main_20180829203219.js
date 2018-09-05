'use strict';

(function($) {
    $('.menu__link').click(function(e){
        e.preventDefault();
        var target = $(this.hash);
    })
})(jQuery);