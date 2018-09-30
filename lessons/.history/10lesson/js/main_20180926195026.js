'use strict';

(function($) {
    $('img[data-src]').each(function() {
        var $this = $(this);
        setTimeout(function() {
            var newSrc = $this.attr('data-src');
            $this.attr('src', newSrc);
        }, 2000)


    })
})(jQuery);