const menuBars = document.querySelector('#menuBars');
const menuItems = document.querySelector('#menuItems');
const gradientCard = document.querySelector('.gradient');

menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('show');
    menuItems.classList.toggle('show');
    gradientCard.classList.toggle('removeMargin');
})



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