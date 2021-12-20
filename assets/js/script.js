let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
};
searchBtn.addEventListener("click",function(){
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");

});
menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


formBtn.addEventListener('click', function() {
    loginForm.classList.add('active');
});

formClose.addEventListener('click',function (){
    loginForm.classList.remove('active');
});
videoBtn.forEach( function(btn){
    btn.addEventListener('click', function(){
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

////slider review
var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    freeMode: true,
   
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {

        250: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});