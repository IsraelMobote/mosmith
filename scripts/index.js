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
const parentDivForBuy = document.querySelector('.parentDivForBuy');
const parentDivForSell = document.querySelector('.parentDivForSell');
const animation = document.querySelectorAll('.animation');

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

    parentDivForBuy.classList.remove('hide');
    parentDivForSell.classList.remove('active');

    // the line below was added so that the animation and the parentdivforBuy can be the same height
    parentDivForBuy.classList.add('shorten');

    //the line below was added so that the animation can appear anytime the Buy button is clicked before
    //it is  hidden again by the setTimeout function
    animation[0].classList.remove('hide');

    setTimeout(() => {
      animation[0].classList.add('hide');
      parentDivForBuy.classList.remove('shorten');
    }, 4000);
}

function choseSell() {
    sell.classList.add('color');
    buy.classList.remove('color');
    space.classList.remove('color');
    space1.classList.remove('left');
    space1.classList.add('right');
    space2.classList.add('color');

    parentDivForBuy.classList.add('hide');
    parentDivForSell.classList.add('active');

     // the line below was added so that the animation and the parentdivforSell can be the same height
     parentDivForSell.classList.add('shorten');

     //the line below was added so that the animation can appear anytime the Sell button is clicked before
    //it is  hidden again by the setTimeout function
    animation[1].classList.remove('hide');

    setTimeout(() => {
      animation[1].classList.add('hide');
      parentDivForSell.classList.remove('shorten');
    }, 4000);
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

    div.addEventListener('click', function() {
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

const slider = document.querySelectorAll('.usedAppliancesSlider img');
const sliderRightArrow = document.querySelector('#firstIcon');
const sliderLeftArrow = document.querySelector('#secondIcon');


const sliderButtons = document.querySelectorAll('.sliderButtons p')


let specialNumber = 0;

sliderButtons[specialNumber].classList.add('active');
 

sliderRightArrow.addEventListener('click', function() {
  // the two lines of codes below are used to make sure the special Number that changes the transform
  // styling does not exceed 5 because the images minus the first image is just five
  if(specialNumber == 5) {
    specialNumber = -1;};


  specialNumber = specialNumber + 1;

   //this three lines of codes below are to color the active slider button below
  sliderButtons.forEach(element => {
    element.classList.remove('active');});

  sliderButtons[specialNumber].classList.add('active');
 
  slider.forEach(element => {
    element.style.transform = `translateX(-${specialNumber*100.7}%)`;
 });
});

sliderLeftArrow.addEventListener('click', function() {
  specialNumber = specialNumber - 1;

  //this three lines of codes below are to color the active slider button below
  sliderButtons.forEach(element => {
    element.classList.remove('active'); });

  sliderButtons[specialNumber].classList.add('active');
 
  slider.forEach(element => {
   element.style.transform = `translateX(-${specialNumber*100.7}%)`;
});
});


