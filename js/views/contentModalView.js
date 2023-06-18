const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
/*----------------------------------------------------------------*/
export let resQuestion = ""
/*----------------------------------------------------------------*/
var introductionModal = document.getElementById("introduction")
//console.log(introductionModal)
var contentModalIntroduction = document.getElementById("contentModalIntroduction")
//console.log(contentModalIntroduction)
var contentModalChallenge = document.getElementById("contentModalChallenge")
//console.log(contentModal)
var pergunta  = document.getElementById('pergunta')
//console.log(pergunta)
/*----------------------------------------------------------------*/
introductionModal = document.getElementById("introduction")
//console.log(introductionModal)
contentModalIntroduction = document.getElementById("contentModalIntroduction")
//console.log(contentModalIntroduction)
contentModalChallenge = document.getElementById("contentModalChallenge")
//console.log(contentModal)
pergunta  = document.getElementById('pergunta')
//console.log(pergunta)

export var arrayQuiz = []
export var arraySimple = []
var contentIntroduction = ""
var youtubeLink = ""
var textLink = ""

var go = false
var requiredItemText = null
var requiredItem = null

const currentLevel = JSON.parse(localStorage.getItem('levels'))[currentLevelIndex]
const items = currentLevel.items
//console.log(items)   
/*----------------------------------------------------------------*/
let challenge = {}
/*----------------------------------------------------------------*/
export function currentChallenge()
{
    return challenge
}
/*----------------------------------------------------------------*/
import { captureFocus, nQuestion, refreshAreas, resetVariables} from "./levelmodal.js"
import {titleName, salaDesafiosDefaultQuiz, salaDesafiosDefaultSimple} from "./levelmodal.js"
/*----------------------------------------------------------------*/
import { itemsArray, isMasterCoinCompleted, changeView, numOfMasterCoinParts} from "./level1View.js"
/*----------------------------------------------------------------*/
export function renderContent(data_type_question)
{
    contentIntroduction = ""
    contentModalIntroduction.innerHTML = contentIntroduction
    let contentChallenge = ""
    contentModalChallenge.innerHTML = contentChallenge

    arrayQuiz =  salaDesafiosDefaultQuiz.filter( (element) => {return element.title == titleName})
    //console.log(arrayQuiz)
    arraySimple = salaDesafiosDefaultSimple.filter( (element) => {return element.title == titleName})
    //console.log(arraySimple)

    let titleTxtInt = document.getElementById("principalTitleInt");//console.log(titleTxtInt)
    let subTxtInt = document.getElementById("subTitleInt");//console.log(subTxtInt)
    let titleTxtCha = document.getElementById("principalTitleCha");//console.log(titleTxtCha)
    let subTxtCha = document.getElementById("subTitleCha");//console.log(subTxtCha)

    youtubeLink = ""
    
    if (data_type_question == "quiz")
    {
        //console.log("quiz")
    
        captureItem(arrayQuiz)

        titleTxtInt.innerHTML = titleName
        subTxtInt.innerHTML = "Conteúdo de apoio"
        

        if(requiredItem != "" || go == true)
        {
            if (itemsArray.includes(requiredItemText) || go == true)
            {

                //console.log(arrayQuiz[nQuestion])

                videoAndText(arrayQuiz)

                contentModalIntroduction.innerHTML = contentIntroduction

                titleTxtCha.innerHTML = titleName
                subTxtCha.innerHTML = `Questão ${nQuestion+1}`

                contentChallenge = 
                `
                <div class="d-flex flex-column justify-content-center p-4">
                    
                    <div class="d-flex flex-row justify-content-between">
                        <button class="col-6 customBtn rounded-pill m-1 active option1">opção 1</button>
                        <button class="col-6 customBtn rounded-pill m-1 active option2">opção 2</button>    
                    </div>
                
                    <!-- Force next columns to break to new line -->
                    <div class="w-100 d-none d-md-block">

                    </div>
                
                    <div class="d-flex flex-row justify-content-between">
                        <button class="col-6 customBtn rounded-pill m-1 active option3">opção 3</button>
                        <button class="col-6 customBtn rounded-pill m-1 active option4">opção 4</button>    
                    </div>

                </div>
                `
                contentModalChallenge.innerHTML = contentChallenge
                /*----------------------------------------------------------------*/

                let optArray = []
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

                optArray.forEach(opt => 
                {
                    opt.classList.remove("selected");
                });

                //console.log(arrayQuiz);
                challenge = arrayQuiz[nQuestion]
                //console.log(challenge)
            
                pergunta.innerHTML = challenge.quizText
            
                for(let i = 0; i < optArray.length; i++)
                {
                    //console.log(optArray[i])
                    optArray[i].innerHTML = challenge.quizAnswers[i]
                }

                //console.log(nQuestion)

                resQuestion = challenge.quizAnswer.toString()
                console.log(resQuestion)
            }
            else
            {
                window.alert("Precisa de uma moeda para jogar")                 
            }
        }
    }
    else if(data_type_question == "simple")
    {
        //console.log("simple_Answer")

        captureItem(arraySimple)

        titleTxtInt.innerHTML = titleName
        subTxtInt.innerHTML = "Conteúdo de apoio"

        if(requiredItem != "" || go == true)
        {
            if (itemsArray.includes(requiredItemText) || go == true)
            {
                
                videoAndText(arraySimple)

                challenge = arraySimple[nQuestion]
                //console.log(challenge)
                //console.log(arraySimple);
                //console.log(nQuestion)

                contentIntroduction = 
                `
                <iframe width="420" height="315"
                    src="${youtubeLink}">
                </iframe>
                `
                contentModalIntroduction.innerHTML = contentIntroduction

                subTxtCha.innerHTML = `Questão ${nQuestion+1}`

                contentChallenge = 
                `
                <div class="d-flex flex-column justify-content-center p-4">
                    
                    <div class="d-flex flex-row justify-content-center text-center">
                        <input id="simAnswer" type="text" class="col-12 customBtn rounded-pill m-1 active optionSimple" style="text-align: center">

                        </input>    
                    </div>

                </div>
                `
                contentModalChallenge.innerHTML = contentChallenge
                /*----------------------------------------------------------------*/
                

                pergunta.innerHTML = challenge.simText

                resQuestion = challenge.simAnswer
                console.log(resQuestion)
            }
            else
            {
                window.alert("Precisa de uma moeda para jogar")                 
            }
        }
    }
    else
    {
        console.log("teste")
    }
}
/*----------------------------------------------------------------*/
export function resetContent()
{
    //console.log("resetContent")
    youtubeLink=""

    contentIntroduction = 
    `
        <iframe id="video" width="420" height="315"
            src="${youtubeLink}">
        </iframe>
    `
    contentModalIntroduction.innerHTML = contentIntroduction
    resetVariables()
}
/*----------------------------------------------------------------*/
export function pauseVideo()
{
    let video = document.getElementById("video")
    //console.log(video)
    video.contentWindow.postMessage(JSON.stringify({ event: 'command', 
    func: 'stopVideo' }), '*');
}
introductionModal.addEventListener("hide.bs.modal", pauseVideo)
/*----------------------------------------------------------------*/
function captureItem(array)
{

    requiredItem = array[nQuestion].requiredItem
    //console.log(requiredItem)
    if(requiredItem == "")
    {
        go = true
    }
    else
    {
        requiredItemText = items[parseInt(requiredItem)][0]
    }
}
/*----------------------------------------------------------------*/
function refreshActions()
{
    const actions = document.querySelectorAll("area[id='actionArea']");//console.log(actions)
    const actionsArray = Array.from(actions);//console.log(actionsArray)
    actionsArray.forEach(challenge => challenge.addEventListener("click", captureActions))
}
refreshActions()
/*----------------------------------------------------------------*/
function captureActions()
{
    let temp = this.alt;//console.log(temp)
    action(temp)
}
/*----------------------------------------------------------------*/
function action(altTxt)
{
    if (altTxt == "Bau")
    {
        if (itemsArray.includes("Chave"))//abre o bau
        {    
            changeView()
            refreshAreas()
            refreshActions()
        } 
        else
        {
            alert(`Para abrir o baú você precisa da chave`)
        }
    }
    else if (altTxt == "TRAVA")
    {
        if (isMasterCoinCompleted())
        {
            changeView()
            refreshAreas()
            refreshActions()
        }
        else
        {
            alert(`Para sair você precisa de 3 Master Coins. Você tem ${numOfMasterCoinParts}`)
        }
    }
    else if (altTxt == "portaFechada")
    {
        changeView()
        refreshAreas()
        refreshActions()
    }
    else if(altTxt == "Fim")
    {
        alert("Parabéns! Você conclui")
        var myModal = new bootstrap.Modal(document.getElementById('myModal'))
        console.log(myModal)
        myModal.show()
    }
}
/*----------------------------------------------------------------*/
function videoAndText(array)
{
    if (!array[nQuestion].ytLink == "")
    {
        textLink = ""
        youtubeLink = array[nQuestion].ytLink + "&enablejsapi=1"
        //console.log(youtubeLink)

        contentIntroduction = 
        `
        <iframe width="420" height="315"
            src="${youtubeLink}">
        </iframe>
        `
    }
    else if(!array[nQuestion].expTextContent == "")
    {
        youtubeLink = ""
        textLink = array[nQuestion].expTextContent
        //console.log(textLink)

        contentIntroduction = 
        `
        <p>${textLink}</p>
        `
    }
}