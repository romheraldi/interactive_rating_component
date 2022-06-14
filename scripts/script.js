console.log('Hello');

console.log('This is script for intearative rating component');

let submitButton = document.querySelector('.submit');
let rateButtons = document.querySelectorAll("input[name='point']");
let rateBox = document.querySelector('.rating-box');
let thankYou = document.querySelector('.thank-you');
let rateValue = 0;
let rateSpan = document.querySelector('#result');

submitButton.addEventListener('click', function (e) {
    for (const rateButton of rateButtons) {
        if (rateButton.checked) {
            rateValue = rateButton.value;
            break;
        }
    }

    rateSpan.innerHTML = rateValue;

    rateBox.classList.add('hidden');
    thankYou.classList.remove('hidden');
})


