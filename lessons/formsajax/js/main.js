'use strict';

(function () {
	var button = document.querySelector('.phones');
	var getLists = function() {
		var xhr = new XMLHttpRequest;

		xhr.open('GET', '../data/phones.json', true);

		xhr.send();

		xhr.onreadystatechange = function() {
			if (this.readyState === 4) {
				var response = JSON.parse(this.responseText);

				button.style.display = 'none';
				var ul = document.createElement('ul');

				for(var i = 0; i < response.length; i++) {
					var li = document.createElement('li');
					li.innerText = response[i].name;
					ul.appendChild(li);
				}


				document.body.appendChild(ul);
			}
		}
	}

	button.addEventListener('click', getLists);


})();

(function ($) {
	$('.phonesjq').on('click', function() {
		var $this = $(this);

		$.ajax({
			url: '../data/phones.json'
		}).done(function (response){
			$this.hide();
			var ul = $('<ul></ul>');

			for(var i = 0; i < response.length; i++) {
				var li = $('<li></li>').text(response[i].name);
				ul.append(li);
			}

			$('body').append(ul);
		})
	})
})(jQuery);

(function($) {
	var obj = {
		num1: 2,
		num2: 3
	};

	$.post({
		url: '../php/a1.php',
		data: obj
	}).done(function() {
		console.log(1)
	})
})(jQuery)