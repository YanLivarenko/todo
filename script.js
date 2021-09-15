// Необходимо сделать:
// Удаление элементов
// Сохранение данных в браузере

document.addEventListener('DOMContentLoaded', () => {

    const todoInput = document.querySelector('#todoInput');
    const todoList = document.querySelector('#todoList');
    const todoButton = document.querySelector('#todoButton');
    let obj = [
    ];
    
    const play = () => {
        todoList.innerHTML = '';
        obj.forEach((item, index) => {
            let listElement = document.createElement('li');
            listElement.setAttribute('id', `${index}`);
            listElement.innerHTML = `<span>${item.value}</span>  <button class='deleteButton'>-</button>`;
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
            // todoList.innerHTML = '';
            play();
            todoInput.value = '';
        }else alert('Вы не можете ввести пустое значение');
    });

    
    
    const deleteButton = document.querySelectorAll('.deleteButton');
    console.log(obj);

    const deleteItem = (object, index) => {
        let tempArr = object.filter((item, itemIndex) => index != itemIndex)
        obj = tempArr;
        console.log(obj);
        localStorage.setItem('todo', JSON.stringify(obj));
        play();
    }

    deleteButton.forEach((item, index) => {
        item.addEventListener('click', () => {
            deleteItem(obj, index);
        })
    })
});