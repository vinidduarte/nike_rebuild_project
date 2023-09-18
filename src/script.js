// script.js

document.addEventListener('DOMContentLoaded', function () {
    const semiCircle = document.querySelector('.semi-circle');
    const sneakersImage = document.querySelector('.snkrs img');

    const redButton = document.getElementById('red-button');
    const greyButton = document.getElementById('grey-button');
    const originalButton = document.getElementById('original-button');

    redButton.addEventListener('click', function () {
        semiCircle.style.background = 'linear-gradient(to bottom, red , rgba(160, 189, 213, 0) 100%)';
        sneakersImage.src = 'https://o.remove.bg/downloads/fbc35db2-2dba-4c68-9be0-f64bcca49743/122cad75-b819-40d9-8e6e-bf35eeb78564-removebg-preview.png';
    });

    greyButton.addEventListener('click', function () {
        semiCircle.style.background = 'linear-gradient(to bottom, grey, transparent)';
        sneakersImage.src = 'https://o.remove.bg/downloads/0c8d3393-789c-4062-bfff-af056ed1ab19/a9f2190c-6a00-46e0-bff8-7e412f7fad7c-removebg-preview.png';
    });
    originalButton.addEventListener('click', function () {
        semiCircle.style.background = 'linear-gradient(to bottom, rgba(160, 189, 213, 1) 0%, rgba(160, 189, 213, 0) 100%)';
        sneakersImage.src = 'https://o.remove.bg/downloads/4962295b-2ff3-48b9-a543-d053e56d3ea1/bb55cab8-31fb-44cf-90ad-1e91fe633e91-removebg-preview.png';
    });
});
    