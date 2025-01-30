const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
const gradientCard = document.querySelector('.gradient');
const partToHide = document.querySelectorAll('.partToHide');


const menuItemsOptions = document.querySelectorAll('#menuItems ul li a');
menuItemsOptions[3].classList.add('wayFinder');

const divToHide = document.querySelector('.divToHide');

let checkNumber = 0;


menuBars.addEventListener('click', function () {
  menuBars.classList.toggle('show');
  menuItems.classList.toggle('show');
  

  checkNumber = checkNumber + 1;

  if (checkNumber % 2 === 1) {
    setTimeout(() => {
      divToHide.classList.add('hide');
    }, 800);
  }

  if (checkNumber % 2 === 0) {
    divToHide.classList.remove('hide'); 
  }  
});



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



// script for the growIn animation on some paragraphs

document.addEventListener('scroll', function () {
  show();
  animateSecondImage();
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
  var elementPosition = element.getBoundingClientRect().top + scrollY + windowHeight / 4;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

const growIn = document.querySelectorAll('.growIn');
const secondImage = document.querySelector('.secondImage img');


function show() {

  growIn.forEach(sample => {
    if (inView(sample)) {
      sample.classList.add('animateTwo');
    }
  });
  
}

function animateSecondImage() {

    if (inView(secondImage)) {
      secondImage.classList.add('animate');
    }
  
}