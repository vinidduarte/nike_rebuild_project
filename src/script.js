// script.js

document.addEventListener('DOMContentLoaded', function () {
    const semiCircle = document.querySelector('.semi-circle');
    const sneakersImage = document.querySelector('.snkrs img');

    const redButton = document.getElementById('red-button');
    const greyButton = document.getElementById('grey-button');
    const originalButton = document.getElementById('original-button');

    redButton.addEventListener('click', function () {
        semiCircle.style.background = 'linear-gradient(to bottom, red , rgba(160, 189, 213, 0) 100%)';
        sneakersImage.src = './images/tenisvermelho.png';
    });

    greyButton.addEventListener('click', function () {
        semiCircle.style.background = 'linear-gradient(to bottom, grey, transparent)';
        sneakersImage.src = './images/teniscinza.png';
    });
    originalButton.addEventListener('click', function () {
        semiCircle.style.background = 'linear-gradient(to bottom, rgba(160, 189, 213, 1) 0%, rgba(160, 189, 213, 0) 100%)';
        sneakersImage.src = './images/tenisazul.png';
    });
});
    