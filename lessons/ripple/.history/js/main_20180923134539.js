'use strict';

(function($) {
    $('.container').click(function(e){
        console.log(e)

        var pageX = e.pageX;
        var pageY = e.pageY;

        var ripple = $('<div></div>').addClass('ripple').css({top: pageY, left: pageX});


        $(this).append(ripple);

        setTimeout(function() {

        }, 1500);
        
    })

})(jQuery);