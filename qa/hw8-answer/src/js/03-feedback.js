import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input');
// const textAreaEl = document.querySelector('textArea');

const { elements: {
    email: emailEl, 
    message: textAreaEl
} } = formEl;

populateTextArea();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit (event) {
    event.preventDefault();
    console.log({ email: emailEl.value,message: textAreaEl.value })
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
    
    const formData = {
        email: emailEl.value,
        message: textAreaEl.value
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        let dataObject = JSON.parse(savedMessage);
        emailEl.value = dataObject.email;
        textAreaEl.value = dataObject.message;
    }
}