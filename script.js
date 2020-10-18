let startBox = document.querySelector('.start-box')
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');

startCounter.addEventListener('click' , function(e) {
    let seconds = parseInt(inputCounter.value)

    if(isNaN(seconds)) {
        errorElement.textContent = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active')
        return;
    }

    errorElement.classList.remove('active');
    startBox.classList.remove('active')
    timerCircle.style.display = 'block'
})