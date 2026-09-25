// Dishes Array featuring all 14 requested Filipino Dishes with exact URLs
const menuData = [
    {
        id: 1,
        name: "Lumpia",
        category: "starters",
        categoryName: "Starters",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-xjnQM38/0/O/DSC03821.jpg",
        desc: "Crispy fried spring rolls stuffed with seasoned pork, carrots, garlic, and served with sweet chili sauce.",
        ingredients: "Minced pork, carrots, garlic, wrapped in thin lumpia wrapper and fried golden crisp."
    },
    {
        id: 2,
        name: "Chicken Sotanghon",
        category: "soups-noodles",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-54466Xp/0/L/DSC03894-L.jpg",
        desc: "Comforting glass noodle soup with shredded chicken broth, annatto tint, garlic chips, and scallions.",
        ingredients: "Cellophane glass noodles, shredded chicken, annatto oil, wood ear mushrooms, toasted garlic."
    },
    {
        id: 3,
        name: "Beef Mechado",
        category: "mains",
        categoryName: "Main Courses",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-XK9bJQc/0/L/DSC04397-L.jpg",
        desc: "Tender beef chuck braised in rich tomato gravy with citrus calamansi, soy sauce, and sweet peppers.",
        ingredients: "Beef chuck, tomato puree, calamansi juice, dark soy sauce, potato wedges, bell peppers."
    },
    {
        id: 4,
        name: "Leche Flan",
        category: "desserts",
        categoryName: "Desserts",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-sL9jHbr/0/L/DSC04429-L.jpg",
        desc: "Silky smooth custard dessert prepared with rich egg yolks and topped with liquid amber caramel.",
        ingredients: "Egg yolks, condensed milk, evaporated milk, caramelized cane sugar."
    },
    {
        id: 5,
        name: "Chicharon",
        category: "starters",
        categoryName: "Starters",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-WJXWj7W/0/L/DSC04168-L.jpg",
        desc: "Crunchy deep-fried pork skin served with spiced coconut vinegar and crushed garlic.",
        ingredients: "Crispy pork rind, spicy coconut vinegar, crushed garlic, native bird's eye chili."
    },
    {
        id: 6,
        name: "Lechon",
        category: "mains",
        categoryName: "Main Courses",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-6BvpJLv/0/L/DSC05074-L.jpg",
        desc: "Traditional pit-roasted pig with extra crispy crackling skin and tender aromatic herb-stuffed meat.",
        ingredients: "Whole pit-roasted pig, lemongrass, scallions, garlic, tamarind leaves, liver sauce dip."
    },
    {
        id: 7,
        name: "Kare Kare",
        category: "mains",
        categoryName: "Main Courses",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-qSwZPsD/0/L/DSC04457-L.jpg",
        desc: "Savory peanut stew with tender beef shank, ox tripe, eggplant, and banana blossom served with bagoong.",
        ingredients: "Beef shank, ox tripe, roasted peanut paste, annatto oil, eggplant, string beans, bagoong alamang."
    },
    {
        id: 8,
        name: "Lomi",
        category: "soups-noodles",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-D78VPP9/0/L/Lomi-L.jpg",
        desc: "Thick egg noodle soup cooked in rich pork broth with pork slices, chicharon bits, and egg drop.",
        ingredients: "Thick egg noodles, pork liver, pork belly, egg drop broth, garlic chips, chicharon."
    },
    {
        id: 9,
        name: "Pancit Bihon",
        category: "soups-noodles",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-sm7Svkg/0/L/DSC04650-L.jpg",
        desc: "Stir-fried thin rice noodles with tender chicken strips, crisp vegetables, and fresh calamansi.",
        ingredients: "Rice vermicelli noodles, chicken strips, cabbage, carrots, snow peas, citrus calamansi."
    },
    {
        id: 10,
        name: "Crispy Pata",
        category: "mains",
        categoryName: "Main Courses",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-3HbvLLt/0/L/DSC05228-L.jpg",
        desc: "Deep-fried pork knuckle simmered in aromatics and fried until crackling crisp outside and juicy inside.",
        ingredients: "Pork leg knuckle, soy vinegar dipping sauce, peppercorns, garlic, bay leaves."
    },
    {
        id: 11,
        name: "Sinigang",
        category: "soups-noodles",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-gT4qZcZ/0/L/DSC05196-L.jpg",
        desc: "Tangy tamarind broth with tender pork ribs, water spinach (kangkong), radish, and green chili.",
        ingredients: "Pork ribs, tamarind broth, kangkong, daikon radish, tomatoes, long green chili."
    },
    {
        id: 12,
        name: "Kaldereta",
        category: "mains",
        categoryName: "Main Courses",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-tRbVhVr/0/L/DSC05360-L.jpg",
        desc: "Rich beef stew simmered in tomato sauce, liver spread, bell peppers, potatoes, and melted cheese.",
        ingredients: "Beef chunks, tomato sauce, liver spread, cheddar cheese, bell peppers, potatoes, olives."
    },
    {
        id: 13,
        name: "Adobo",
        category: "mains",
        categoryName: "Main Courses",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-gjFFG4s/0/L/DSC05390-L.jpg",
        desc: "Filipino flagship dish braised slow in native cane vinegar, dark soy sauce, crushed garlic, and bay leaves.",
        ingredients: "Pork belly or chicken, soy sauce, cane vinegar, whole garlic heads, peppercorns, bay leaves."
    },
    {
        id: 14,
        name: "Bulalo",
        category: "soups-noodles",
        categoryName: "Soups & Noodles",
        image: "https://brenontheroad.smugmug.com/Filipino-Food/i-bwmqVgB/0/L/Fotor1227224648-L.jpg",
        desc: "Rich broth simmered with beef marrow bone shank, sweet corn on the cob, and cabbage leaves.",
        ingredients: "Beef shank with marrow, corn on the cob, cabbage, peppercorns, scallions."
    }
];

// Render menu grid items
function renderMenu(items) {
    const container = document.getElementById('menu-grid');
    if (!container) return;
    container.innerHTML = items.map(dish => `
        <div onclick="openDishModal(${dish.id})" class="glass-card rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-400/60 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between">
            <div>
                <div class="relative h-48 overflow-hidden bg-black/40">
                    <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" onerror="this.src='https://placehold.co/400x300/1e1e1e/e5a93b?text=${encodeURIComponent(dish.name)}'">
                    <span class="absolute top-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-md text-gold-400 text-[10px] font-bold rounded-full uppercase tracking-wider border border-gold-500/30">
                        ${dish.categoryName}
                    </span>
                </div>
                <div class="p-5">
                    <h3 class="text-xl font-serif font-bold text-white group-hover:text-gold-400 transition">${dish.name}</h3>
                    <p class="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">${dish.desc}</p>
                </div>
            </div>
            <div class="p-5 pt-0 flex items-center justify-between text-xs text-gold-400 font-medium">
                <span>View Details</span>
                <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition"></i>
            </div>
        </div>
    `).join('');
}

// Filter menu by category
function filterMenu(category) {
    const buttons = document.querySelectorAll('#filter-buttons .filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.className = "filter-btn active px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-300 bg-gold-400 text-black shadow-md";
        } else {
            btn.className = "filter-btn px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-300 glass-card text-gray-300 hover:text-gold-400 border-gold-500/20";
        }
    });

    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(d => d.category === category);
        renderMenu(filtered);
    }
}

// Dish Detail Modal
function openDishModal(id) {
    const dish = menuData.find(d => d.id === id);
    if (!dish) return;
    document.getElementById('modal-dish-img').src = dish.image;
    document.getElementById('modal-dish-cat').innerText = dish.categoryName;
    document.getElementById('modal-dish-title').innerText = dish.name;
    document.getElementById('modal-dish-desc').innerText = dish.desc;
    document.getElementById('modal-dish-ingredients').innerText = dish.ingredients;
    
    const modal = document.getElementById('dishModal');
    if (modal) modal.classList.remove('hidden');
}

function closeDishModal() {
    const modal = document.getElementById('dishModal');
    if (modal) modal.classList.add('hidden');
}

// Image Lightbox Modal
function openImageModal(src, caption) {
    document.getElementById('full-modal-img').src = src;
    document.getElementById('full-modal-caption').innerText = caption;
    document.getElementById('imageModal').classList.remove('hidden');
}

function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

// Mobile Drawer Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Top Grand Opening Banner Controls
let isBannerMinimized = false;
function toggleBannerContent() {
    const banner = document.getElementById('opening-banner');
    const icon = document.getElementById('banner-toggle-icon');
    const text = document.getElementById('banner-toggle-text');
    const header = document.getElementById('main-header');

    if (!isBannerMinimized) {
        if (banner) {
            banner.style.maxHeight = '36px';
            banner.style.paddingTop = '4px';
            banner.style.paddingBottom = '4px';
        }
        if (icon) icon.className = "fa-solid fa-chevron-down text-[10px]";
        if (text) text.innerText = "Expand";
        if (header) header.style.top = '36px';
        isBannerMinimized = true;
    } else {
        if (banner) {
            banner.style.maxHeight = '300px';
            banner.style.paddingTop = '10px';
            banner.style.paddingBottom = '10px';
        }
        if (icon) icon.className = "fa-solid fa-chevron-up text-[10px]";
        if (text) text.innerText = "Minimize";
        if (header) header.style.top = window.innerWidth >= 640 ? '60px' : '110px';
        isBannerMinimized = false;
    }
}

function closeBanner() {
    const banner = document.getElementById('opening-banner');
    const header = document.getElementById('main-header');
    if (banner) banner.style.display = 'none';
    if (header) header.style.top = '0px';
}

function openReservationModal() {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleReservation(e) {
    e.preventDefault();
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    }
    e.target.reset();
}

function updateLiveClock() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    
    const desktopClock = document.getElementById("live-header-clock");
    if (desktopClock) desktopClock.innerText = timeString;

    const mobileOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const mobileTimeString = new Intl.DateTimeFormat('en-US', mobileOptions).format(now);
    const mobileClock = document.getElementById("live-header-clock-mobile");
    if (mobileClock) mobileClock.innerText = mobileTimeString;
}

const targetDate = new Date("February 1, 2027 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("cd-days").innerText = String(days).padStart(2, '0');
        document.getElementById("cd-hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("cd-mins").innerText = String(minutes).padStart(2, '0');
        document.getElementById("cd-secs").innerText = String(seconds).padStart(2, '0');
    } else {
        document.getElementById("cd-days").innerText = "00";
        document.getElementById("cd-hours").innerText = "00";
        document.getElementById("cd-mins").innerText = "00";
        document.getElementById("cd-secs").innerText = "00";
    }
}

window.onload = function() {
    renderMenu(menuData);
    document.getElementById('year').innerText = new Date().getFullYear();
    
    // Start Live Manila Clock
    updateLiveClock();
    setInterval(updateLiveClock, 1000);

    // Start Countdown Timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Set minimum date input for reservation
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('res-date');
    if (dateInput) dateInput.min = today;
};