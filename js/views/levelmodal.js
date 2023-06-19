const  challengeModal = document.getElementById("challenge");
//console.log(challengeModal);
/*---------------------------------------------------------------*/
var areaName =  ""
export var titleName = ""
var typeModal = ""
/*----------------------------------------------------------------*/
import { renderContent, resetContent, resQuestion} from "./contentModalView.js";
import { arrayQuiz, arraySimple, currentChallenge} from "./contentModalView.js";
/*----------------------------------------------------------------*/
import { itemsContainer, masterCoinUpdate, addMasterCoinPart, slotUpdate, completedArray, leftArrow, rightArrow, numOfCurrentPoints, setPoints, numOfExtraPoints, setExtraPoints, numOfCurrentCoins, setCoins, checkMaps} from "./level1View.js";
import { timeLeft } from "./time.js";
/*----------------------------------------------------------------*/
const nextBtn = document.getElementById("next");//console.log(nextBtn)
var challenges = document.querySelectorAll("area[id='challengeArea']");//console.log(challenges)
var challengesArray = Array.from(challenges)
challengesArray.forEach(challenge => challenge.addEventListener("click", loadModal));//console.log(challengesArray)
const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level');//console.log(currentLevelIndex)
export let salaDesafiosDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].challenges;//console.log(salaDesafiosDefault)
/*----------------------------------------------------------------*/
export function refreshAreas()
{
    console.log("refreshAreas")
    challenges = document.querySelectorAll("area[id='challengeArea']");//console.log(challenges)
    challengesArray = Array.from(challenges)
    challengesArray.forEach(challenge => challenge.addEventListener("click", loadModal));//console.log(challengesArray)
}
/*----------------------------------------------------------------*/
leftArrow.addEventListener("click", refreshAreas)
rightArrow.addEventListener("click", refreshAreas)
/*----------------------------------------------------------------*/
export const salaDesafiosDefaultQuiz = salaDesafiosDefault.filter( (element) => {return element.type == "quiz"});//console.log(salaDesafiosDefaultQuiz)
export const salaDesafiosDefaultSimple = salaDesafiosDefault.filter( (element) => {return element.type == "simple"})
//console.log(salaDesafiosDefaultSimple)

let finalModal = new bootstrap.Modal('#myModal')

/*document.querySelector('#finalTrigger').addEventListener('click',()=>{
    openFinalModal()
})*/

export function openFinalModal(){
    //alert(numOfCurrentPoints)
    setCoins(Math.floor((numOfCurrentPoints + numOfExtraPoints)/100))
    setExtraPoints(timeLeft()*10)

    document.querySelector('#numPoints').innerHTML = `${numOfCurrentPoints} pts`
    document.querySelector('#numExtraPoints').innerHTML = `${numOfExtraPoints} pts`
    document.querySelector('#totalPoints').innerHTML = `${numOfCurrentPoints + numOfExtraPoints} pts`
    document.querySelector('#numCoins').innerHTML = `${numOfCurrentCoins} moedas`
    finalModal.show()
}

/*----------------------------------------------------------------*/
function loadModal()
{
    resetContent()

    checkMaps()

    if(typeModal == "" )
    {
        areaName = this
        //console.log(areaName)
        titleName = this.getAttribute("title")
        //console.log(titleName)
        typeModal = this.getAttribute("data-type-question")
        //console.log(typeModal)
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
    //console.log(this)
    if(checkQuestionsLength() == true)
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
export function closeModal()
{
    //console.log("closeModal")
    $("#challenge").modal("hide")
}
/*----------------------------------------------------------------*/
function checkRes()
{
    if(typeModal == "simple")
    {
        resUser = resQuestion
       //resUser = document.getElementById("simAnswer").value
    }
    //console.log(`${resQuestion} || ${resUser} `)
    if(resQuestion.toLowerCase() == resUser.toLowerCase())
    {
        //console.log(currentChallenge());
        //alert("você acertou!!!")
        
        if(nQuestion == arrayQuiz.length-1 || nQuestion == arraySimple.length-1)
        {

            nQuestion=0
            closeModal()
            //console.log(completedArray)
            

            //console.log(currentChallenge());
            if (currentChallenge().itemToRecieve != ""){
                //console.log(currentChallenge().itemToRecieve)
                itemsContainer[itemsContainer.indexOf('')] = currentChallenge().itemToRecieve
                //console.log(itemsContainer)
                slotUpdate()
                
            }
            //console.log(currentChallenge())
            //console.log(currentChallenge().recieveMasterCoinPart)
            //alert(currentChallenge().recieveMasterCoinPart)
            if (currentChallenge().recieveMasterCoinPart) 
            {
                //alert('OK')
                addMasterCoinPart()
                
            }

            if(!completedArray.includes(titleName))
            {
                completedArray.push(titleName)
                areaName.remove()
            }

            console.log(numOfCurrentPoints)
            //alert(+currentChallenge().points)
            setPoints(+currentChallenge().points)
            
        }
        else
        {
            nQuestion += 1
            renderContent(typeModal)
        }
    }
    else
    {
        alert("Você errou. Tente novamente")
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
    
    //console.log("antes: " + typeModal)
    typeModal = ""
    //console.log("depois: " + typeModal)
    nQuestion = 0
    //console.log(nQuestion)
}
challengeModal.addEventListener("hide.bs.modal", resetVariables)
/*----------------------------------------------------------------*/
