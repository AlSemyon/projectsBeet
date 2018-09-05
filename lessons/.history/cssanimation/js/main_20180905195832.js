'use strict';

(function($) {
    $('.open-form').click(function() {
        var $this = $(this);   
        alert($this.data('modal-open'))
    })
})(jQuery);