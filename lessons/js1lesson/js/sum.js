"use strict";

var a;
var b;

a = parseInt(prompt('Введите 1 число', ''));
while (isNaN(a)) {
	a = parseInt(prompt('Введите 1 число еще раз', ''));
}

b = parseInt(prompt('Введите 2 число', ''))
while (isNaN(b)) {
	b = parseInt(prompt('Введите 2 число еще раз', ''));
}

/**
while (isNaN(a) || isNaN(b)) {
	if (!isNaN(a)) {
		b = parseInt(prompt('Введите 2 число', ''));
		while (isNaN(b)) {
			b = parseInt(prompt('Введите 2 число еще раз', ''));
		}
	} else {
		a = parseInt(prompt('Введите 1 число еще раз', ''));
	}
}
**/
var h1 = document.querySelector('h1');
h1.textContent = a + b;