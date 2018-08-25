'use strict';

// Исходные данные самого теста
var test = [
	['Ask 1', 'Answer 1'],
	['Ask 2', 'Answer 2'],
	['Ask 3', 'Answer 3'],
	['Ask 4', 'Answer 4']
];

// Данные для тестирование( данные которые ввел пользователь)
var test1 = [
	['Ask 1', 'Answer 1'],
	['Ask 2', 'Answer 21'],
	['Ask 32', 'Answer 31'],
	['Ask 43', 'Answer 4']
];

// Функция которая принимает массив от пользователя и сравнивает с исходными данными теста
var makeTest = function(userTest) {
	// Счетчик правильных ответов
	var counter = 0;

	// Массив для хранения вопросов с неправильными ответами
	var wrongAnswers = [];
	//Цикл перебора массива пользователя
	for (var i=0; i<userTest.length; i++) {
		// Получаем вопрос
		var question = userTest[i][0];
		// Получаем ответ
		var answer = userTest[i][1];
		
		// мы заведомо считаем все ответы неправильными и добавляем их в массив
		wrongAnswers.push(question);
		//Цикл перебора массива самого теста
		for (var t = 0; t < test.length; t++) {
			// Сравниваем сходства вопроса и ответа двух массивов
			// и выход в перебор цикла массива пользователя если сошлось
			if (test[t][0] === question && test[t][1] === answer) {
				// увелечение счетчика сходств
				counter++;
				// если ответ успешный тогда мы убираем его из массива
				wrongAnswers.pop();
				break;
			}
		}
	}
	

	// вывод строки на найденные елементы 
	return 'You got ' + counter + ' question(s) right.' +
	+ '' + wrongAnswers.join(',');
}


//вызов функции с массивом пользователя и вывод в консоль
console.log(makeTest(test1))