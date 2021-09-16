
document.addEventListener('DOMContentLoaded', () => {

    const todoInput = document.querySelector('#todoInput');
    const todoList = document.querySelector('#todoList');
    const todoButton = document.querySelector('#todoButton');
    let obj = [];
    
    const play = () => {
        todoList.innerHTML = '';
        obj.forEach((item, index) => {
            let listElement = document.createElement('li');
            listElement.setAttribute('id', `${index}`);
            listElement.innerHTML = `<span>${item.value}</span>  <button class='deleteButton'>-</button>`;
            todoList.appendChild(listElement);
        });
        let  deleteButton = document.querySelectorAll('.deleteButton');
        deleteButton.forEach((item, index) => {
            item.addEventListener('click', () => {
                deleteItem(obj, index);
            })
        })
    };

    if(localStorage.getItem('todo')){
        obj = JSON.parse(localStorage.getItem('todo'));
        play();
    }else play();

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
            play();
            todoInput.value = '';
        }else alert('Вы не можете ввести пустое значение');
    });

    const deleteItem = (object, index) => {
        deleteButton = document.querySelectorAll('.deleteButton');
        let tempArr = object.filter((_item, itemIndex) => index != itemIndex)
        obj = tempArr;
        console.log(obj);
        localStorage.setItem('todo', JSON.stringify(obj));
        play();
    }
});