'use strict';

const faqItem = document.querySelectorAll(".faq__item");


faqAnswer.forEach((item) => {
    item.addEventListener('click', () => {
       const faqAnswer = item.querySelector('.faq__answer');
       faqAnswer.classList.toggle('faq__answer_hidden');
    })
})

