// const open_menu = document.querySelector("#op")
// const close_menu = document.querySelector("#cl")
// // function menu(){

// //     open_menu.classList.toggle("hidden")
// //     close_menu.classList.toggle("hidden")
// // }

// console.log(open_menu,close_menu)


var swiper = new Swiper(".mySwiper", {});



const menuHamburger = document.querySelector(".open_menu")
const navLinks = document.querySelector(".open")

menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
})