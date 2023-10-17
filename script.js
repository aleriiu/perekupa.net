'use strict';

// аккордеон

const accordionItemHeaders = document.querySelectorAll(".faq__item");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.querySelector(".faq__content");
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


// форма 1

const form = document.querySelector('#form-1');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInputOne = form.querySelector('#form-1-name');
    const phoneInputOne = form.querySelector('#form-1-numb');
    const messageInputOne = form.querySelector('#form-1-message');
    const url = 'https://api.telegram.org/bot6663438165:AAESG6Jt1J3btraE_rz614EDDUf4jk0mQlM/sendMessage';

    const text = `Сообщение из формы 1\r\n\r\nИмя: ${nameInputOne.value}\r\nТелефон: ${phoneInputOne.value}\r\nСообщение: ${messageInputOne.value}`;

    const formData = new FormData();
    formData.append('chat_id',  6679838375);
    formData.append('parse_mode', 'Markdown');
    formData.append('text', text);

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    nameInputOne.value = '';
    phoneInputOne.value = '';
    messageInputOne.value ='';

    alert('Сообщение отправлено!');

})

// форма 1

const formTwo = document.querySelector('#form-2');

formTwo.addEventListener('submit', async (e) => {
    e.preventDefault();

    const phoneInputTwo = formTwo.querySelector('#form-2-numb');
    const messageInputTwo = formTwo.querySelector('#form-2-message');
    const urlTwo = 'https://api.telegram.org/bot6663438165:AAESG6Jt1J3btraE_rz614EDDUf4jk0mQlM/sendMessage';

    const text = `Сообщение из формы 2\r\nТелефон: ${phoneInputTwo.value}\r\nСообщение: ${messageInputTwo.value}`;

    const formData = new FormData();
    formData.append('chat_id',  6679838375);
    formData.append('parse_mode', 'Markdown');
    formData.append('text', text);

    const response = await fetch(urlTwo, {
        method: 'POST',
        body: formData
    });

    phoneInputTwo.value = '';
    messageInputTwo.value ='';

    alert('Сообщение отправлено!');

})


// hover

function watchForHover() {
  // lastTouchTime is used for ignoring emulated mousemove events
  let lastTouchTime = 0

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return
    document.body.classList.add('hasHover')
  }

  function disableHover() {
    document.body.classList.remove('hasHover')
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date()
  }

  document.addEventListener('touchstart', updateLastTouchTime, true)
  document.addEventListener('touchstart', disableHover, true)
  document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

watchForHover()