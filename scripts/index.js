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


const installationCard = document.querySelector('.moveInSection');
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

faqs =
       [
        {question: "what is the mottto of our business",
          answer: "it is to cool your nights"
        },
      {
        question:  "what products do you sell",
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
    symbol.innerHTML = '&#11206;'
  
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

    symbol.addEventListener('click', function() {
      if (number == 0) {
        symbol.innerHTML = '&#11165;';
        number = 1;
        response.classList.add('active');
      }
      else if (number == 1) {
        symbol.innerHTML = '&#11206;';
        number = 0;
        response.classList.remove('active');
      }
    })
  });
}

DisplayFaqs();