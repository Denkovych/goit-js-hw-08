const feedbackForm =document.querySelector(".feedback-form");
console.log(feedbackForm);
const emailInput = feedbackForm.querySelector('[type = "email"]');
console.log(emailInput);
const messageInput = feedbackForm.querySelector('[name = "message"]');
console.log(messageInput);
var throttle = require('lodash.throttle');

feedbackForm.addEventListener('submit', pushBtnSubmit);
emailInput.addEventListener('input', throttle(inputEmail, 500) );
messageInput.addEventListener('input', throttle(inputMessage, 500));

function inputEmail(evt){
    evt.preventDefault();
    email = evt.target.value;
    localStorage.setItem('email', email)};

    let email = localStorage.getItem('email');
    emailInput.value = email;

function inputMessage(evt){ 
    evt.preventDefault(); 
    message = evt.target.value; 
    localStorage.setItem('message', message)};
    let message = localStorage.getItem('message'); 
    messageInput.value = message;

function pushBtnSubmit (evt) {
    evt.preventDefault(); 
    let loginInfo = {};

    if(emailInput.value === "" || messageInput.value ===""){
        alert('Потрібно заповнити всі поля');}
    else if (emailInput.value !== '' && messageInput.value !== ''){
        loginInfo.email = `${emailInput.value}`;
        loginInfo.message = `${messageInput.value}`; 
        console.log(loginInfo);

        feedbackForm.reset(); 
        localStorage.removeItem('message')
        localStorage.removeItem('email')}};
        