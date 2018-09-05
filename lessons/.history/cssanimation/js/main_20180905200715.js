'use strict';

(function($) {
    $('.open-form').click(function() {
        var $this = $(this);   
        var classModal = '.' + $this.data('modal');
        $(classModal).trigger('open');
    })
})(jQuery);