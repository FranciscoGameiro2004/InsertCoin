const optArray = [];
let resUser = ""
let nquestion = 0
let resQuestion = ""
/*----------------------------------------------------------------*/
const modal = document.getElementById("challenge")
//console.log(modal)
/*----------------------------------------------------------------*/
import { rederContent } from "./contentModalView.js";
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
const challenges = document.querySelectorAll("area[id='challengeArea']")
//console.log(challenges)
const challengesArray = Array.from(challenges)
challengesArray.forEach(challenge => challenge.addEventListener("click", loadModal))
console.log(challengesArray)
const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
//console.log(currentLevelIndex)
let salaDesafiosDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].challenges
//console.log(salaDesafiosDefault)
/*----------------------------------------------------------------*/
function loadModal()
{
    if(this.getAttribute("data-type-question") == "4_Options")
    {
        rederContent(this.getAttribute("data-type-question"))
        optArray.forEach(opt => 
        {
            opt.classList.remove("selected");
        });
        let challeng = salaDesafiosDefault[nquestion]
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


}
//loadChallengs()
//challenges.addEventListener("click", loadChallengs)
/*----------------------------------------------------------------*/
nextBtn.addEventListener("click", () =>
{
    console.log("nextBtn")
    //console.log(`${resUser} e ${resQuestion}`)
    if(checkQuestion() == true)
    {
        if(resQuestion == resUser)
        {
            alert("você acertou!!!")
            nquestion += 1
            //console.log(nquestion)
            loadModal()
        }
        else
        {
            alert("você errou!!!")
            closeModal()
        }
    }
    else
    {
        alert("você acertou!!!")
        alert("fim de jogo")
        closeModal()
    }
})
/*----------------------------------------------------------------*/
function captureFocus()
{
    resUser = this.innerHTML
    //console.log(resUser)
}
/*----------------------------------------------------------------*/
function closeModal()
{
    console.log("closeModal")
    $("#challenge").modal("hide")
}
/*----------------------------------------------------------------*/
function checkQuestion()
{
    if(nquestion < salaDesafiosDefault.length - 1)
    {
        return true
    }
    else
    {
        return false
    }
}

function teste()
{
    modal.getAttribute
    console.log(`${this.getAttribute("data-type-question")}`)
}