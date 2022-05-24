const target = document.querySelector('.uncom');
const addtext = document.querySelector(".addtext");


//creating a todo 
const addbutton = document.querySelector('.btnadd');

addbutton.addEventListener('click', addfunc => {
    // prevent form submit
    event.preventDefault();

    if (addtext.value === "") {
        addtext.placeholder = "Write something dude";
    } else {

        //adding li
        const li = document.createElement('li');
        target.appendChild(li);
        li.classList.add('liit');

        //adding span with content
        const txtspan = document.createElement('span');
        li.appendChild(txtspan);
        txtspan.innerHTML = addtext.value;
        txtspan.classList.add('txtspan');


        //clearing input content
        addtext.value = "";


        //adding delete button 
        const btn2 = document.createElement('button');
        li.appendChild(btn2);
        btn2.classList.add('btn2');
        btn2.innerHTML = '<i class="fa-solid fa-trash"></i>';


        //adding compelete button 
        const btn3 = document.createElement('button');
        btn3.classList.add('btn3');
        li.appendChild(btn3);
        btn3.innerHTML = '<i class="fas fa-check"></i>';

    }
});




//deleting a todo 
const delbtn = document.querySelectorAll('.btn2');
const liitem = document.querySelectorAll('.liitem');