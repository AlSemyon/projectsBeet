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
        var currentTop = $(window).scrollTop() + $(window).height();
        var links = [];
        var linksUpper = [];

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
                linksUpper.push(links[i]);
            }
        }

        var currentElement = linksUpper[linksUpper.length-1].element;

        var parent = currentElement.parent('.menu');
        var test = parent.find('.menu__element--active');
        test.removeClass('menu__element--active');
        // currentElement.parent('.menu').find('.menu__element--active').removeClass('menu__element--active');
        currentElement.parent().addClass('menu__element--active');

        console.log(currentElement)
        // console.log(currentTop)
        
    })
})(jQuery);