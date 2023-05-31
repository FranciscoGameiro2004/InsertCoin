const button = document.querySelector("#restart-button");
const bar = document.querySelector("#timeBar");
const salaTime = JSON.parse(localStorage.getItem("levels"))[0].timeInSeconds
console.log(salaTime);

let time = null
let checkStart = false

button.addEventListener("click", () => 
{
  if(checkStart == false)
  {
    startTimer()
    checkStart = true;
  }
});

function startTimer()
{
    bar.style.setProperty('--duration', salaTime)
    bar.classList.remove("round-time-bar");
    bar.offsetWidth;
    bar.classList.add("round-time-bar");
    teste(salaTime)

    time = setTimeout(() =>
    {
        checkStart = false
        console.log("end timer");
    },salaTime*1000)
}

function teste(time)
{
    console.log(time)
    let checkTime = setInterval(function () 
    {
        time -= 1
        console.log(time)
        if (time == 0)
        {
            clearInterval(checkTime);
        }
    }, 1000);
}

