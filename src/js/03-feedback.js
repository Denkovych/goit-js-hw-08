const feedbackForm =document.querySelector(".feedback-form");
console.log(feedbackForm);
const emailInput = feedbackForm.querySelector('[name = email]');
console.log(emailInput);
const messageInput = feedbackForm.querySelector('[name = message]');
console.log(messageInput);
const btnSubmit = feedbackForm.querySelector('[type = submit]');
console.log(btnSubmit)
var throttle = require('lodash.throttle');

btnSubmit.addEventListener('submit', pushBtnSubmit);
emailInput.addEventListener('input', throttle(inputEmail, 500) );
messageInput.addEventListener('input', throttle(inputMessage, 500));

function pushBtnSubmit(evt){
    evt.preventDefault(); 
    let loginInfo = {};
    if (emailInput.value !== '' && messageInput.value !== '')
    {loginInfo.email = emailInput.value;
    loginInfo.message = messageInput.value;   
    console.log(loginInfo);
    feedbackForm.reset();
     emailInput.reset()
    messageInput.reset()}
}


function inputEmail(evt){
    evt.preventDefault();
    console.log(evt.target.value);
    email = evt.target.value;
    localStorage.setItem('email', email)};

    let email = localStorage.getItem('email');
    emailInput.value = email;

function inputMessage(evt){
    evt.preventDefault();
    console.log(evt.target.value);
    message = evt.target.value;
    localStorage.setItem('message', message)};

    let message = localStorage.getItem('message');
    messageInput.value = message;
    
    console.log(messageInput.target.value);