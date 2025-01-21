const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
const gradientCard = document.querySelector('.heroImag');

menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('show');
    menuItems.classList.toggle('show');
    gradientCard.classList.toggle('removeMargin');
})


const vision = document.querySelector('#vision');
const purpose = document.querySelector('#purpose');

const visionSection = document.querySelector('.visionSection');
const purposeSection = document.querySelector('.purposeSection');

vision.addEventListener('click', displayvisionSegment);

purpose.addEventListener('click', function() {
    purpose.classList.add('active');
    vision.classList.remove('active');

    purposeSection.classList.add('active');
    visionSection.classList.remove('active');
});

function displayvisionSegment() {
    vision.classList.add('active');
    purpose.classList.remove('active');
    
    visionSection.classList.add('active');
    purposeSection.classList.remove('active');
};

displayvisionSegment();


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

const completedJobs = document.querySelector('#completedJobs');
const noOfYears = document.querySelector('#noOfYears');

const targetNumber = 500;
const targetNumbertwo = 4; // Replace with your desired target number
const duration = 2000; // Animation duration in milliseconds

let currentValue = 0;
let currentValuetwo = 0;
// there are two currentvalue variables because they are not increasing at the same increments.

const increment = Math.ceil(targetNumber / (duration / 16));
const incrementtwo = Math.abs(targetNumbertwo / (duration / 16)); // Calculate increment value


function animateCounter() {
  if (currentValue >= targetNumber) {
    completedJobs.textContent = targetNumber;
    return;
  }

  currentValue += increment;
  completedJobs.textContent = currentValue;

  requestAnimationFrame(animateCounter);
};


function animateCountertwo() {
  if (currentValuetwo >= targetNumbertwo) {
    noOfYears.textContent =  `${targetNumbertwo}+`;
    return;
  }

  currentValuetwo += incrementtwo;
  noOfYears.textContent = `${currentValuetwo.toFixed(1)}+`;
  // I used toFixed() method to display one decimal place digits and not the actual number of about 
  // 8 decimal places or more

  requestAnimationFrame(animateCountertwo);
};


animateCounter();
animateCountertwo();

