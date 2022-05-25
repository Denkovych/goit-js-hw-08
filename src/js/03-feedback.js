const feedbackForm =document.querySelector(".feedback-form");
console.log(feedbackForm);
const emailInput = feedbackForm.querySelector('[name = email]');
console.log(emailInput);
const messageInput = feedbackForm.querySelector('[name = message]');
console.log(messageInput);
const btnSubmit = feedbackForm.querySelector('[type = submit]');
console.log(btnSubmit)
var throttle = require('lodash.throttle');

btnSubmit.addEventListener('click', throttle(pushBtnSubmit , 500) );
emailInput.addEventListener('input', throttle(inputEmail, 500) );
messageInput.addEventListener('input', inputMessage);



function inputEmail(evt){
    evt.preventDefault();
    console.log(evt.currentTarget.value);
    email = evt.currentTarget.value;
localStorage.setItem('email', email)
    };
    console.log(inputEmail.value);
    let email = localStorage.getItem('email');
emailInput.value = email;

function inputMessage(evt){
    evt.preventDefault();
    console.log(evt.currentTarget.value);
message = evt.currentTarget.value;
    localStorage.setItem('message', message)
}
let message = localStorage.getItem('message');
messageInput.value = message;

function pushBtnSubmit(evt){
console.log('qwe');
}