const addItem = document.querySelector('.add__todo');
const formModalBox = document.querySelector('.todo__modalbox');
const form = document.querySelector('.form');
const textInput = document.querySelector('.text__input');
const dateInput = document.querySelector('.date__input');
const description = document.querySelector('.textarea');
const closeBtn = document.querySelector('.close__btn');
const todoList = document.querySelector('.todo__list__container');
const clearButton = document.querySelector('.clear__btn');
const todoItems = [];


function acceptData() {
    const todoObj = {
        text: textInput.value,
        date: dateInput.value,
        description: description.value
    };
    todoItems.push(todoObj);
    localStorage.setItem('list', JSON.stringify(todoItems));
    
    console.log(todoItems);
}

function deleteTodoItem(event) {
    const deleteIcon = event.target;
    const todo = deleteIcon.parentNode.parentNode.parentNode.parentNode;
    todo.remove();

}
function addEventObject() {
    const deleteTodoBtns = document.querySelectorAll('.delete__todo');
    const lastDeleteBtn = deleteTodoBtns[deleteTodoBtns.length - 1];
    lastDeleteBtn.addEventListener('click', deleteTodoItem);
}

function showTodoItems() {
     const itemArray = localStorage.getItem('list');
     const todo__item__array = JSON.parse(itemArray);
     console.log(todo__item__array)
     const todoItem = document.createElement('div');
     todoItem.classList.add('todo__list__items');

     todo__item__array.map(function (item) { 
        return (
        todoItem.innerHTML = `
        <ul class="todo__details" >
            <li>
                <div>
                    <input type="checkbox" class="check__todo">
                    <span class="todo__item__heading">${item.text}</span>
                </div>
                <span class="todo__item__date">${item.date}</span>
            </li>
            <li class="description todo__details">
            <span class= "todo__description">${item.description}</span>
            <span><i class= "fas fa-trash-alt delete__todo"></i></span>     
            </li>
        </ul>          
        `)
     });    
     todoList.appendChild(todoItem);
     addEventObject();
}

function formValidation() {
    const errorMsg = document.querySelector('.msg');
    if(textInput.value === '') {
        errorMsg.innerHTML = 'Task cannot be blank';
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';

    }
    if (textInput.value !=='') {
        acceptData();
    } else return;
    showTodoItems();
}


function submitTodoItem (event) {
    event.preventDefault();
   formValidation();
   event.target.reset();


}

form.addEventListener('submit', submitTodoItem);

function addNewTodo() {
formModalBox.style.display = 'block';
}
addItem.addEventListener('click', addNewTodo);




function closeFormModal(event) {
  event.preventDefault();
  formModalBox.style.display = 'none';
}

closeBtn.addEventListener('click', closeFormModal);

function clearForm(event) {
    let target = event.target.parentNode.parentNode.parentNode;
    target.reset();
    console.log(target);

}

clearButton.addEventListener('click', clearForm);


