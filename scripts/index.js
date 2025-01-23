const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
const gradientCard = document.querySelector('.gradient');

menuBars.addEventListener('click', function () {
  menuBars.classList.toggle('show');
  menuItems.classList.toggle('show');
})

document.addEventListener('scroll', function () {
  menuItems.classList.add('addSticky');

  if (window.scrollY === 0) {
    menuItems.classList.remove('addSticky');
  }

});

const slideText = document.querySelector('.slidetext');
const sentences = ['We dey for you', 'We go run am asap', 'We are one text away'];
let currentSentence = 0;

function slide() {
  slideText.textContent = sentences[currentSentence];
  currentSentence = (currentSentence + 1) % sentences.length;
}

setInterval(slide, 6000)

const space = document.querySelector('#space');
const space1 = document.querySelector('#space1');
const space2 = document.querySelector('#space2');



const buy = document.querySelector('#buy');
const sell = document.querySelector('#sell');
const parentDivForBuy = document.querySelector('.parentDivForBuy');
const parentDivForSell = document.querySelector('.parentDivForSell');

buy.addEventListener('click', choseBuy);
sell.addEventListener('click', choseSell);

const linkToSell = document.querySelector('.linkToSell');
linkToSell.addEventListener('click', choseSell);

choseBuy();

function choseBuy() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  buy.classList.add('color');
  sell.classList.remove('color');
  space.classList.add('color');
  space1.classList.add('left');
  space1.classList.remove('right');
  space2.classList.remove('color');

  parentDivForBuy.classList.remove('hide');
  parentDivForSell.classList.remove('active');

}

function choseSell() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  sell.classList.add('color');
  buy.classList.remove('color');
  space.classList.remove('color');
  space1.classList.remove('left');
  space1.classList.add('right');
  space2.classList.add('color');

  parentDivForBuy.classList.add('hide');
  parentDivForSell.classList.add('active');

}


const installationCard = document.querySelector('.moveInSection');
const growIn = document.querySelector('.growIn');


// listen for scroll event and call animate function
document.addEventListener('scroll', function () {
  animate();
  show()
}
);

// check if element is in view
function inView(element) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + windowHeight / 3;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

let complete = false;
let completenew = false;
// animate element when it is in view
function animate() {
  // is element in view?
  if (inView(installationCard) && complete === false) {
    installationCard.classList.add('animated')
    complete = true
  }
}

function show() {
  if (inView(growIn) && completenew === false) {
    growIn.classList.add('animateTwo');
    completenew = true;
  }
}



faqs =
  [
    {
      question: "what is the mottto of our business",
      answer: "it is to cool your nights"
    },
    {
      question: "what products do you sell",
      answer: "we sell kitchen appliances, televisions and also generators"
    },
    {
      question: "where is the installation services available to ",
      answer: "to as many locations in nigeria as possible"
    },
    {
      question: "when was Mosmith established",
      answer: " it was established in the year 2020"
    }
  ]

const freqAsked = document.querySelector('.freqAsked');

function DisplayFaqs() {
  faqs.forEach(element => {

    const line = document.createElement('hr');
    const div = document.createElement('div');
    div.classList.add('question');
    const ques = document.createElement('p');
    const symbol = document.createElement('span');
    symbol.innerHTML = '▼'

    ques.textContent = element.question;
    div.append(ques);
    div.append(symbol);

    const response = document.createElement('div');
    response.classList.add('response');

    const para = document.createElement('p');
    para.textContent = element.answer;
    response.append(para);

    freqAsked.append(line);
    freqAsked.append(div);
    freqAsked.append(response);


    let number = 0

    div.addEventListener('click', function () {
      if (number == 0) {
        symbol.innerHTML = '▲';
        number = 1;
        response.classList.add('active');
      }
      else if (number == 1) {
        symbol.innerHTML = '▼';
        number = 0;
        response.classList.remove('active');
      }
    })
  });
}

DisplayFaqs();


// pop out animation script




