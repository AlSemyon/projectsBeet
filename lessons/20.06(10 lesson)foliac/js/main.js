'use strict';

(function ($) {
    $(document).ready(function () {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 200,
            percentPosition: true,
            gutter: '.gutter-sizer'
        });
    })

})(jQuery);