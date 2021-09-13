$(document).ready(function(){
    // toggle menu/navbar script
 

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontent Developer", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
const ham = document.querySelector('.ham');
const ul = document.querySelector('.menu');
ham.addEventListener('click',()=>{
    ham.classList.toggle('active');
    ul.classList.toggle('active');
})
