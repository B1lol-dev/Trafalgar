const nav_menu = document.getElementById('nav_menu');
const nav_close = document.getElementById('nav_close');
const nav_collection = document.getElementById('nav_collection');

nav_menu.addEventListener('click', () => {
    nav_collection.classList.toggle('nav_collection_visible');
});

nav_close.addEventListener('click', () => {
    nav_collection.classList.remove('nav_collection_visible');
});


// Preloader

const preloader_bg = document.getElementById('preloader_bg');

window.addEventListener('load', () => {
    preloader_bg.remove();
    document.body.style.overflow='unset';
})