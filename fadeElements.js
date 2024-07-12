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
;
