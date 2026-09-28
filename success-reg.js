import library from './alfabet/alfabet.js';

class SuccessReg {

    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.closeButton = document.querySelector('.close-button');
        this.close = document.querySelector('.close');
        this.userName = document.querySelector('.user-name');

        this.openClose(true);

        this.closeButton.addEventListener('click', () => {
            this.openClose(true);
        });

        this.close.addEventListener('click', () => {
            this.openClose(true);
        });
    }

    openClose(hidden) {
        if (hidden) {
            this.popup.classList.add('hidden');
        } else {
            this.popup.classList.remove('hidden');
        }
    }

    writeName(name) {

        name = name.trim();

        if (name === '') {
            return;
        }

        this.openClose(false);

        this.userName.textContent = name;
    }
}

export default SuccessReg;
