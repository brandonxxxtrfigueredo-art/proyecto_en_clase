document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los botones de navegación
    const cartButton = document.querySelector('button[aria-label="Carrito"]');
    const searchButton = document.querySelector('button[aria-label="Buscar"]');
    const accountButton = document.querySelector('button[aria-label="Cuenta"]');

    let cartCount = 0;

    // 1. Simular agregar al carrito al hacer clic en un producto
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            const productName = item.querySelector('.product-name').innerText;
            cartCount++;
            cartButton.innerText = `🛒 (${cartCount})`;
            alert(`¡Excelente elección! Agregaste "${productName}" al carrito de compras.`);
        });
    });

    // 2. Interacciones básicas para búsqueda y cuenta
    if(searchButton) {
        searchButton.addEventListener('click', () => {
            prompt("¿Qué artículo o categoría estás buscando?");
        });
    }

    if(accountButton) {
        accountButton.addEventListener('click', () => {
            alert("Próximamente: Sistema de inicio de sesión para clientes.");
        });
    }

    // 3. Desplazamiento suave (Smooth Scroll) para los botones que llevan a secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignorar enlaces vacíos
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Funcionalidad del formulario del Boletín (Newsletter)
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            const emailInput = newsletterForm.querySelector('input[type="email"]').value;
            alert(`¡Suscripción exitosa! Te enviaremos accesos anticipados y rutinas a: ${emailInput}`);
            newsletterForm.reset(); // Limpiar el campo
        });
    }
});
