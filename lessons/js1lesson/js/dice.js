"use strict";

var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a = getRandom(0, 1);
var b = getRandom(1, 6);

/**
var a = Math.floor(Math.random() * 6) + 1;
var b = Math.floor(Math.random() * 6) + 1;
**/

var h1 = document.querySelector('h1');
h1.textContent = 'Кубик 1: ' + a + '\nКубик 2: ' + b;