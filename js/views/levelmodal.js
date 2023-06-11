const  modal = document.getElementById("challenge");
//console.log(modal)
/*---------------------------------------------------------------*/
let typeModal = ""
/*----------------------------------------------------------------*/
import { rederContent, resQuestion} from "./contentModalView.js";
/*----------------------------------------------------------------*/
const nextBtn = document.getElementById("next")
//console.log(nextBtn)
const challenges = document.querySelectorAll("area[id='challengeArea']")
//console.log(challenges)
const challengesArray = Array.from(challenges)
challengesArray.forEach(challenge => challenge.addEventListener("click", loadModal))
//challengesArray.forEach(challenge => challenge.addEventListener("click", teste))
//console.log(challengesArray)
const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
//console.log(currentLevelIndex)
export let salaDesafiosDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].challenges
console.log(salaDesafiosDefault)
/*----------------------------------------------------------------*/
function loadModal()
{
    if(typeModal == "" )
    {
        typeModal = this.getAttribute("data-type-question")
        //console.log(typeModal)
        rederContent(typeModal)
    }
    else
    {
        rederContent(typeModal)
    }   
}
//loadChallengs()
/*----------------------------------------------------------------*/
export let nQuestion = 0
nextBtn.addEventListener("click", (event) =>
{
    event.preventDefault()
    //console.log("nextBtn")
    console.log(checkQuestion())
    if(checkQuestion() == true)
    {
        checkRes()
    }
    else
    {
        checkRes()
    }
})
/*----------------------------------------------------------------*/
export let resUser = ""
export function captureFocus()
{
    resUser = this.innerHTML
    console.log(resUser)
}
/*----------------------------------------------------------------*/
function closeModal()
{
    console.log("closeModal")
    $("#challenge").modal("hide")
}
/*----------------------------------------------------------------*/
function checkRes()
{
    console.log(`${resQuestion} || ${resUser} `)
    if(resQuestion == resUser)
    {
        alert("você acertou!!!")
        if(nQuestion == salaDesafiosDefault.length-1)
        {
            alert("fim de jogo")
            closeModal()
        }
        else
        {
            nQuestion += 1
            rederContent(typeModal)
        }
    }
    else
    {
        alert("você errou!!!")
        alert("tente novamente")
        closeModal()
    }
}
/*----------------------------------------------------------------*/
function checkQuestion()
{
    if(nQuestion < salaDesafiosDefault.length - 1)
    {
        return true
    }
    else
    {
        return false
    }
}
/*----------------------------------------------------------------*/

function cleanTypeModal()
{
    console.log("antes: " + typeModal)
    typeModal = ""
    console.log("depois: " + typeModal)
}
modal.addEventListener("hidden.bs.modal", cleanTypeModal)

function teste()
{
    console.log(`${this.getAttribute("data-type-question")}`)
}