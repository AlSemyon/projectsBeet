'use strict';

(function($) {
    $('.container').click(function(e){
        console.log(e)

        var pageX = e.pageX;
        var pageY = e.pageY;

        var ripple = $('<div>s</div>');

        $(this).append(ripple)
    })

})(jQuery);