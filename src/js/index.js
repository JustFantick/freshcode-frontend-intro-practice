import '../scss/main.scss';

document.addEventListener('DOMContentLoaded', function () {
    initMenuBurger();
    initAnchors();
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
        } else if (e.target.closest('li, button')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('nav--active')) {
            closeMenu();
        }
    });
}

function initAnchors() {
    const anchorElements = document.querySelectorAll('button[data-anchor], a[data-anchor]');

    anchorElements.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSelector = this.getAttribute('data-anchor');
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
}
