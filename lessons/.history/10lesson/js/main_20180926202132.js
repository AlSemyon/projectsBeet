'use strict';

(function($) {
    $('img[data-src]').each(function() {
        var $this = $(this);
        var newSrc = $this.attr('data-src');
        $this.attr('src', newSrc).addClass('fade-up');
    });

    $('.timer-up').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-count-to');
        var
        $this.prop('Counter', 0).animate({
            $this.text() = countTo,

        })

    });

})(jQuery);