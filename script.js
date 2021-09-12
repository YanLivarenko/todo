// Необходимо сделать:
// Удаление элементов
// Сохранение данных в браузере

document.addEventListener('DOMContentLoaded', () => {

    const todoInput = document.querySelector('#todoInput');
    const todoList = document.querySelector('#todoList');
    const todoButton = document.querySelector('#todoButton');
    const deleteButton = document.querySelector('#deleteButton');
    let obj = [
    ];

    const play = () => {
        obj.forEach((index) => {
            let listElement = document.createElement('li');
            listElement.innerHTML = `<span>${index.value}</span>  <button id='#deleteButton'>-</button>`;
            todoList.appendChild(listElement);
        });
    };

    // play();
    if(localStorage.getItem('todo')){
        obj = JSON.parse(localStorage.getItem('todo'));
        play();
    }
    const addItem = () => {
        let tempObj = {
            value: '',
        };
        tempObj.value = todoInput.value;
        obj.push(tempObj);
        localStorage.setItem('todo', JSON.stringify(obj));
    }

    todoButton.addEventListener('click', () => {
        if(todoInput.value){
            addItem();
            todoList.innerHTML = '';
            play();
            todoInput.value = '';
        }else alert('Вы не можете ввести пустое значение');
    });
});