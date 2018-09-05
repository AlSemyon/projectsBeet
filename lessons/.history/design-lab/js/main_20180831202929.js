'use strict';

(function($) {
    $('.menu__link').click(function(e){
        e.preventDefault();
                
        var target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top
        },500)
    })

    var scrollWindow = function() {
        var currentTop = $(window).scrollTop() + $('.menu').offset().top;
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
        var currentElement;
        if (linksUpper.length > 0) {
            currentElement = linksUpper[linksUpper.length-1].element;
        } else {
            currentElement = links[0].element;
        }

        currentElement.parents('.menu')
                      .find('.menu__element--active')
                      .removeClass('menu__element--active');
        currentElement.parent()
                      .addClass('menu__element--active'); 
    }

    $(window).scroll(function(){
        scrollWindow();
    })
})(jQuery);