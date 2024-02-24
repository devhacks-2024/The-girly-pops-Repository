var num = 0;
var countdown = false;
var timer = document.getElementById("timer-display");
var upButton = document.getElementById("up");
var downButton = document.getElementById("down");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var countdownInterval;


upButton.addEventListener("click",function(){
    num +=30;
    updateTimerDisplay();
})

downButton.addEventListener("click",function(){
    if(num-30>0){
        num -=30;
    }
    else{
        num = 0;
    }
    updateTimerDisplay();
})

function updateTimerDisplay() {
    var minutes = Math.floor(num / 60);
    var seconds = num % 60;
    timer.textContent = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

startButton.addEventListener("click",function(){
    countdown = true;
    upButton.style.display = "none";
    downButton.style.display = "none";
    startButton.style.display = "none";
    resetButton.style.display = "none"; 
    pauseButton.style.display = "block";
    countdownInterval = setInterval(function(){
        if(num>0){
            num =num-1;
            updateTimerDisplay();
        }
        else{
            clearInterval(countdownInterval);
            upButton.style.display = "block";
            downButton.style.display = "block";
            startButton.style.display = "block";
            resetButton.style.display = "block"; 
            pauseButton.style.display = "none"
        }
    }, 1000);
})

resetButton.addEventListener("click",function(){
    num = 0;
    updateTimerDisplay();
})

pauseButton.addEventListener("click",function(){
    countdown = false;
    upButton.style.display = "block";
    downButton.style.display = "block";
    startButton.style.display = "block";
    resetButton.style.display = "block"; 
    pauseButton.style.display = "none";
    clearInterval(countdownInterval);
})