var swiper = new Swiper(".mySwiper", {});

// Menu toggle
const menuHamburger = document.querySelector(".open_menu");
const navLinks = document.querySelector(".open");

if (menuHamburger) {
    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
    });
}

// Rarter toggle
const openRarter = document.querySelector(".open_rarter");
const Rarter = document.querySelector(".rarter");

if (openRarter) {
    openRarter.addEventListener('click', () => {
        Rarter.classList.toggle('open_rarter');
    });
}

// Product data
const product = [
    { id: 1, name: 'poki', price: 20, image: 'image/carte-6.png', color: 'orange' },
    { id: 2, name: 'polo', price: 10, image: 'image/carte-1.png', color: 'purple' },
    { id: 3, name: 'kiki', price: 15, image: 'image/carte-5.png', color: 'green' },
    { id: 4, name: 'lolo', price: 20, image: 'image/carte-2.png', color: 'orange' },
    { id: 5, name: 'ninii', price: 20, image: 'image/carte-3.png', color: 'yellow' },
    { id: 6, name: 'nayno', price: 20, image: 'image/carte-4.png', color: 'blue' },
    { id: 7, name: 'lopi', price: 20, image: 'image/carte-10.png', color: 'green' },
    { id: 8, name: 'mio', price: 20, image: 'image/carte-11.png', color: 'orange' },
    { id: 9, name: 'hola', price: 20, image: 'image/carte-12.png', color: 'orange' },
    { id: 10, name: 'gigo', price: 18, image: 'image/carte-9.png', color: 'yellow' },
    { id: 11, name: 'poha', price: 50, image: 'image/carte-8.png', color: 'blue' },
    { id: 12, name: 'fiane', price: 2, image: 'image/carte-7.png', color: 'orange' }
];

// Filter categories
const barre_filtrage = [
    { name: 'Communes', color: 'green' },
    { name: 'Rares', color: 'yellow' },
    { name: 'Legendar', color: 'orange' },
    { name: 'Mythic', color: 'blue' },
    { name: 'Epic', color: 'purple' }
];

// Create filter buttons
const buttons_filtrage = document.querySelector('#filtrage');

if (buttons_filtrage) {
    barre_filtrage.forEach((el) => {
        buttons_filtrage.innerHTML += `
            <li id="btn_${el.color}" class="bg-${el.color}-500 text-black w-35 flex justify-center rounded-tl-[10px] rounded-br-[10px] cursor-pointer">
                ${el.name}
            </li>
        `;
    });

    // Add event listeners to filter buttons
    barre_filtrage.forEach((el) => {
        const color_btn = document.getElementById(`btn_${el.color}`);
        
        if (color_btn) {
            color_btn.addEventListener('click', () => {
                afiche_carte(el.color);
            });
        }
    });
}

// Initialize storage
let tous_favoris = JSON.parse(localStorage.getItem('favoris')) || [];
let tous_panier = JSON.parse(localStorage.getItem('panier')) || [];

//function Add to localstorage favorite 
function ajoute_favoris(id) {
    const el_favoris = product.find(el => el.id === id);
    if (!el_favoris) return;

    const isExist = tous_favoris.some(element => element.id === id);

    if (!isExist) {
        tous_favoris.push(el_favoris);
        localStorage.setItem("favoris", JSON.stringify(tous_favoris));
        alert(`${el_favoris.name} ajouté aux favoris!`);
        affiche_favoris();
    } else {
        alert(`${el_favoris.name} est déjà dans les favoris!`);
    }
}

// Add to cart function
function ajoute_panier(id) {
    const el_panier = product.find(el => el.id === id);
    if (!el_panier) return;

    const existingItem = panier.find(element => element.id === id);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        panier.push({ ...el_panier, quantity: 1 });
    }
    
    localStorage.setItem("panier", JSON.stringify(panier));
    alert(`${el_panier.name} ajouté au panier!`);
}

// Display cards function
const carte_market = document.getElementById('cartes_market');

function afiche_carte(filterColor) {
    if (!carte_market) return;
    
    carte_market.innerHTML = '';
    const color = filterColor === undefined ? 'all' : filterColor;
    const filter_product = product.filter(el => el.color === color || color === 'all');
    
    filter_product.forEach((el) => {
        carte_market.innerHTML += `
            <div class="carte_market w-65 h-108 lg:w-90 lg:h-150 rounded-[15px] flex flex-col justify-center items-center gap-5">
                <div class="bg-[url(${el.image})] bg-cover bg-center lg:w-80 w-60 lg:h-112 h-85 flex flex-col justify-end items-center">
                    <div class="carte text-white relative flex flex-col justify-center items-center bottom-0.5 w-full h-33 lg:h-44 rounded-[10px]">
                        <div class="flex justify-center items-center lg:gap-6 gap-6 relative left-2.5">
                            <h2 class="anime rotate-[90deg] lg:text-[24px] text-[18px] absolute lg:right-44 right-35">ANIME</h2>
                            <div class="flex flex-col font-[Poppins] gap-1 w-25 lg:w-35 relative lg:left-6 left-2 lg:gap-1">
                                <h5 class="lg:text-[15px] text-[12px] font-[700]">${el.name}</h5>
                                <p class="lg:text-[12px]/3 text-[9px]/2 font-[400]">Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <p class="lg:text-[11px] text-[9px] font-[700] relative top-1">prix : ${el.price}$</p>
                        </div>
                        <div class="flex gap-8 lg:gap-13 lg:text-[24px] text-[20px] font-[700] font-[Lemon]">
                            <h2>POKEMON</h2>
                            <h3 class="text-${el.color}-500">XX</h3>
                        </div>
                    </div>
                </div>
                <div class="flex gap-12">
                    <button onclick="ajoute_panier(${el.id})" class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#2F8E44] cursor-pointer">
                        Ajouter au panier
                    </button>
                    <button onclick="ajoute_favoris(${el.id})" class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#936C57] cursor-pointer">
                        Ajouter aux favoris
                    </button>
                </div>
            </div>
        `;
    });
}

// Display favorites function
function affiche_favoris() {
    const Section_favoris = document.getElementById('section_favoris');
    if (!Section_favoris) return;
    
    // ✅ Clear ONCE before the loop
    Section_favoris.innerHTML = '';
    
    if (tous_favoris.length === 0) {
        Section_favoris.innerHTML = '<p class="text-white text-center">Aucun favori pour le moment</p>';
        return;
    }
    
    tous_favoris.forEach((el) => {
        Section_favoris.innerHTML += `
            <div class="carte_market w-65 h-108 lg:w-90 lg:h-150 rounded-[15px] flex flex-col justify-center items-center gap-5">
                <div class="bg-[url(${el.image})] bg-cover bg-center lg:w-80 w-60 lg:h-112 h-85 flex flex-col justify-end items-center">
                    <div class="carte text-white relative flex flex-col justify-center items-center bottom-0.5 w-full h-33 lg:h-44 rounded-[10px]">
                        <div class="flex justify-center items-center lg:gap-6 gap-6 relative left-2.5">
                            <h2 class="anime rotate-[90deg] lg:text-[24px] text-[18px] absolute lg:right-44 right-35">ANIME</h2>
                            <div class="flex flex-col font-[Poppins] gap-1 w-25 lg:w-35 relative lg:left-6 left-2 lg:gap-1">
                                <h5 class="lg:text-[15px] text-[12px] font-[700]">${el.name}</h5>
                                <p class="lg:text-[12px]/3 text-[9px]/2 font-[400]">Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <p class="lg:text-[11px] text-[9px] font-[700] relative top-1">prix : ${el.price}$</p>
                        </div>
                        <div class="flex gap-8 lg:gap-13 lg:text-[24px] text-[20px] font-[700] font-[Lemon]">
                            <h2>POKEMON</h2>
                            <h3 class="text-${el.color}-500">XX</h3>
                        </div>
                    </div>
                </div>
                <div class="flex gap-12">
                    <button onclick="ajoute_panier(${el.id})" class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-[#2F8E44] cursor-pointer">
                        Ajouter au panier
                    </button>
                    <button onclick="supprimer_favoris(${el.id})" class="w-18 h-10 lg:w-22 lg:h-13 rounded-[4px] text-[12px] lg:text-[15px] text-white bg-red-600 cursor-pointer">
                        Supprimer
                    </button>
                </div>
            </div>
        `;
    });
}

// Remove from favorites function
function supprimer_favoris(id) {
    tous_favoris = tous_favoris.filter(el => el.id !== id);
    localStorage.setItem("favoris", JSON.stringify(tous_favoris));
    affiche_favoris();
}

// Initialize display
afiche_carte();
if (document.getElementById('section_favoris')) {
    affiche_favoris();
}

