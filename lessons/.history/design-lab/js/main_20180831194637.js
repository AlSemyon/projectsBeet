'use strict';

(function($) {
    $('.menu__link').click(function(e){
        e.preventDefault();
                
        var target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top
        },500)
    })

    $(window).scroll(function(){
        var currentTop = $(this).scrollTop();
        var links = [];

        $('.menu__link').each(function(){
            // element - our jquery link
            // target - element where we need to scroll
            links.push({
                element: $(this),
                target: $(this.hash)
            })
        })

        for (var i = 0; i < links.length; i++) {
            if (links[i].target.offset().top < currentTop) {

            }
        }

        console.log(links)
        // console.log(currentTop)
        
    })
})(jQuery);