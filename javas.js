let burger=document.querySelector(".burger");

let mobilenav=document.querySelector(".mobile-nav");

burger.addEventListener('click',function(e){
    mobilenav.classList.toggle("display");
    burger.classList.toggle("toggle");
});

$(document).ready(function(){
    $(burger).click(function(){
      $(mobilenav).slideToggle("500ms");
    });
});