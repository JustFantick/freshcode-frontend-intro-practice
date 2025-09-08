import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', function () {
    initMenuBurger();
});

function initMenuBurger() {
    const menuBurger = document.getElementById('menu-burger');
    const nav = document.getElementById('nav');

    function openMenu() {
        nav.classList.add('nav--active');
        menuBurger.classList.add('menu-burger--active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        nav.classList.remove('nav--active');
        menuBurger.classList.remove('menu-burger--active');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        if (nav.classList.contains('nav--active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuBurger.addEventListener('click', toggleMenu);

    nav.addEventListener('click', function (e) {
        if (e.target === nav) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('nav--active')) {
            closeMenu();
        }
    });
}
