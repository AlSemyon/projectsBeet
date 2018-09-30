'use strict';

(function($) {
    $('.menu-mobile').click(function() {
        var $this = $(this);

        $this.siblings('.menu-tablet').addClass('menu-open');
    })
})(jQuery);