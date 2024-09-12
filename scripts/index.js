const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
menuBars.addEventListener('click', function() {
    menuItems.classList.toggle('show');
})