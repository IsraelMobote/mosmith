const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');

menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('show');
    menuItems.classList.toggle('show');
})

const slideText = document.querySelector('.slidetext');
const sentences = ['We dey for you','We go run am asap','We are one text away'];
let currentSentence = 0;

function slide() {
    slideText.textContent = sentences[currentSentence];
    currentSentence = (currentSentence + 1) % sentences.length;
}

setInterval(slide, 7000)