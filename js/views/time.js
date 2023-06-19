const startBtn = document.querySelector("#start-button");
const stopBtn = document.querySelector("#stop-button");
const bar = document.querySelector("#timeBar");
const salaTime = JSON.parse(localStorage.getItem("levels"))[0].timeInSeconds
//console.log(salaTime);

let time = null
let checkTime = null
let checkStart = false
let checkEnd = false
let check = 0

startBtn.addEventListener("click", () => 
{
  if(checkStart == false)
  {
    check = 0
    startTimer()
    checkStart = true;
  }
});

function startTimer()
{
    document.querySelector("#timeBar2").style.animationPlayState = 'running'
    bar.style.setProperty('--duration', salaTime)
    bar.classList.remove("round-time-bar");
    bar.offsetWidth;
    bar.classList.add("round-time-bar");
    controlTimer(salaTime)

    time = setTimeout(() =>
    {
        checkStart = false
    },salaTime*1000)
}

stopBtn.addEventListener("click", () => 
{
    checkEnd = true
    checkStart = false
    document.querySelector("#timeBar2").style.animationPlayState = 'paused'
    clearInterval(checkTime);
    console.log(check)
})

function controlTimer(time)
{
    console.log(time)
    checkTime = setInterval(function () 
    {
        check += 1
        console.log(check)
        if (check == time)
        {
            clearInterval(checkTime);
            console.log("end timer");
            console.log(check)
            checkEnd = false
        }
    }, 1000);
}

export function currentTime(){
    return check
}

export function timeLeft(){
    return time - check
}