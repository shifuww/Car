const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('.nav');

burger.addEventListener('click', event => {

        nav.classList.add('open');
    }
)
nav.addEventListener('click', event =>{
    nav.classList.remove('open');
})