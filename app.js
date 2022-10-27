const newTodo = document.querySelector('.add__todo'); 
const form = document.querySelector('.form');
const textInput = document.querySelector('.text__input');
const dateInput = document.querySelector('.date__input');
const closeBtn = document.querySelector('.close__btn');
const newTask = document.querySelector('.todo__modalbox');




//function to Submit form
function submitForm(event) {
    event.preventDefault();
    console.log('Submitted');
    formValidation();

}


//function to add new tasks to todo list
function addNewTask(e)  {
    newTask.style.display = 'block';
    form.addEventListener('submit', submitForm);
}
newTodo.addEventListener('click', addNewTask);


function acceptData() {
    let todos = [];
    
}
//function to validate form
function  formValidation(){
    const errorMessage = document.querySelector('.msg');
    if(textInput.value == '') {
        errorMessage.innerHTML = 'Task cannot be blank';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.innerHTML = '';
        errorMessage.style.display = 'none';
    }
    if(!dateInput.value) {
        console.log('no date');
        const  date = new Date()
        dateInput.valueAsDate = date;
    } 
    acceptData();
}

function closeModalBox(event) {
    const buttonClicked = event.target;
    console.log(buttonClicked);
    newTask.style.display = 'none';
}

closeBtn.addEventListener('click', closeModalBox);