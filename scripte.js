



var swiper = new Swiper(".mySwiper", {});
//Menu toggle
const menuHamburger = document.querySelector(".open_menu")
const navLinks = document.querySelector(".open")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

//Rarter toggle
const openRarter = document.querySelector(".open_rarter")
const Rarter = document.querySelector(".rarter")
if (openRarter) {
    openRarter.addEventListener('click', () => {
        Rarter.classList.toggle('open_rarter')
    })
}

//Products
const product = [
    {
        id: 1,
        name: 'poki',
        price: 20,
        image: 'image/carte-6.png',
        color: 'orange',
        Quantiter: 1
    },
    {
        id: 2,
        name: 'polo',
        price: 10,
        image: 'image/carte-1.png',
        color: 'purple',
        Quantiter: 1
    },
    {
        id: 3,
        name: 'kiki',
        price: 15,
        image: 'image/carte-5.png',
        color: 'green',
        Quantiter: 1
    },
    {
        id: 4,
        name: 'lolo',
        price: 20,
        image: 'image/carte-2.png',
        color: 'orange',
        Quantiter: 1
    },
    {
        id: 5,
        name: 'ninii',
        price: 20,
        image: 'image/carte-3.png',
        color: 'yellow',
        Quantiter: 1
    },
    {
        id: 6,
        name: 'nayno',
        price: 20,
        image: 'image/carte-4.png',
        color: 'blue',
        Quantiter: 1
    },
    {
        id: 7,
        name: 'lopi',
        price: 20,
        image: 'image/carte-10.png',
        color: 'green',
        Quantiter: 1
    },
    {
        id: 8,
        name: 'mio',
        price: 20,
        image: 'image/carte-11.png',
        color: 'orange',
        Quantiter: 1
    },
    {
        id: 9,
        name: 'hola',
        price: 20,
        image: 'image/carte-12.png',
        color: 'orange',
        Quantiter: 1
    },
    {
        id: 10,
        name: 'gigo',
        price: 18,
        image: 'image/carte-9.png',
        color: 'yellow',
        Quantiter: 1
    },
    {
        id: 11,
        name: 'poha',
        price: 50,
        image: 'image/carte-8.png',
        color: 'blue',
        Quantiter: 1
    },
    {
        id: 12,
        name: 'fiane',
        price: 2,
        image: 'image/carte-7.png',
        color: 'orange',
        Quantiter: 1
    },

];

//Barre de filter
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

//Affiche la barre de filter
const buttons_filtrage = document.querySelector('.filtrage')
if (buttons_filtrage) {
    barre_filtrage.forEach((el) => {
        buttons_filtrage.innerHTML += `
        <li id="btn_${el.color}" class=" bg-${el.color}-500  text-black w-35 flex justify-center rounded-tl-[10px] rounded-br-[10px]">
                    ${el.name}</li>
        `
    })
    //Add event listeners to filter buttons
    barre_filtrage.forEach((el) => {

        const color_btn = document.getElementById(`btn_${el.color}`);

        if (color_btn)
            color_btn.addEventListener('click', () => {
                afiche_carte(el.color)
            }
            )
    })
}




// localStorage favoris and panier and My Deck
let tous_favoris = JSON.parse(localStorage.getItem('favoris')) || []
let tous_panier = JSON.parse(localStorage.getItem("panier")) || []
let tous_My_Deck = JSON.parse(localStorage.getItem("My_Deck")) || []

//fonction d'ajoute au favoris
function ajoute_favoris(id) {
    const el_favoris = product.find(el => el.id === id);
    if (!el_favoris)
        return;

    const isExist = tous_favoris.some(element => element.id === id)
    if (!isExist) {
        tous_favoris.push(el_favoris)
        localStorage.setItem("favoris", JSON.stringify(tous_favoris));
        affiche_favoris();
    }
    else {
        alert(`${el_favoris.name} est déja dans les favoris`)
    }
}

//remove to favoris
function supprimer_favoris(id) {
    tous_favoris = tous_favoris.filter(el => el.id !== id)
    localStorage.setItem("favoris", JSON.stringify(tous_favoris))
    affiche_favoris()
}


//filtre and afiche cards
const carte_market = document.getElementById('cartes_market')

function afiche_carte(filterColor) {
    if (!carte_market)
        return;

    carte_market.innerHTML = ''

    const color = filterColor === undefined ? 'all' : filterColor
    const filter_product = product.filter(el => el.color === color || color === 'all')

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
                    <button onclick="ajoute_panier(${el.id})"
                        class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#2F8E44]">ajouter
                        au
                        panie</button>
                    <button onclick="ajoute_favoris(${el.id})"
                        class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#936C57]">ajouter
                        aux
                        favoris</button>
                </div>
            </div>
    `
    })
}

// product.forEach((el)=>{
//         carte_market.innerHTML += `

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
//                     <button id="favoris-btn"
//                         class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#936C57]" onclick="addToFavorite(${el.id})">ajouter
//                         aux
//                         favoris</button>
//                 </div>
//             </div>


//     `
// })


function affiche_favoris() {
    const Section_favoris = document.getElementById('section_favoris')
    if (!Section_favoris)
        return;
    //initialiser la section favoris
    Section_favoris.innerHTML = ''

    tous_favoris.forEach((el) => {
        Section_favoris.innerHTML += `
    
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
                    <button onclick="ajoute_panier_favoris(${el.id})"
                        class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#2F8E44]">ajouter
                        au
                        panie</button>
                    <button  onclick="supprimer_favoris(${el.id})"
                        class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-red-500">Supprimer</button>
                </div>
            </div>
    `
    })
}


afiche_carte();
affiche_favoris();



//function to localstorage panier
function ajoute_panier(id) {
    const el_panier = product.find(el => el.id === id)
    if (!el_panier)
        return
    const isExist_panier = tous_panier.some(el => el.id === id)
    if (!isExist_panier) {
        tous_panier.push(el_panier)
        localStorage.setItem("panier", JSON.stringify(tous_panier))
        affiche_panie()
    }
}

//function add to panier
function ajoute_panier_favoris(id) {
    const el_panier_favoris = tous_favoris.find(el => el.id === id)
    if (!el_panier_favoris)
        return
    const isExist_dans_panier = tous_panier.some(el => el.id === id)
    if (!isExist_dans_panier) {
        tous_panier.push(el_panier_favoris)
        localStorage.setItem("panier", JSON.stringify(tous_panier))
        affiche_panie()
    }
}
//function to affiche the panier 
function affiche_panie() {
    const section_panier = document.getElementById('section_panier')
    if (!section_panier)
        return
    section_panier.innerHTML = ''
    tous_panier.forEach((el) => {
        section_panier.innerHTML += `

        <div style="padding: 10px 0;"
            class="bg-linear-[45deg,#8D6464,#502F2F] lg:w-200 w-70 rounded-[15px] flex lg:flex-row lg:items-center flex-wrap justify-center lg:justify-around items-center gap-5">
            <div
                class=" bg-[url(${el.image})] bg-cover bg-center lg:w-[140px] w-[204px] lg:h-[197px] h-[287px] flex flex-col justify-end items-center">
                <div
                    class=" carte text-white relative flex flex-col justify-center items-center bottom-0.5  w-full h-[114px] lg:h-[78px] rounded-[10px]">
                    <div class="flex justify-center items-center lg:gap-10 gap-12 relative  lg:right-2 ">
                        <h2 class="anime rotate-[90deg] lg:text-[11px] text-[16px] absolute right-31.5 lg:right-19 ">
                            ANIME</h3>
                            <div class="flex flex-col font-[Poppins] w-[80px] lg:w-[55px] relative lg:left-9 left-6 ">
                                <h5 class="lg:text-[7px] text-[10px] font-[700]">${el.name}</h5>
                                <p class="lg:text-[5px]/1.5 text-[7px]/2  font-[400] ">Lorem ipsum dolor
                                    sit
                                    ame Lorem ipsum
                                    dolor
                                    sit
                                    amet
                                    consectetur adipisicing elit.</p>
                            </div>
                            <P class="lg:text-[5px] text-[7px] font-[700] relative top-1">
                                prix : ${el.price}$
                            </P>
                    </div>
                    <div class="flex gap-12 lg:gap-5 lg:text-[11px] text-[16px] font-[700] font-[Lemon]">
                        <h2>POKEMON</h2>
                        <h3 class="text-${el.color}-500">XX</h3>
                    </div>
                </div>
            </div>
            <div class="text-white text-[30px] lg:text-[50px]">
                <p>${el.name}</p>
                <h3 class="text-${el.color}-500 font-[700] font-[Lemon]">XX</h3>
                <p>${el.price * el.Quantiter}$</p>
            </div>
            <div class="bg-white h-14 w-25 flex gap-2 justify-center rounded-[5px] items-center">
                <button onclick="decrimenter(${el.id})" id="button_moin" class="bg-red-500 w-5 text-white">-</button>
                <p id="quantiter" class="w-5 text-center border-2 rounded-[5px]">${el.Quantiter}</p>
                <button onclick="incrimenter(${el.id})" id="button_plus" class="bg-green-700 w-5 text-white">+</button>
            </div>

        </div>
        `
    })
}
//function to open the panier
affiche_panie()

const open_panier = document.querySelector('.open_panier')
const acheter_panier = document.querySelector('#acheter_panier')
if (open_panier) {
    open_panier.addEventListener('click', () => {
        acheter_panier.classList.toggle('open_panier')
    })
}

//function to increase the quantity
const quantiter = document.getElementById("quantiter")

function incrimenter(id) {
    const el_incrimente = tous_panier.find(el => el.id === id)
    if (!el_incrimente)
        return
    el_incrimente.Quantiter++
    localStorage.setItem("panier", JSON.stringify(tous_panier))
    affiche_panie()
}

//function to decrease the quantity
function decrimenter(id) {
    const el_decrimente = tous_panier.find(el => el.id === id)
    if (!el_decrimente)
        return
    el_decrimente.Quantiter--
    if (el_decrimente.Quantiter < 1)
        tous_panier = tous_panier.filter((el) => el.id !== id)
    localStorage.setItem("panier", JSON.stringify(tous_panier))
    affiche_panie()
}


//function to clear the panier

function clear_panier() {
    tous_panier = []
    localStorage.setItem("panier", JSON.stringify(tous_panier))
    alert("sumprime")
    affiche_panie()
}

// add to My Deck
function ajoute_My_Deck() {
    tous_My_Deck = JSON.parse(localStorage.getItem("panier"))
    localStorage.setItem("My_Deck", JSON.stringify(tous_My_Deck))
    alert("acheter")

}

//function affiche My Deck
function affiche_My_Deck() {
    const section_My_Deck = document.getElementById("section_My_Deck")
    if (!section_My_Deck)
        return
    section_My_Deck.innerHTML = ''
    tous_My_Deck.forEach((el) => {

        section_My_Deck.innerHTML += `
       
            <div
                class=" bg-[url(${el.image})] bg-cover bg-center lg:w-[140px] w-[204px] lg:h-[197px] h-[287px] flex flex-col justify-end items-center">
                <div
                    class=" carte text-white relative flex flex-col justify-center items-center bottom-0.5  w-full h-[114px] lg:h-[78px] rounded-[10px]">
                    <div class="flex justify-center items-center lg:gap-10 gap-12 relative  lg:right-2 ">
                        <h2 class="anime rotate-[90deg] lg:text-[11px] text-[16px] absolute right-31.5 lg:right-19 ">
                            ANIME</h3>
                            <div class="flex flex-col font-[Poppins] w-[80px] lg:w-[55px] relative lg:left-9 left-6 ">
                                <h5 class="lg:text-[7px] text-[10px] font-[700]">${el.name}</h5>
                                <p class="lg:text-[5px]/1.5 text-[7px]/2  font-[400] ">Lorem ipsum dolor
                                    sit
                                    ame Lorem ipsum
                                    dolor
                                    sit
                                    amet
                                    consectetur adipisicing elit.</p>
                            </div>
                            <P class="lg:text-[5px] text-[7px] font-[700] relative top-1">
                                prix : ${el.price}$
                            </P>
                    </div>
                    <div class="flex gap-12 lg:gap-5 lg:text-[11px] text-[16px] font-[700] font-[Lemon]">
                        <h2>POKEMON</h2>
                        <h3 class="text-${el.color}-500">XX</h3>
                    </div>
                </div>
            </div>
        `
    })
}
affiche_My_Deck()


//affichage des cartes sur le play
function afiche_carte_paly() {
    const Draw_card = document.getElementById("Draw_card")
    if (!Draw_card)
        return
    Draw_card.innerHTML = ''
    tous_My_Deck.forEach((el) => {
        Draw_card.innerHTML += `
        <div
              draggable="true"  class="item_drag cursor-grab bg-[url(${el.image})] bg-cover bg-center lg:w-[140px] w-[42px] lg:h-[197px] h-[60px] flex-shrink-0 flex flex-col justify-end items-center">
                <div
                    class=" carte text-white relative flex flex-col justify-center items-center bottom-[0.2px]  w-full h-[24px] lg:h-[78px] rounded-[3px] lg:rounded-[10px]">
                    <div class="flex justify-center items-center lg:gap-10 gap-7 relative right-2 lg:right-2 ">
                        <h2 class="anime rotate-[90deg] lg:text-[11px] text-[4px] absolute right-7.5 lg:right-19 ">
                            ANIME</h3>
                            <div class="flex flex-col font-[Poppins] w-[25px] lg:w-[55px] relative lg:left-9 left-6 ">
                                <h5 class="lg:text-[7px] text-[3px] font-[700]">${el.name}</h5>
                                <p class="lg:text-[5px]/1.5 text-[2px]/0.5  font-[400] ">Lorem ipsum dolor
                                    sit
                                    ame Lorem ipsum
                                    dolor
                                    sit
                                    amet
                                    consectetur adipisicing elit.</p>
                            </div>
                            <P class="lg:text-[5px] text-[2px] font-[700] relative top-1">
                                prix : ${el.price}$
                            </P>
                    </div>
                    <div class="flex gap-2 lg:gap-5 lg:text-[11px] text-[4px] font-[700] font-[Lemon]">
                        <h2>POKEMON</h2>
                        <h3 class="text-${el.color}-500">XX</h3>
                    </div>
                </div>
            </div>
        `
    })


}
afiche_carte_paly()


//fonction drag and drop to hand
let m_drag = null
const main_drop = document.querySelectorAll(".main_drop")
function hand_drag_drop() {
    const item_drag = document.querySelectorAll('.item_drag')
    if (!item_drag)
        return
    item_drag.forEach((item_drag) => {
        item_drag.addEventListener('dragstart', () => {
            m_drag = item_drag
            item_drag.style.opacity = '0.5'
        })
        item_drag.addEventListener('dragend', () => {
            m_drag = null
            item_drag.style.opacity = '1'
        })
    })
    main_drop.forEach(main_drop => {
        main_drop.addEventListener('dragover', (e) => {
            e.preventDefault()
            main_drop.style.background = '#d090b1ff'
            main_drop.style.border = "dashed 4px red"

        })
        main_drop.addEventListener('dragleave', () => {
            main_drop.style.background = '#e57373ff'
            main_drop.style.border = "dashed 2px white"

        })
        main_drop.addEventListener("drop", () => {
            main_drop.append(m_drag)
            m_drag.classList.remove("item_drag")
            m_drag.classList.add("item_arena_drag")
            m_drag = null
            arena_drag_drop()

        })
    })
    // let item_arena_drag = document.querySelectorAll('.item_arena_drag')
    // console.log(item_arena_drag);

}
hand_drag_drop()

//fonction drag and drop to Arena
let ar_drag = null
let arena_drop = document.querySelectorAll(".arena_drop")
function arena_drag_drop() {
    let item_arena_drag = document.querySelectorAll('.item_arena_drag')
    if (!item_arena_drag)
        return
    item_arena_drag.forEach(el => {
        el.addEventListener('dragstart', () => {
            ar_drag = el
        })
        el.addEventListener('dragend', () => {
            ar_drag = null
        })
    })
    arena_drop.forEach(el => {
        el.addEventListener("dragover", (e) => {
                if (ar_drag.classList.contains("item_arena_drag")) 
                e.preventDefault()
                el.classList.add("bg-red-500")
            })
            el.addEventListener("dragleave", () => {
                el.classList.remove("bg-red-500")
            })
            el.addEventListener("drop", () => {
                if (ar_drag.classList.contains("item_arena_drag")) {
                    el.append(ar_drag);
                }
                // if (ar_drag.classList.contains("item_arena_drag")) {
                //     if (condition) {
                //         el.append(ar_drag);
                //     }
                // }
            })
        })

}
arena_drag_drop()
