'use strict';

(function($) {
    $('.open-form').click(function() {
        var $this = $(this);   
        var classModal = '.' + $this.data('modal');
        $(classModal).toggleClass('open');
    })

    $('.overlay').click(function() {
        var $this = $(this);   
        var openModal = $this.siblings('.open');
        openModal.toggleClass('opens');
    })
})(jQuery);