const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');

menuBars.addEventListener('click', function () {
  menuBars.classList.toggle('show');
  menuItems.classList.toggle('show');
})

const slider = document.querySelectorAll('.Slider img');

slider.forEach(element => {
    element.classList.add('animate')
  });