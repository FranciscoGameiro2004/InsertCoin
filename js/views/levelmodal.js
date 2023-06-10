const optArray = [];
let resUser = ""
let nquestion = 0
let resQuestion = ""
/*----------------------------------------------------------------*/
const modal = document.getElementById("challenge")
console.log(modal)
/*----------------------------------------------------------------*/
const pergunta  = document.getElementById('pergunta')
//console.log(pergunta);
const opt1 = document.getElementsByClassName("option1");
optArray.push(...opt1);
const opt2 = document.getElementsByClassName("option2");
optArray.push(...opt2);
const opt3 = document.getElementsByClassName("option3");
optArray.push(...opt3);
const opt4 = document.getElementsByClassName("option4");
optArray.push(...opt4);
//console.log(optArray);
optArray.forEach(opt => 
{
    opt.addEventListener("click",captureFocus)
    opt.addEventListener("click", () => 
    {
        optArray.forEach(opt => 
        {
            opt.classList.remove("selected");
        });
        opt.classList.add("selected")
    })
});
/*----------------------------------------------------------------*/
const nextBtn = document.getElementById("next")
//console.log(nextBtn)
const challeng_1 = document.getElementById("PDP")
//console.log(PDP)
const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
//console.log(currentLevelIndex)
let salaDesafiosDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].challenges
//console.log(salaDesafiosDefault)
/*----------------------------------------------------------------*/

function loadChallengs()
{
    let challeng = salaDesafiosDefault[0]
    //console.log(challeng)

    pergunta.innerHTML = challeng.quizText

    for(let i = 0; i < optArray.length; i++)
    {
        //console.log(optArray[i])
        optArray[i].innerHTML = challeng.quizAnswers[i]
    }
    resQuestion = challeng.quizAnswer
    //console.log(resQuestion)
}
loadChallengs()
challeng_1.addEventListener("click", loadChallengs)
/*----------------------------------------------------------------*/
nextBtn.addEventListener("click", () =>
{
    console.log("nextBtn")
    //console.log(`${resUser} e ${resQuestion}`)
    if(resQuestion == resUser)
    {
        alert("você acertou")
    }
    else
    {
        alert("você errou")
        
    }
})
/*----------------------------------------------------------------*/

function captureFocus()
{
    resUser = this.innerHTML
    //console.log(resUser)
}
//captureFocus()
/*----------------------------------------------------------------*/



function teste()
{
    console.log("teste")
}
challeng_1.click()

setTimeout( () => 
{
    modal.hide()
},2000)