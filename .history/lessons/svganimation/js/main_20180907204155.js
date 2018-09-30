'use strict';

(function($) {
    $(window).scroll(function(){
        var st3 = $('.st3');
        var st4 = $('.st4');
        var st5 = $('.st5');

        st3.animate({'stroke-dashoffset': 1000});
        st4.animate({'stroke-dashoffset': 1500});
        st3.animate({'stroke-dashoffset': 1000});
        console.log(st3, st4, st5)
    })
})(jQuery);