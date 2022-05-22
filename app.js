const target = document.querySelector('.uncom');
const delbtn = document.querySelectorAll('.btn2');



//creating a todo 
const buttons = document.querySelectorAll('.btn-1');
for (let button of buttons) {
    this.addEventListener('click', function() {

        // prevent form submit
        event.preventDefault();
        const addtext = document.querySelector(".addtext");
        if (addtext.value === "") {

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

    })
}


//deleting a todo 
delbtn.addEventListener('click', delitem);

    function delitem (e){
        const item = e.target;

        if (item.classList[0] === "btn2"){
            const todo = item.parentElement;
            todo.remove();
        }
    }
 