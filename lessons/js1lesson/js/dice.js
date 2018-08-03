"use strict";

var a = Math.random().toFixed(1);
var b = Math.random().toFixed(1);

while (a > 0.5) {
	a = Math.random().toFixed(1);
}
a = a * 10 + 1; 

while (b > 0.5) {
	b = Math.random().toFixed(1);
}
b = b * 10 + 1; 

/**
var continueFlagA = true;

while (continueFlagA) {
	if (a <= 0.5) {
		a = a * 10 + 1; 
		continueFlagA = false;
	} else {
		a = Math.random().toFixed(1);
	}
}

var continueFlagB = true;

while (continueFlagB) {
	if (b <= 0.5) {
		b = b * 10 + 1; 
		continueFlagB = false;
	} else {
		b = Math.random().toFixed(1);
	}
}
**/
var h1 = document.querySelector('h1');
h1.textContent = 'Кубик 1: ' + a + '\nКубик 2: ' + b;