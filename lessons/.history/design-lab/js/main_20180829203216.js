'use strict';

(function($) {
    $('.menu__link').click(function(e){
        e.preventDefault();
        console.log(this.hash);
        var target = $(this.hash);
    })
})(jQuery);