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

const space = document.querySelector('#space');
const space1 = document.querySelector('#space1');
const space2 = document.querySelector('#space2');



const buy = document.querySelector('#buy');
const sell = document.querySelector('#sell');

buy.addEventListener('click', choseBuy );
sell.addEventListener('click', choseSell);

choseBuy();

function choseBuy() {
    buy.classList.add('color');
    sell.classList.remove('color');
    space.classList.add('color');
    space1.classList.add('left');
    space1.classList.remove('right');
    space2.classList.remove('color');
}

function choseSell() {
    sell.classList.add('color');
    buy.classList.remove('color');
    space.classList.remove('color');
    space1.classList.remove('left');
    space1.classList.add('right');
    space2.classList.add('color');
}


