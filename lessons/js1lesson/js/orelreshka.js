"use strict";

var a = Math.random();
var h1 = document.querySelector('h1');

var count = 0;
// while (a !== 0.5) {
// 	count++;
// 	a = Math.random();
// }

if (a > 0.5) {
	h1.textContent = 'орел';
} else if (a < 0.5) { 
	h1.textContent = 'решка';
} else {
	h1.textContent = 'ребро' + count;
}


