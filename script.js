const menuData = [
    {
        id: 1,
        name: "Lumpia",
        category: "appetizer",
        categoryName: "Appetizers",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-xjnQM38/0/O/DSC03821.jpg",
        desc: "Crispy Golden Spring Rolls stuffed with minced seasoned pork, diced carrots, garlic, and special dipping sauce.",
        ingredients: "Pork mince, wrapped pastry, garlic, carrot, onion, served with house sweet chili sauce."
    },
    {
        id: 2,
        name: "Chicken Sotanghon",
        category: "soup",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-54466Xp/0/L/DSC03894-L.jpg",
        desc: "Soothing glass noodle soup with shredded chicken, toasted garlic chips, annatto oil, and chopped scallions.",
        ingredients: "Cellophane glass noodles, shredded chicken broth, annatto infusion, wood ear fungus, roasted garlic."
    },
    {
        id: 3,
        name: "Beef Mechado",
        category: "mains",
        categoryName: "Mains",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-XK9bJQc/0/L/DSC04397-L.jpg",
        desc: "Slow-braised beef chuck stewed in tomato gravy with calamansi juice, soy sauce, and sweet bell peppers.",
        ingredients: "Beef chuck, tomato puree, citrus juice, dark soy sauce, potato wedges, red & green peppers."
    },
    {
        id: 4,
        name: "Leche Flan",
        category: "dessert",
        categoryName: "Desserts",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-sL9jHbr/0/L/DSC04429-L.jpg",
        desc: "Silky smooth, rich caramel custard made with rich egg yolks and topped with liquid amber caramel.",
        ingredients: "Egg yolks, condensed milk, evaporated milk, caramelized cane sugar syrup."
    },
    {
        id: 5,
        name: "Chicharon",
        category: "appetizer",
        categoryName: "Appetizers",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-WJXWj7W/0/L/DSC04168-L.jpg",
        desc: "Deep-fried crackling pork rinds served with spiced coconut vinegar infused with garlic and labuyo chillies.",
        ingredients: "Seasoned pork skin, coconut palm vinegar, crushed garlic, native red chili peppers."
    },
    {
        id: 6,
        name: "Lechon",
        category: "mains",
        categoryName: "Mains",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-6BvpJLv/0/L/DSC05074-L.jpg",
        desc: "Legendary Filipino roasted pig with crispy crackling golden skin and tender herb-infused pork.",
        ingredients: "Whole pit-roasted pork, lemongrass, tamarind leaves, garlic, scallions, liver dip."
    },
    {
        id: 7,
        name: "Kare Kare",
        category: "mains",
        categoryName: "Mains",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-qSwZPsD/0/L/DSC04457-L.jpg",
        desc: "Savory peanut stew with tender ox tripe, beef shank, eggplants, and banana blossom served with spicy bagoong.",
        ingredients: "Beef shank, ox tripe, ground toasted peanuts, annatto oil, eggplant, string beans, sautéed shrimp paste."
    },
    {
        id: 8,
        name: "Lomi",
        category: "soup",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-D78VPP9/0/L/Lomi-L.jpg",
        desc: "Thick egg noodle soup enriched with sliced pork, liver, crunchy chicharon, and egg drop broth.",
        ingredients: "Thick egg noodles, pork belly slices, pork liver, egg broth, toasted garlic, crispy chicharon bits."
    },
    {
        id: 9,
        name: "Pancit Bihon",
        category: "soup",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-sm7Svkg/0/L/DSC04650-L.jpg",
        desc: "Stir-fried thin rice vermicelli noodles loaded with shredded vegetables, chicken, and fresh calamansi lime.",
        ingredients: "Rice vermicelli, chicken strips, cabbage, carrots, snap peas, soy sauce, calamansi juice."
    },
    {
        id: 10,
        name: "Crispy Pata",
        category: "mains",
        categoryName: "Mains",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-3HbvLLt/0/L/DSC05228-L.jpg",
        desc: "Deep-fried pork knuckle cooked until skin is crisp and crackling, while meat remains juicy.",
        ingredients: "Simmered and deep-fried pork leg, garlic, soy vinegar dip, peppercorns, bay leaves."
    },
    {
        id: 11,
        name: "Sinigang",
        category: "soup",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-gT4qZcZ/0/L/DSC05196-L.jpg",
        desc: "Iconic tangy tamarind broth loaded with pork ribs, water spinach (kangkong), daikon radish, and chili.",
        ingredients: "Pork belly/ribs, fresh tamarind sour broth, kangkong, daikon radish, tomatoes, long green chili."
    },
    {
        id: 12,
        name: "Kaldereta",
        category: "mains",
        categoryName: "Mains",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-tRbVhVr/0/L/DSC05360-L.jpg",
        desc: "Hearty stewed beef in rich tomato sauce with liver spread, bell peppers, potatoes, and melted cheese.",
        ingredients: "Prime beef stew meat, tomato sauce, liver spread, melted cheese, green olives, bell peppers."
    },
    {
        id: 13,
        name: "Adobo",
        category: "mains",
        categoryName: "Mains",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-gjFFG4s/0/L/DSC05390-L.jpg",
        desc: "The quintessential Filipino classic dish braised slow in soy sauce, cane vinegar, garlic, and cracked peppercorns.",
        ingredients: "Pork belly or chicken, native cane vinegar, dark soy sauce, head of garlic, bay leaves, peppercorns."
    },
    {
        id: 14,
        name: "Bulalo",
        category: "soup",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-bwmqVgB/0/L/Fotor1227224648-L.jpg",
        desc: "Rich beef shank and marrow bone soup slow-simmered with sweet corn on the cob and cabbage.",
        ingredients: "Beef shank with bone marrow, sweet corn on cob, Napa cabbage, peppercorns, onion broth."
    }
];

function renderMenu(items) {
    const container = document.getElementById('menu-grid');
    container.innerHTML = '';

    items.forEach(dish => {
        const card = document.createElement('div');
        card.className = "glass-card rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/60 transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col";
        card.onclick = () => openDishModal(dish);

        card.innerHTML = `
            <div class="relative h-48 overflow-hidden bg-black">
                <img src="${dish.image}" 
                     alt="${dish.name}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                     onerror="this.src='https://placehold.co/600x400/1a1008/d4af37?text=${encodeURIComponent(dish.name)}'">
                <div class="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                <span class="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md text-gold-400 text-[10px] uppercase font-bold tracking-wider rounded-md border border-gold-500/30">
                    ${dish.categoryName}
                </span>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-serif font-bold text-white group-hover:text-gold-400 transition">${dish.name}</h3>
                    <p class="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">${dish.desc}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                    <span class="text-xs text-gold-500 font-medium flex items-center gap-1">
                        <i class="fa-solid fa-circle-info"></i> Details & Ingredients
                    </span>
                    <span class="w-7 h-7 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition">
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterMenu(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('bg-gold-500', 'text-black', 'shadow-md');
            btn.classList.remove('glass-card', 'text-gray-300');
        } else {
            btn.classList.remove('bg-gold-500', 'text-black', 'shadow-md');
            btn.classList.add('glass-card', 'text-gray-300');
        }
    });

    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

function openDishModal(dish) {
    document.getElementById('modal-dish-img').src = dish.image;
    document.getElementById('modal-dish-title').innerText = dish.name;
    document.getElementById('modal-dish-desc').innerText = dish.desc;
    document.getElementById('modal-dish-cat').innerText = dish.categoryName;
    document.getElementById('modal-dish-ingredients').innerText = dish.ingredients;
    document.getElementById('dishModal').classList.remove('hidden');
}

function closeDishModal() {
    document.getElementById('dishModal').classList.add('hidden');
}

function openImageModal(imgUrl, caption) {
    document.getElementById('full-modal-img').src = imgUrl;
    document.getElementById('full-modal-caption').innerText = caption;
    document.getElementById('imageModal').classList.remove('hidden');
}

function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

function openReservationModal() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function handleReservation(e) {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    document.getElementById('reservationForm').reset();
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4500);
}

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

window.onload = function() {
    renderMenu(menuData);
    document.getElementById('year').innerText = new Date().getFullYear();
    
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('res-date');
    if (dateInput) dateInput.min = today;
};