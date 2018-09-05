'use strict';

(function($) {
    $('.menu__link').click(function(e){
        e.preventDefault();
                
        var target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top
        },500)
    })

    //вынес функцию что бы ее еще раз вызвать перед загрузкой сайта
    var scrollWindow = function() {
        // ищу текущее положение екрана и добавляю высоту моего меню
        var currentTop = $(window).scrollTop() + $('.menu').height();
        // массив для всех ссылок
        var links = [];
        //массив для всех ссылок что выше текущего положения окна
        var linksUpper = [];

        //перебираю все ссылки
        $('.menu__link').each(function(){
            // заполняю пустой массив ссылок где
            // element - текущая ссылка э
            // target - секция на котору ссылается ссылка
            links.push({
                element: $(this),
                target: $(this.hash)
            })
        })

        //перебор всех ссылок и нахождение всех что выше окна
        for (var i = 0; i < links.length; i++) {
            if (links[i].target.offset().top < currentTop) {
                linksUpper.push(links[i]);
            }
        }
        var currentElement;
        if (linksUpper.length > 0) {
            //если ссылки есть (те что выше) выделяем этот елемент
            currentElement = linksUpper[linksUpper.length-1].element;
        } else {
            //если ссылок нет то самый первый
            currentElement = links[0].element;
        }

        //ищем родителя меню и ищем в нем активные ссылки и удаляем активный класс
        currentElement.parents('.menu')
                      .find('.menu__element--active')
                      .removeClass('menu__element--active');
        //в текущем елементе добавляем активный класс
        currentElement.parent()
                      .addClass('menu__element--active'); 
    }

    $(window).scroll(function(){
        scrollWindow();
    })
})(jQuery);