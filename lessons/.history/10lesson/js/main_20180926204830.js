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
        
        $this.prop('CountTo', $this.text()).animate({
            CountTo: countTo
        },
        {
            duration: 3000,
            easing: 'linear',
            step: function(now) {
                $this.text(Math.ceil(now));
            }
        });

    });

    $('.submit-button').click(function(e){
        e.preventDefault();

        var form = $(this).closest('form');

        if ($(form).valid()) {
            alert('1');
        } else {
            $(form).validation();
            alert('2');
        }
        
    })

})(jQuery);