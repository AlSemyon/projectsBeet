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
            links.push({
                element: $(this),
                target: $(this.hash)
            })
        })

        console.log(links)
        // console.log(currentTop)
        
    })
})(jQuery);