document.addEventListener('DOMContentLoaded', () => {
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(link => {
        if (link.getAttribute('href') === current) {
            link.classList.add('activo');
        }
    });

    // Menú Móvil
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('open');
        });

        // Cerrar menú al hacer click en un enlace
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('open');
            });
        });
    }
});
