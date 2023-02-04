const aside = document.querySelector('.aside');
const dot = document.querySelector('.btn-dot');
const container = document.querySelector('.container')
const out =document.querySelector('.out i');
const menu=document.querySelector('.fa-bars');
const navlink=document.querySelector('.nav-link');

dot.addEventListener('click', ()=>{
    aside.style.display="initial";
    container.style.left="29rem";
    console.log('clicked');
});

out.addEventListener('click', ()=>{
    aside.style.display="none";
    container.style.left="10rem";
});

menu.addEventListener('click', ()=>{
    navlink.classList.toggle('mobile-nav');
});

const links = document.querySelectorAll('.link');

links.forEach((link)=>{
    function renderClick () {
        navlink.classList.toggle('mobile-nav');
    };
    link.addEventListener('click', renderClick);
});
