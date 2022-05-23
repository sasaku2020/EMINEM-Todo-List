// Selectors
const todolist = document.querySelector('.listul');
const addtext = document.querySelector(".addtext");
const btndel = document.querySelectorAll(".btndel");
const filtering = document.querySelector(".filter");

document.addEventListener("DOMContentLoaded",getTodos);

///////// creating a todo 
const addbutton = document.querySelector('.btnadd');

addbutton.addEventListener('click', addfunc => {
    // prevent form submit
    event.preventDefault();

    if (addtext.value === "") {
        addtext.placeholder = "Write something dude";
    } else {

        // adding div
        const todoDiv = document.createElement('div');
        todolist.appendChild(todoDiv);
        todoDiv.classList.add('lidiv');

        // adding li
        const li = document.createElement('li');
        todoDiv.appendChild(li);
        li.classList.add('liitem');
        li.innerHTML = addtext.value;

        // adding delete button 
        const btndel = document.createElement('button');
        btndel.classList.add('btndel');
        btndel.innerHTML = '<i class="fa-solid fa-trash"></i>';
        todoDiv.appendChild(btndel);


        // adding compelete button 
        const btncom = document.createElement('button');
        btncom.classList.add('btncom');
        btncom.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(btncom);

        // adding to local storage
        savelocaly(addtext.value);

        // clearing input content
        addtext.value = "";
    }
});



// delete a todo 
todolist.addEventListener("click", function delfunc(e) {
    const item = e.target;

    if (item.classList[0] === 'btndel') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function() {
            todo.remove();
            
        })
    } else {
        console.log(item.parentElement);
    }
    if (item.classList[0] === 'btncom') {
        const catcher = item.parentElement;
        catcher.classList.toggle('compstatus');
    } else {
        console.log(item.parentElement);
    }
});

// filter todoes 
filtering.addEventListener("click", filterTodos);


function filterTodos(e) {
    const todos = [...todolist.children];
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all" :
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("compstatus")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("compstatus")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

// saving it

  
function savelocaly (todo){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    todos.push(todo);   
    localStorage.setItem('todos', JSON.stringify(todos));   

}



function getTodos(){
    // CHECK --- HEY Do I already have thing in there?
    let todos;
        if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){

    // adding div
    const todoDiv = document.createElement('div');
    todolist.appendChild(todoDiv);
    todoDiv.classList.add('lidiv');

    /// adding li
    const li = document.createElement('li');
    todoDiv.appendChild(li);
    li.classList.add('liitem');
    li.innerHTML = todo;


    // adding delete button 
    const btndel = document.createElement('button');
    btndel.classList.add('btndel');
    btndel.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(btndel);


    // adding compelete button 
    const btncom = document.createElement('button');
    btncom.classList.add('btncom');
    btncom.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(btncom);
    });
}



  function removeLocalTodos(todo){
    // CHECK --- HEY DoIalready have thing in there?
     let todos;
    if(localStorage.getItem("todos") === null){
       todos = [];
     }else {
       todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
   }