"use strict";

var limit;

limit = parseInt(prompt('Введите число до которого рандомить', ''));
while (isNaN(limit)) {
	limit = parseInt(prompt('Введите число до которого рандомить еще раз', ''));
}

var capacity = limit.toString().length;

while (randomNumber || randomNumber > limit) {
	randomNumber = Math.random().toFixed(capacity) * Math.pow(10, capacity) + 1;
}

var h1 = document.querySelector('h1');
h1.textContent = randomNumber;