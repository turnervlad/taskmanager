+(function(){

	var buttonAddTask = document.getElementById('button-addon2');
	var inputText = document.getElementById('inputText');
	var taskList = document.getElementById('task-list');



	buttonAddTask.addEventListener('click', function(event) {

		if (inputText.value.length < 1) {
			alert('Введите хотя бы один символ, поля ввода пусто!');
			return
		}
		

		//alert(inputText.value);

		var btnClose = document.createElement('button');
		btnClose.classList.add('close');
		btnClose.type='button';
		btnClose.innerHTML = '<span aria-hidden="true">&times;</span>';

		btnClose.addEventListener('click', function(event){

			taskList.removeChild(div);
			console.log(event);

		})

		taskList.addEventListener('click', function(event) {

			taskList.style.background.color = 'red';
		})

		var div = document.createElement('div');
		div.classList.add('alert');
		div.classList.add('alert-primary');
		div.innerHTML = inputText.value;

		div.appendChild(btnClose);

		taskList.appendChild(div);

		inputText.value = '';

	}, false);

	console.log(buttonAddTask, inputText, taskList);

}())