'use strict';

(function($) {
    $('.open-form').click(function() {
        var $this = $(this);   
        var classModal = '.' + $this.data('modal');
        $(classModal).toggleClass('open');
    })

    $('.overlay').click(function() {
        var $this = $(this);   
        var closestOpenModal = $this.siblings('.open');
        closestOpenModal.toggleClass('open');
    })
})(jQuery);