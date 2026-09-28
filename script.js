import SuccessReg from './alfabet/success-reg.js';

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');

const successReg = new SuccessReg();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    successReg.writeName(nameInput.value);
});
