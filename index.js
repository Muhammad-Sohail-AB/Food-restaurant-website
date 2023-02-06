//! @@@@@@@@@@@@@@@@@@@@@@@@@@ Navbar scrool Event  @@@@@@@@@@@@@@@@@@@
const navBar=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    navBar.classList.toggle('navBarScroll',window.scrollY>0);
});



// ! @@@@@@@@@@@@@@@@@@@@@@@ toggle the Nav bar menu @@@@@@@@@@@@@@@@@@@@@@@@@@@
const openMenu=document.querySelector('nav .navbar__open__button');
const closeMenu=document.querySelector('nav .navbar__close__button');
const navItems=document.querySelector('nav .navbar__items');
openMenu.addEventListener('click',()=>{
    openMenu.classList.toggle('navbar__close__button');
    closeMenu.classList.toggle('navbar__close__button');
    navItems.style.display='flex';
})
closeMenu.addEventListener('click',()=>{
    closeMenu.classList.toggle('navbar__close__button');
    openMenu.classList.toggle('navbar__close__button');
    navItems.style.display='none';
})
// ! @@@@@@@@@@@@@@@@@@@@@@@@@@@ our swipper js library @@@@@@@@@@@@@@@@@@@@@@
var swiper = new Swiper(".mySwiper", {
    // swipper js uses mobile first responsiveness first
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints
    breakpoints:{
800:{
    slidesPerView: 2,
},
1024:{
    slidesPerView:3,
}
    },
    
  });
