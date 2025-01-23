const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
const gradientCard = document.querySelector('.gradient');

menuBars.addEventListener('click', function () {
  menuBars.classList.toggle('show');
  menuItems.classList.toggle('show');
})

document.addEventListener('scroll', function() {
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
  var elementPosition = installationCard.getBoundingClientRect().top + scrollY + windowHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

let complete = false;

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView() && complete === false) {
    installationCard.classList.add('animated')
    complete = true
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

//codes for the slider navigation arrors

const slider = document.querySelectorAll('.Slider img');
const sliderRightArrow = document.querySelector('#firstIcon');
const sliderLeftArrow = document.querySelector('#secondIcon');


const sliderButtons = document.querySelectorAll('.sliderButtons p');
const sliderButtonsDiv = document.querySelector('.sliderButtons');

sliderButtonsDiv.classList.add('hide');
let specialNumber = 0;

//this variable 'samp' is to make sure that when the right navigation arrow is clicked for the first
//time, it returns the special number to 0 rather than adding 1 to the number so that the animation will
// be ended and the first image will be displayed.
let samp = false;

slider.forEach(element => {
  element.classList.add('animate')
});

sliderButtons[specialNumber].classList.add('active');

sliderLeftArrow.classList.add('hide');


sliderRightArrow.addEventListener('click', function () {

  sliderLeftArrow.classList.remove('hide');

  //the line of code below is to show the slider Buttons upon clicking the right navigation arrow.
  sliderButtonsDiv.classList.remove('hide');

  slider.forEach(element => {
    element.classList.remove('animate')
  });

  if (specialNumber == 0) {
    sliderLeftArrow.classList.add('hide');
  }

  if (specialNumber == 4) {
    sliderRightArrow.classList.add('hide');
  }

  // the two lines of codes below are used to make sure the special Number that changes the transform
  // styling does not exceed 5 because the images minus the first image is just five
  if (specialNumber == 5) {
    specialNumber = -1;
  };


  specialNumber = specialNumber + 1;

  if(samp == false) {
    specialNumber = 0
    samp = true
  }

  //this three lines of codes below are to color the active slider button below
  sliderButtons.forEach(element => {
    element.classList.remove('active');
  });

  sliderButtons[specialNumber].classList.add('active');

  if (specialNumber == 1) {
    sliderLeftArrow.classList.remove('hide');
  }


  slider.forEach(element => {
    element.style.transform = `translateX(-${specialNumber * 100.7}%)`;
  });
});

sliderLeftArrow.addEventListener('click', function () {

  sliderRightArrow.classList.remove('hide');

  slider.forEach(element => {
    element.classList.remove('animate')
  });

  if (specialNumber == 1) {
    sliderLeftArrow.classList.add('hide');
  }

  specialNumber = specialNumber - 1;

  //this three lines of codes below are to color the active slider button below
  sliderButtons.forEach(element => {
    element.classList.remove('active');
  });

  sliderButtons[specialNumber].classList.add('active');

  slider.forEach(element => {
    element.style.transform = `translateX(-${specialNumber * 100.7}%)`;
  });
});
