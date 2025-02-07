const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
const gradientCard = document.querySelector('.gradient');
const partToHide = document.querySelectorAll('.partToHide');


const menuItemsOptions = document.querySelectorAll('#menuItems ul li a');
menuItemsOptions[2].classList.add('wayFinder');

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

const slider = document.querySelectorAll('.Slider img');

slider.forEach(element => {
  element.classList.add('animate')
});

faqs =
  [
    {
      question: "In which locations are Mosmith installation and maintenance services available?",
      answer: "Our installation and maintenance services are available nationwide across Nigeria."
    },
    {
      question: "How quickly can I expect a response from Mosmith Multiventures regarding my requests and concerns?",
      answer: "Expect a reply from our team within 1 hour for all requests and concerns."
    },
    {
      question: "Does Mosmith Multiventures offer any warranty coverage for installation and maintenance work",
      answer: "We stand behind our work with a one-month warranty, providing full coverage for any issues arising from our installation and maintenance services."
    },
    {
      question: "When was Mosmith founded?",
      answer: "Since our inception in 2020, Mosmith Multiventures and Services has been dedicated to providing outstanding service."
    },
    {
      question: "What brands of appliances do Mosmith Multiventures work with?",
      answer: "We work with leading AC and appliance brands in Nigeria, such as LG, Panasonic, Samsung, and Daikin."
    },
    {
      question: "Is Mosmith Multiventures and Services a duly registered company?",
      answer: "Mosmith Multiventures and Services holds a valid registration with the Corporate Affairs Commission(C.A.C) of Nigeria, ensuring our commitment and reliability."
    }
  ]

const freqAsked = document.querySelectorAll('.freqAsked');
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


    freqAsked.forEach(element => {
      element.append(line);
      element.append(div);
      element.append(response);

    });

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


// script for the growIn animation on some paragraphs

document.addEventListener('scroll', function () {
  show();
  animateJoinUsImage();
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
const joinUsImage = document.querySelector('.divForJoiningNetwork img');


function show() {

  growIn.forEach(sample => {
    if (inView(sample)) {
      sample.classList.add('animateTwo');
    }
  });

}

function animateJoinUsImage() {
  // is element in view?
  if (inView(joinUsImage)) {
    joinUsImage.classList.add('animate');
  };
}
