'use strict';

(function ($) {
    $(window).scroll(function () {
        var currentTop = $(window).scrollTop() + $(window).height();

        var st3 = document.querySelectorAll('.st3');
        var st4 = document.querySelectorAll('.st4');
        var st5 = document.querySelectorAll('.st5');

        function draw(pathArr) {
            pathArr.forEach(function(path) {
                var length = path.getTotalLength();
                // Clear any previous transition
                path.style.transition = path.style.WebkitTransition =
                    'none';
                // Set up the starting positions
                path.style.strokeDasharray = length + ' ' + length;
                path.style.strokeDashoffset = length;
                // Trigger a layout so styles are calculated & the browser
                // picks up the starting position before animating
                path.getBoundingClientRect();
                // Define our transition
                path.style.transition = path.style.WebkitTransition =
                    'stroke-dashoffset 2s ease-in-out';
                // Go!
                path.style.strokeDashoffset = '0';
            })
        }


        draw(st3);
        draw(st4);
        draw(st5);

        console.log(st3, st4, st5)
    })
})(jQuery);