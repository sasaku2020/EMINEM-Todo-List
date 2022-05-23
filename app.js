// Selectors
const todolist = document.querySelector('.listul');
const addtext = document.querySelector(".addtext");
const btndel = document.querySelectorAll(".btndel");
const filter = document.querySelector(".filter");


///////// creating a todo 
const addbutton = document.querySelector('.btnadd');

addbutton.addEventListener('click', addfunc => {
    // prevent form submit
    event.preventDefault();

    if (addtext.value === "") {
        addtext.placeholder = "Write something dude";
    } else {

        // adding div
        const todo = document.createElement('div');
        todolist.appendChild(todo);
        todo.classList.add('lidiv');

        // adding li
        const li = document.createElement('li');
        todo.appendChild(li);
        li.classList.add('liitem');
        li.innerHTML = addtext.value;
        li.classList.add('txtspan');

        // clearing input content
        addtext.value = "";


        // adding delete button 
        const btndel = document.createElement('button');
        btndel.classList.add('btndel');
        btndel.innerHTML = '<i class="fa-solid fa-trash"></i>';
        todo.appendChild(btndel);


        // adding compelete button 
        const btncom = document.createElement('button');
        btncom.classList.add('btncom');
        btncom.innerHTML = '<i class="fas fa-check"></i>';
        todo.appendChild(btncom);
    }
});



// delete a todo 
todolist.addEventListener("click", function delfunc(e) {
    const item = e.target;

    if (item.classList[0] === 'btndel') {
        const catcher = item.parentElement;
        catcher.classList.add('fall');
        catcher.addEventListener("transitionend", function() {
            catcher.remove();
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
filter.addEventListener("click", filtertodoes);
function filtertodoes(e) {
    const todos = todolist.childNodes;

    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                    todo.style.display = "flex";
                break;
            case "comp":
                if(todo.classList.contains('compstatus')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
                break;
            case "inpro":
            if(!todo.classList.contains('inpro')){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
            break;
        }
    })    
};