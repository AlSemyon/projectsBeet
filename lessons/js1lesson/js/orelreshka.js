"use strict";

var a = Math.random();
var h1 = document.querySelector('h1');

if (a > 0.5) {
	h1.textContent = 'орел';
} else { 
	h1.textContent = 'решка';
}


