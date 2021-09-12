// Необходимо сделать:
// Удаление элементов
// Сохранение данных в браузере

document.addEventListener('DOMContentLoaded', () => {

    const todoInput = document.querySelector('#todoInput');
    const todoList = document.querySelector('#todoList');
    const todoButton = document.querySelector('#todoButton');
    const deleteButton = document.querySelector('#deleteButton');
    const obj = [];

    const play = () => {
        obj.forEach((index) => {
            let listElement = document.createElement('li');
            listElement.innerHTML = `<span>${index.value}</span>  <button id='#deleteButton'>-</button>`;
            todoList.appendChild(listElement);
        });
    };

    play();
    console.log(todoInput)

    const addItem = () => {
        let tempObj = {
            value: '',
        };
        tempObj.value = todoInput.value;
        obj.push(tempObj);
    }

    todoButton.addEventListener('click', () => {
        if(todoInput.value){
            addItem();
            todoList.innerHTML = '';
            play();
            todoInput.value = '';
        }else alert('Вы не можете ввести пустое значение');
    });

    const deleteItem = (object) => {
        object.forEach((item, index) => {

        })
    }

    // deleteButton.addEventListener('click', () => {
    // });


    // const addItem = () => {
    //     const listItem = document.createElement('li');
    //     listItem.innerHTML = `<span>${todoInput.value}</span>  <button id='#deleteButton'>-</button>`;
    //     // listItem.textContent = todoInput.value;
    //     todoList.appendChild(listItem);
    // };

    // deleteButton.addEventListener('click', () => {

    // });

    // todoButton.addEventListener('click', () => {
    //     addItem();
    // });
});