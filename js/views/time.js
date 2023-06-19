const startBtn = document.querySelector("#start-button");
const stopBtn = document.querySelector("#stop-button");
const bar = document.querySelector("#timeBar");
const salaTime = JSON.parse(localStorage.getItem("levels"))[0].timeInSeconds
//console.log(salaTime);
/*----------------------------------------------------------------*/
let time = null
let checkTime = null
let checkStart = false
let checkEnd = false
let check = 0


/*----------------------------------------------------------------*/
import { view1, view2,view3, view4, defaultMaps, reSize } from "./level1View.js";
import { refreshAreas } from "./levelmodal.js";
import { refreshActions } from "./contentModalView.js";
/*----------------------------------------------------------------*/
startBtn.addEventListener("click", () => 
{
    view1.innerHTML = defaultMaps[0]
    view2.innerHTML = defaultMaps[1]
    view3.innerHTML = defaultMaps[2]
    view4.innerHTML = defaultMaps[3]
    refreshAreas()
    refreshActions()
    reSize()
    if(checkStart == false)
    {
    check = 0
    startTimer()
    checkStart = true
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
            //console.log("end timer");
            if (confirm("Tempo esgotado. Gostaria de recomeçar?"))
            {
                location.reload()
            }
            else
            {
                location.href = "levelSelection.html"
            }
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