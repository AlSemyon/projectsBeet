'use strict'
var a;
var b;

var getNumber = function (name) {
	var number = parseInt(prompt('введите ' + name + ' число'));

	while(!number && number !== 0) {
		number = parseInt(prompt('введите ' + name + ' число еще раз'));
	}

	return number;
}

var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

a = getNumber('1');
b = getNumber('2');

var c = (b > a)
	? getRandom(a, b)
	: getRandom(b, a);

/*
a = parseInt(prompt('введите 1 число'));

while (!a && a !== 0) {
	a = parseInt(prompt('введите 1 число еще раз'));
}

b = parseInt(prompt('введите 2 число'));

while (!b && b !== 0) {
	b = parseInt(prompt('введите 2 число еще раз'));
}

var c = (b > a)
	? Math.floor(Math.random() * (b - a + 1)) + a
	: Math.floor(Math.random() * (a - b + 1)) + b;
*/
var h1 = document.querySelector('h1');
h1.textContent = 'Рандомное число: ' + c;