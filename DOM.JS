//console.log(window);
//window.alert(1);

//single element
//console.log(document.getElementById('my-form'));

//console.log(document.querySelector('h1'));
//const form = document.getElementById('my-form');

//console.log(form);

//multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('items'));
//console.log(document.getElementsByTagName('li'));

//const items = document.querySelectorAll('.items');

//items.forEach((items) => console.log(items));

//const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent='hello';
//ul.children[1].innerText = 'brad';
//ul.lastElementChild.innerHTML='<h1>hello</h1>'

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';
/*
btn.addEventListener('mouseout', (e) => { //different events
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    //console.log(e.target.id); //to show you the specific code.

    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h2>hello</h2>';
});*/

const Form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

Form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === ''|| email.value ===''){
        alert('please Enter fields');

    }else{
        alert('log in success!!');
    }
}