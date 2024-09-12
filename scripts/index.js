const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');

menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('show');
    menuItems.classList.toggle('show');
})