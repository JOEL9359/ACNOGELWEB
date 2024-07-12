document.addEventListener('DOMContentLoaded', function() {


    // Desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Aparición gradual de elementos
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    window.addEventListener('load', checkFade);

    // Efecto acordeón para FAQ
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const title = item.querySelector('h3');
        const content = item.querySelector('p');

        title.addEventListener('click', () => {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('p').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Animación del título principal
    const mainTitle = document.getElementById('libera');
    mainTitle.style.opacity = '0';
    mainTitle.style.transform = 'translateY(50px)';
    setTimeout(() => {
        mainTitle.style.transition = 'opacity 1s, transform 1s';
        mainTitle.style.opacity = '1';
        mainTitle.style.transform = 'translateY(0)';
    }, 500);

    // Animación para los elementos de la lista de ingredientes
    const ingredientes = document.querySelectorAll('#ingredientes li');
    ingredientes.forEach((ingrediente, index) => {
        ingrediente.style.opacity = '0';
        ingrediente.style.transform = 'translateX(-50px)';
        setTimeout(() => {
            ingrediente.style.transition = 'opacity 0.5s, transform 0.5s';
            ingrediente.style.opacity = '1';
            ingrediente.style.transform = 'translateX(0)';
        }, 200 * (index + 1));
    });

    // Animación para el formulario de contacto
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    formInputs.forEach((input, index) => {
        input.style.opacity = '0';
        input.style.transform = 'translateY(20px)';
        setTimeout(() => {
            input.style.transition = 'opacity 0.5s, transform 0.5s';
            input.style.opacity = '1';
            input.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });

    // Animación para el botón de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-contact');
    whatsappButton.addEventListener('mouseenter', () => {
        whatsappButton.style.animation = 'pulse 0.5s infinite';
    });
    whatsappButton.addEventListener('mouseleave', () => {
        whatsappButton.style.animation = 'none';
    });

    // ... (mantén el código anterior para el menú hamburguesa, desplazamiento suave y acordeón)
});