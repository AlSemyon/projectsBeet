	'use strict';

	(function main(){
		//обьявляем часто используемые компоненты
		var listTodo = document.querySelector('#todo');
		var listCompleted = document.querySelector('#completed');
		var addButton = document.querySelector('.add');

		// добавляем новые события для новых компонентов
		function bindEventsLi (element) {
			element.querySelector('.edit').addEventListener('click', edit);
			element.querySelector('.delete').addEventListener('click', deleteItem);
			element.querySelector('input[type="checkbox"]').addEventListener('change', changeCheckbox);
		}

		function add () {
			// получаем имя нового компонента
			var newItemInput = document.querySelector('#new_item_name');
			var name = newItemInput.value;
			//формирируем новый компонент для списка
				var liContent = '<label for="checkbox_completed_' + listTodo.children.length + '">' + name + '</label>'
						+ '<input type="checkbox" id="checkbox_completed_' + listTodo.children.length +'">'
						+ '<input class="edit_input" type="text">'
						+ '<button class="edit">Edit</button>'
						+ '<button class="delete">Delete</button>';

				var li = document.createElement('li');

				li.innerHTML = liContent;
				//добавляем его в список(дом)
				listTodo.appendChild(li);
				//добавляем все события
				bindEventsLi(li);
				//чистим инпут с именем 
				newItemInput.value = '';
				//выключаем добавление нового компонента так как имя пустое
				addButton.disabled = true;
		}

		function edit () {
			// находим родителя для кнопки
			var parent = this.closest('li');
			//находим инпут с новым именем
			var editInput = parent.querySelector('.edit_input');
			//находим лейбел
			var label = parent.querySelector('label');
			//меняем на новое имя
			label.innerText = editInput.value;
			//чистим инпут
			editInput.value = '';
		}

		function deleteItem () {
			// находим родителя для кнопки
			var parent = this.closest('li');
			// удаляем компонент
			parent.remove();

			// TODO reindex id
		}

		function changeCheckbox() {
			// получаем значение чекбокса
			var checked = this.checked;
			// получаем сам компонент
			var li = this.closest('li');

			if (checked) {
				// если чекбокс выполнен тогда отправляем его в законченный список
				listCompleted.appendChild(li);
			} else {
				// если чекбокс не выполнен тогда отправляем его в не законченный список
				listTodo.appendChild(li);
			}

			//Todo reindex id
		}

		function validateAdd() {
			//блокируем кнопку
			if (this.value === '') {
				addButton.disabled = true;
			} else {
				addButton.disabled = false;
			}

		}

		//функция добавление событий на уже существующие елементы
		function bindEvents () {
			//получаем все кнопки редактирования
			var editButtonsCollection  = document.querySelectorAll('.edit');
			//получаем все кнопки удалееия
			var deleteButtonsCollection  = document.querySelectorAll('.delete');
			//получаем все чекбоксы
			var checkboxCollection  = document.querySelectorAll('input[type="checkbox"]');
			
			//добавили событые на создание нового елемента
			addButton.addEventListener('click', add);
			//добавим событие на блокировки кнопки если имени нет
			document.querySelector('#new_item_name').addEventListener('input', validateAdd);

			//добавляем событие на редактирование компонента для каждой кнопки
			editButtonsCollection.forEach(function(editButton) {
				editButton.addEventListener('click', edit);
			})

			//добавляем событие на удаление компонента для каждой кнопки
			deleteButtonsCollection.forEach(function(deleteButton) {
				deleteButton.addEventListener('click', deleteItem);
			})

			//добавляем событие на изменение чекбокса
			checkboxCollection.forEach(function(checkbox) {
				checkbox.addEventListener('change', changeCheckbox);
			})
		}

		bindEvents();
	})();
