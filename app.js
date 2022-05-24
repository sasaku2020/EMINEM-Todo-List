const target = document.querySelector('.listul');
const comp = document.querySelector('.com');
const addtext = document.querySelector(".addtext");
const btndel = document.querySelectorAll(".btndel");



///////// creating a todo 
const addbutton = document.querySelector('.btnadd');

addbutton.addEventListener('click', addfunc => {
    // prevent form submit
    event.preventDefault();

    if (addtext.value === "") {
        addtext.placeholder = "Write something dude";
    } else {

        // adding div
        const lidiv = document.createElement('div');
        target.appendChild(lidiv);
        lidiv.classList.add('lidiv');

        // adding li
        const li = document.createElement('li');
        lidiv.appendChild(li);
        li.classList.add('liitem');
        li.innerHTML = addtext.value;
        li.classList.add('txtspan');

        // clearing input content
        addtext.value = "";


        // adding delete button 
        const btndel = document.createElement('button');
        btndel.classList.add('btndel');
        btndel.innerHTML = '<i class="fa-solid fa-trash"></i>';
        lidiv.appendChild(btndel);


        // adding compelete button 
        const btncom = document.createElement('button');
        btncom.classList.add('btncom');
        btncom.innerHTML = '<i class="fas fa-check"></i>';
        lidiv.appendChild(btncom);
    }
});



/////// delete a todo 


target.addEventListener("click", function delfunc(e) {
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
        comp.appendChild(item.parentElement);
    } else {
        console.log(item.parentElement);
    }
});