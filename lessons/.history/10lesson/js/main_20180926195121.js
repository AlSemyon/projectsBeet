'use strict';

(function($) {
    $('img[data-src]').each(function() {
        var $this = $(this);
        var newSrc = $this.attr('data-src');
        $this.attr('src', newSrc);
        $this.fadeIn(1000);
    })
})(jQuery);