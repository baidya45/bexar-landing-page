let ul = document.querySelector('.nav-op');
let bar = document.querySelector('#menubar');
let para = document.querySelector('.para');

bar.addEventListener('click',()=>{
    ul.classList.toggle('active');
    para.classList.toggle('active1');
    
})