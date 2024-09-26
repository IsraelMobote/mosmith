const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
const gradientCard = document.querySelector('.gradient');

menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('show');
    menuItems.classList.toggle('show');
    gradientCard.classList.toggle('removeMargin');
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


const installationCard = document.querySelector('.installationserv');
let elementHeight = installationCard.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = installationCard.getBoundingClientRect().top + scrollY;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
    console.log('ddd')
  }
  
  return false;
}

let complete = false;

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView() && complete===false) {
      installationCard.classList.add('animated')
      console.log('ss')
      complete=true
  }
}