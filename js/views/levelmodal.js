const  challengeModal = document.getElementById("challenge");
console.log(challengeModal);
/*---------------------------------------------------------------*/
var typeModal = ""
export var titleName = ""
/*----------------------------------------------------------------*/
import { renderContent, resetContent, resQuestion} from "./contentModalView.js";
import { arrayQuiz, arraySimple, currentChallenge} from "./contentModalView.js";
/*----------------------------------------------------------------*/
import { itemsContainer, masterCoinUpdate, addMasterCoinPart, slotUpdate } from "./level1View.js";
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
//console.log(salaDesafiosDefault)
/*----------------------------------------------------------------*/
export const salaDesafiosDefaultQuiz = salaDesafiosDefault.filter( (element) => {return element.type == "quiz"})
//console.log(salaDesafiosDefaultQuiz)
export const salaDesafiosDefaultSimple = salaDesafiosDefault.filter( (element) => {return element.type == "simple"})
//console.log(salaDesafiosDefaultSimple)

/*----------------------------------------------------------------*/
function loadModal()
{
    resetContent()
    if(typeModal == "" )
    {
        titleName = this.getAttribute("title")
        console.log(titleName)
        typeModal = this.getAttribute("data-type-question")
        console.log(typeModal)
        renderContent(typeModal)
    }
    else
    {
        renderContent(typeModal)
    }   
}
//loadChallengs()
/*----------------------------------------------------------------*/
export let nQuestion = 0
nextBtn.addEventListener("click", (event) =>
{
    event.preventDefault()
    //console.log("nextBtn")
    console.log(this)
    if(checkQuestionsLength() == true)
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
    //console.log(resUser)
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
    if(typeModal == "simple")
    {
        resUser = document.getElementById("simAnswer").value
    }
    //console.log(`${resQuestion} || ${resUser} `)
    if(resQuestion.toLowerCase() == resUser.toLowerCase())
    {
        alert("você acertou!!!")
        
        if(
            nQuestion == arrayQuiz.length-1 || 
            nQuestion == arraySimple.length-1)
        {
            alert("fim de jogo")
            nQuestion=0
            closeModal()
        }
        else
        {
            nQuestion += 1
            renderContent(typeModal)
        }
        
        console.log(currentChallenge());
        if (currentChallenge().itemToRecieve != ""){
            console.log(currentChallenge().itemToRecieve)
            itemsContainer[itemsContainer.indexOf('')] = currentChallenge().itemToRecieve
            slotUpdate()
        }
        console.log(currentChallenge())
        console.log(currentChallenge().recieveMasterCoinPart)
        alert(currentChallenge().recieveMasterCoinPart)
        if (currentChallenge().recieveMasterCoinPart) {
            alert('OK')
            addMasterCoinPart()
        }
    }
    else
    {
        alert("você errou!!!")
        alert("tente novamente")
        nQuestion=0
        closeModal()
    }
}
/*----------------------------------------------------------------*/
function checkQuestionsLength()
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
export function resetVariables()
{
    
    console.log("antes: " + typeModal)
    typeModal = ""
    console.log("depois: " + typeModal)
    nQuestion = 0
    //console.log(nQuestion)
}
challengeModal.addEventListener("hide.bs.modal", resetVariables)
/*----------------------------------------------------------------*/
function teste()
{
    console.log(`teste`)

}