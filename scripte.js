var swiper = new Swiper(".mySwiper", {});



const menuHamburger = document.querySelector(".open_menu")
const navLinks = document.querySelector(".open")

menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
})



const product = [
        {
                name: 'poki',
                price: 20,
                image: 'image/carte-6.png',
                color: 'orange'
        },
        {
                name: 'polo',
                price: 10,
                image: 'image/carte-1.png',
                color: 'purple'
        },
        {
                name: 'kiki',
                price: 15,
                image: 'image/carte-5.png',
                color: 'green'
        },
        {
                name: 'lolo',
                price: 20,
                image: 'image/carte-2.png',
                color: 'orange'
        },
        {
                name: 'ninii',
                price: 20,
                image: 'image/carte-3.png',
                color: 'yellow'
        },
        {
                name: 'nayno',
                price: 20,
                image: 'image/carte-4.png',
                color: 'blue'
        },
        {
                name: 'lopi',
                price: 20,
                image: 'image/carte-10.png',
                color: 'green'
        },
        {
                name: 'mio',
                price: 20,
                image: 'image/carte-11.png',
                color: 'orange'
        },
        {
                name: 'hola',
                price: 20,
                image: 'image/carte-12.png',
                color: 'orange'
        },
        {
                name: 'gigo',
                price: 18,
                image: 'image/carte-9.png',
                color: 'yellow'
        },
        {
                name: 'poha',
                price: 50,
                image: 'image/carte-8.png',
                color: 'blue'
        },
        {
                name: 'fiane',
                price: 2,
                image: 'image/carte-7.png',
                color: 'orange'
        },

];
const barre_filtrage = [
        {
                name: 'Communes',
                color: 'green',
        },
        {
                name: 'Rares',
                color: 'yellow',
        },
        {
                name: 'Legendar',
                color: 'orange',
        },
        {
                name: 'Mythic',
                color: 'blue',
        },
        {
                name: 'Epic',
                color: 'purple',
        },
]
const buttons_filtrage = document.querySelector('#filtrage')

barre_filtrage.forEach((el) => {
        buttons_filtrage.innerHTML += `
        <li id="btn_${el.color}" class=" bg-${el.color}-500  text-black w-35 flex justify-center rounded-tl-[10px] rounded-br-[10px]">
                    ${el.name}</li>

        `
})

barre_filtrage.forEach((el) => {
        console.log(el);
        if(!el)return;
        const color_btn = document.getElementById(`btn_${el.color}`);
        console.log(color_btn)
        color_btn.addEventListener('click', () => {
                afiche_carte(el.color)

        }
        )
})


const copy_product = [

]


product.forEach((el)=>{

        copy_product.push(el)
})


// const product2 = [
//         {
//                 name: 'lopi',
//                 price: 20,
//                 image: 'image/carte-10.png',
//                 color: 'green'
//         },
//         {
//                 name: 'mio',
//                 price: 20,
//                 image: 'image/carte-11.png',
//                 color: 'orange'
//         },
//         {
//                 name: 'hola',
//                 price: 20,
//                 image: 'image/carte-12.png',
//                 color: 'orange'
//         },
//         {
//                 name: 'gigo',
//                 price: 18,
//                 image: 'image/carte-9.png',
//                 color: 'yellow'
//         },
//         {
//                 name: 'poha',
//                 price: 50,
//                 image: 'image/carte-8.png',
//                 color: 'blue'
//         },
//         {
//                 name: 'fiane',
//                 price: 2,
//                 image: 'image/carte-7.png',
//                 color: 'orange'
//         },

// ];

// const btn2 = document.querySelector("#btn2")
// btn2.addEventListener('click', () => {
//         product.forEach((el) => {
//                 carte_market.innerHTML = `
    
//     `
//         })
//         product2.forEach((el) => {
//                 carte_market.innerHTML += `
    
//     <div
//                 class="carte_market w-65 h-108 lg:w-90 lg:h-150 rounded-[15px] flex flex-col justify-center items-center gap-5">
//                 <div
//                     class=" bg-[url(${el.image})] bg-cover bg-center lg:w-80 w-60 lg:h-112 h-85 flex flex-col justify-end items-center">
//                     <div
//                         class=" carte text-white relative flex flex-col justify-center items-center bottom-0.5  w-full h-33 lg:h-44 rounded-[10px]">
//                         <div class="flex justify-center items-center lg:gap-6 gap-6 relative left-2.5">
//                             <h2 class="anime rotate-[90deg] lg:text-[24px] text-[18px] absolute  lg:right-44 right-35 ">
//                                 ANIME</h2>
//                                 <div
//                                     class="flex flex-col font-[Poppins] gap-1 w-25 lg:w-35 relative lg:left-6 left-2 lg:gap-1">
//                                     <h5 class="lg:text-[15px] text-[12px] font-[700]">${el.name}</h5>
//                                     <p class="lg:text-[12px]/3 text-[9px]/2  font-[400] ">Lorem ipsum dolor
//                                         sit
//                                         ame Lorem ipsum
//                                         dolor
//                                         sit
//                                         amet
//                                         consectetur adipisicing elit.</p>
//                                 </div>
//                                 <P class="lg:text-[11px] text-[9px] font-[700] relative top-1">
//                                     prix : ${el.price}$
//                                 </P>
//                         </div>
//                         <div class="flex gap-8 lg:gap-13 lg:text-[24px] text-[20px] font-[700] font-[Lemon]">
//                             <h2>POKEMON</h2>
//                             <h3 class="text-${el.color}-500">XX</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="flex gap-12">
//                     <button
//                         class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#2F8E44]">ajouter
//                         au
//                         panie</button>
//                     <button
//                         class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#936C57]">ajouter
//                         aux
//                         favoris</button>
//                 </div>
//             </div>
     
    
//     `
//         })

// })


// const btn1 = document.querySelector("#btn1")
// btn1.addEventListener('click', () => {
//         product2.forEach((el) => {
//                 carte_market.innerHTML = `
    
//     `
//         })
//         product.forEach((el) => {
//                 carte_market.innerHTML += `
    
//     <div
//                 class="carte_market w-65 h-108 lg:w-90 lg:h-150 rounded-[15px] flex flex-col justify-center items-center gap-5">
//                 <div
//                     class=" bg-[url(${el.image})] bg-cover bg-center lg:w-80 w-60 lg:h-112 h-85 flex flex-col justify-end items-center">
//                     <div
//                         class=" carte text-white relative flex flex-col justify-center items-center bottom-0.5  w-full h-33 lg:h-44 rounded-[10px]">
//                         <div class="flex justify-center items-center lg:gap-6 gap-6 relative left-2.5">
//                             <h2 class="anime rotate-[90deg] lg:text-[24px] text-[18px] absolute  lg:right-44 right-35 ">
//                                 ANIME</h2>
//                                 <div
//                                     class="flex flex-col font-[Poppins] gap-1 w-25 lg:w-35 relative lg:left-6 left-2 lg:gap-1">
//                                     <h5 class="lg:text-[15px] text-[12px] font-[700]">${el.name}</h5>
//                                     <p class="lg:text-[12px]/3 text-[9px]/2  font-[400] ">Lorem ipsum dolor
//                                         sit
//                                         ame Lorem ipsum
//                                         dolor
//                                         sit
//                                         amet
//                                         consectetur adipisicing elit.</p>
//                                 </div>
//                                 <P class="lg:text-[11px] text-[9px] font-[700] relative top-1">
//                                     prix : ${el.price}$
//                                 </P>
//                         </div>
//                         <div class="flex gap-8 lg:gap-13 lg:text-[24px] text-[20px] font-[700] font-[Lemon]">
//                             <h2>POKEMON</h2>
//                             <h3 class="text-${el.color}-500">XX</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="flex gap-12">
//                     <button
//                         class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#2F8E44]">ajouter
//                         au
//                         panie</button>
//                     <button
//                         class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#936C57]">ajouter
//                         aux
//                         favoris</button>
//                 </div>
//             </div>
     
    
//     `
//         })

// })


////////////////////////////////








const carte_market = document.querySelector('#carte_market')
console.log(carte_market)






function afiche_carte(el) {
        console.log(el);
        carte_market.innerHTML=''
        // if(!el)return;
        const color = el ===undefined ? 'all':el
        console.log(color);
        const filter_product=copy_product.filter(el=>el.color===color || color==='all')
        console.log(filter_product)
        filter_product.forEach((el) => {
                carte_market.innerHTML += `
    
    <div
                class="carte_market w-65 h-108 lg:w-90 lg:h-150 rounded-[15px] flex flex-col justify-center items-center gap-5">
                <div
                    class=" bg-[url(${el.image})] bg-cover bg-center lg:w-80 w-60 lg:h-112 h-85 flex flex-col justify-end items-center">
                    <div
                        class=" carte text-white relative flex flex-col justify-center items-center bottom-0.5  w-full h-33 lg:h-44 rounded-[10px]">
                        <div class="flex justify-center items-center lg:gap-6 gap-6 relative left-2.5">
                            <h2 class="anime rotate-[90deg] lg:text-[24px] text-[18px] absolute  lg:right-44 right-35 ">
                                ANIME</h2>
                                <div
                                    class="flex flex-col font-[Poppins] gap-1 w-25 lg:w-35 relative lg:left-6 left-2 lg:gap-1">
                                    <h5 class="lg:text-[15px] text-[12px] font-[700]">${el.name}</h5>
                                    <p class="lg:text-[12px]/3 text-[9px]/2  font-[400] ">Lorem ipsum dolor
                                        sit
                                        ame Lorem ipsum
                                        dolor
                                        sit
                                        amet
                                        consectetur adipisicing elit.</p>
                                </div>
                                <P class="lg:text-[11px] text-[9px] font-[700] relative top-1">
                                    prix : ${el.price}$
                                </P>
                        </div>
                        <div class="flex gap-8 lg:gap-13 lg:text-[24px] text-[20px] font-[700] font-[Lemon]">
                            <h2>POKEMON</h2>
                            <h3 class="text-${el.color}-500">XX</h3>
                        </div>
                    </div>
                </div>
                <div class="flex gap-12">
                    <button
                        class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#2F8E44]">ajouter
                        au
                        panie</button>
                    <button
                        class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#936C57]">ajouter
                        aux
                        favoris</button>
                </div>
            </div>
     
    
    `
        })
}
afiche_carte()


