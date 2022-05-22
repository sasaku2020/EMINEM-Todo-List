const target = document.querySelector('.uncom')

const buttons = document.querySelectorAll('.btn-1');
for (let button of buttons) {
    this.addEventListener('click', function() {

        const addtext = document.querySelector(".addtext");
        if (addtext.value === "") {

        } else {
            const li = document.createElement('li');
            li.innerHTML = addtext.value
            target.appendChild(li);
            addtext.value = "";
        }

    })
}