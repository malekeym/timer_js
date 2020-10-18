let startBox = document.querySelector('.start-box')
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');
let timerNum =document.querySelector(".c100 >span")
let loadingMessage=document.querySelector(".message .loading")
let successMessage=document.querySelector(".message .success")
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
    timerNum.textContent= seconds;
    loadingMessage.style.display ='block';
    successMessage.style.display ='none';
    let orginalSeconds=seconds;
    let lastPercent="";
    let timeId=setInterval(() => {
        if(lastPercent)timerCircle.classList.remove(lastPercent);
        if(seconds<=1){
            clearInterval(timeId);
            startBox.classList.add("active");
            timerCircle.style.display = 'none'
            loadingMessage.style.display ='none';
            successMessage.style.display ='block';
            inputCounter.value=null;
            timerCircle.classList.remove(lastPercent);
            return ;
        }
        seconds-=1;
        let percent = Math.floor(((orginalSeconds-seconds)/orginalSeconds)*100);
        let clis='p'+percent;
        lastPercent=clis;
        timerCircle.classList.add(clis)
        timerNum.textContent= seconds;
    }, 1000);
})