// Menu Data
const menuData = {
    appetizers: [
        {
            name: "Truffle Arancini",
            description: "Crispy risotto balls infused with black truffle, served with saffron aioli and microgreens",
            price: 24,
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Seared Foie Gras",
            description: "Pan-seared foie gras with cherry gastrique, brioche toast, and aged balsamic reduction",
            price: 36,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Oyster Trio",
            description: "Fresh oysters from three regions, served with champagne mignonette and cocktail sauce",
            price: 28,
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    mains: [
        {
            name: "Wagyu Beef Tenderloin",
            description: "8oz Japanese A5 Wagyu with roasted bone marrow, purple potatoes, and red wine jus",
            price: 95,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Lobster Thermidor",
            description: "Whole Maine lobster with cognac cream sauce, gruyere cheese, and herb butter",
            price: 68,
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Duck Confit",
            description: "Slow-cooked duck leg with orange glaze, wild rice pilaf, and seasonal vegetables",
            price: 42,
            image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Sea Bass En Croûte",
            description: "Chilean sea bass wrapped in puff pastry with spinach mousse and lemon butter sauce",
            price: 54,
            image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    desserts: [
        {
            name: "Chocolate Soufflé",
            description: "Warm dark chocolate soufflé with Grand Marnier sauce and vanilla bean ice cream",
            price: 18,
            image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Crème Brûlée Trio",
            description: "Classic vanilla, lavender honey, and espresso crème brûlée with fresh berries",
            price: 16,
            image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Tiramisu Moderne",
            description: "Deconstructed tiramisu with mascarpone sphere, coffee soil, and amaretto tuile",
            price: 20,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    beverages: [
        {
            name: "Dom Pérignon 2012",
            description: "Vintage champagne with notes of citrus, white flowers, and brioche",
            price: 45,
            image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Noir Signature Cocktail",
            description: "House special with aged whiskey, black truffle honey, and smoked salt rim",
            price: 22,
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Artisan Coffee Selection",
            description: "Single-origin beans from our master roaster, served with house-made biscotti",
            price: 8,
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Sommelier Wine Pairing",
            description: "Curated wine selection paired with your meal, featuring rare vintages",
            price: 65,
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ]
};

function createMenuItem(item, category) {
    return `
        <div class="menu-item" data-category="${category}">
            <div class="dish-image" style="background-image: url('${item.image}')"></div>
            <h3 class="dish-name">${item.name}</h3>
            <p class="dish-description">${item.description}</p>
            <div class="dish-price"><span class="price-currency">$</span>${item.price}</div>
        </div>
    `;
}

function populateMenu() {
    const menuGrid = document.getElementById('menuGrid');
    let menuHTML = '';
    
    // Add all menu items
    Object.keys(menuData).forEach(category => {
        menuData[category].forEach(item => {
            menuHTML += createMenuItem(item, category);
        });
    });
    
    menuGrid.innerHTML = menuHTML;
}

function showMenu() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('menuPage').style.display = 'block';

    // Populate menu if not already done
    if (document.getElementById('menuGrid').children.length === 0) {
        populateMenu();
    }

    setTimeout(() => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = `fadeInUp 0.6s ease-out forwards`;
            }, index * 100);
        });
    }, 100);
}

function showLanding() {
    document.getElementById('menuPage').style.display = 'none';
    document.getElementById('landingPage').style.display = 'flex';
}

function filterMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Clear the grid
    menuGrid.innerHTML = '';

    // Get filtered items
    let filteredItems = [];
    if (category === 'all') {
        // Add all items in order: appetizers, mains, desserts, beverages
        Object.keys(menuData).forEach(cat => {
            menuData[cat].forEach(item => {
                filteredItems.push({ item, category: cat });
            });
        });
    } else {
        // Add only items from selected category
        if (menuData[category]) {
            menuData[category].forEach(item => {
                filteredItems.push({ item, category });
            });
        }
    }

    // Create and add filtered items with staggered animation
    filteredItems.forEach(({ item, category: cat }, index) => {
        const menuItemHTML = createMenuItem(item, cat);
        menuGrid.insertAdjacentHTML('beforeend', menuItemHTML);
        
        // Get the newly added item
        const newItem = menuGrid.lastElementChild;
        
        // Set initial state for animation
        newItem.style.opacity = '0';
        newItem.style.transform = 'translateY(30px)';
        
        // Trigger animation with delay
        setTimeout(() => {
            newItem.style.transition = 'all 0.4s ease-out';
            newItem.style.opacity = '1';
            newItem.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const landingBg = document.querySelector('.landing-page');

        if (landingBg) {
            landingBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        // Removed menu background parallax to fix scroll issues
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observer will be applied to menu items when they are created

    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.addEventListener('animationiteration', () => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    });

    // Event delegation for menu items and filter buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 215, 0, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';

            e.target.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });

    document.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('menu-item')) {
            e.target.style.zIndex = '10';
        }
    }, true);

    document.addEventListener('mouseleave', (e) => {
        if (e.target.classList.contains('menu-item')) {
            e.target.style.zIndex = '1';
        }
    }, true);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .filter-btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuGrid.style.transition = 'all 0.3s ease';
    }
});

let ticking = false;
function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const menuNav = document.querySelector('.menu-nav');

    if (menuNav) {
        if (scrolled > 100) {
            menuNav.style.background = 'rgba(0, 0, 0, 0.95)';
            menuNav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            menuNav.style.background = 'rgba(0, 0, 0, 0.9)';
            menuNav.style.boxShadow = 'none';
        }
    }

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menuPage = document.getElementById('menuPage');
        if (menuPage.style.display === 'block') {
            showLanding();
        }
    }
});
