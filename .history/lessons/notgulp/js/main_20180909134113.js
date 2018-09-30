'use strict';

(function($) {
    $('.open-form').click(function() {
        var $this = $(thi1s);   
        var classModal = '.' + $this.data('modal');
        $(classModal).toggleClass('open');
    })

    $('.overlay').click(function() {
        var $this = $(this);   
        var openModal = $this.siblings('.open');
        openModal.toggleClass('open');
    })
})(jQuery);