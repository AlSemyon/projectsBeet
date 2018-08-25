
//Выберите тег заголовка с уникальным именем класса и изменить текст

var footer = document.querySelector('#footer'); 
footer.innerText = 'tewt'

// document.querySelector('#footer').innerText = 'tewt'; 

var $footer = $('#footer');
$footer.text('tewt');

// $('#footer').text('tewt')

//Выберите любой элемент на странице и удалите его

var footer = document.querySelector('#footer'); 
footer.remove();

var $footer = $('#footer');
$footer.remove();

//Выберите любой элемент и измените одно из его свойств CSS

var footer = document.querySelector('#footer'); 
footer.style.color = 'red';
footer.style.padding = '10px';

var $footer = $('#footer');
$footer.css({ color: "red", padding: '10px' }) 

//Выберите любой компонент, например панель, и измените его видимость

var footer = document.querySelector('#footer'); 
footer.hide();

var $footer = $('#footer');
$footer.hide();
