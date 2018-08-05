"use strict";

var limit;

var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

limit = parseInt(prompt('Введите число до которого рандомить', ''));
while (isNaN(limit)) {
	limit = parseInt(prompt('Введите число до которого рандомить еще раз', ''));
}

// var randomNumber = Math.floor(Math.random() * limit) + 1;

var randomNumber = getRandom(1, limit);

var h1 = document.querySelector('h1');
h1.textContent = randomNumber;