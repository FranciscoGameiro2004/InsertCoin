export let resQuestion = ""
/*----------------------------------------------------------------*/
const introductionModal = document.getElementById("introduction")
console.log(introductionModal)
const contentModalIntroduction = document.getElementById("contentModalIntroduction")
//console.log(contentModalIntroduction)
const contentModalChallenge = document.getElementById("contentModalChallenge")
//console.log(contentModal)
const pergunta  = document.getElementById('pergunta')
//console.log(pergunta)
export var arrayQuiz = []
export var arraySimple = []
var contentIntroduction = ""
var youtubeLink = ""
/*----------------------------------------------------------------*/
import { captureFocus, nQuestion, resetVariables} from "./levelmodal.js"
import {titleName, salaDesafiosDefaultQuiz, salaDesafiosDefaultSimple} from "./levelmodal.js"
/*----------------------------------------------------------------*/
export function renderContent(data_type_question)
{
    contentIntroduction = ""
    contentModalIntroduction.innerHTML = contentIntroduction
    let contentChallenge = ""
    contentModalChallenge.innerHTML = contentChallenge

    arrayQuiz =  salaDesafiosDefaultQuiz.filter( (element) => {return element.title == titleName})
    console.log(arrayQuiz)
    arraySimple = salaDesafiosDefaultSimple.filter( (element) => {return element.title == titleName})
    console.log(arraySimple)

    youtubeLink = ""
    
    if (data_type_question == "quiz")
    {
        //console.log("quiz")

        if (!arrayQuiz[nQuestion].ytLink == "")
        {
            youtubeLink = arrayQuiz[nQuestion].ytLink
            console.log(youtubeLink)
        }
        else
        {
            youtubeLink = ""
        }

        contentIntroduction = 
        `
        <iframe width="420" height="315"
            src="${youtubeLink}">
        </iframe>
        `
        contentModalIntroduction.innerHTML = contentIntroduction


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
        let challenge = arrayQuiz[nQuestion]
        //console.log(challenge)
    
        pergunta.innerHTML = challenge.quizText
    
        for(let i = 0; i < optArray.length; i++)
        {
            //console.log(optArray[i])
            optArray[i].innerHTML = challenge.quizAnswers[i]
        }

        //console.log(nQuestion)

        resQuestion = challenge.quizAnswer.toString()
        //console.log(resQuestion)
    }
    else if(data_type_question == "simple")
    {
        console.log("simple_Answer")

        if (!arraySimple[nQuestion].ytLink == "")
        {
            youtubeLink = arraySimple[nQuestion].ytLink
            console.log(youtubeLink)
        }
        else
        {
            youtubeLink = ""
        }

        contentIntroduction = 
        `
        <iframe width="420" height="315"
            src="${youtubeLink}">
        </iframe>
        `
        contentModalIntroduction.innerHTML = contentIntroduction

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
        let challenge = arraySimple[nQuestion]
        //console.log(challenge)

        pergunta.innerHTML = challenge.simText

        resQuestion = challenge.simAnswer
        //console.log(resQuestion)
    }
    else
    {
        console.log("teste")
    }
    
}
/*----------------------------------------------------------------*/
export function resetContent()
{
    console.log("resetContent")
    youtubeLink=""

    contentIntroduction = 
    `
        <iframe width="420" height="315"
            src="${youtubeLink}">
        </iframe>
    `
    contentModalIntroduction.innerHTML = contentIntroduction
    resetVariables()
}
//introductionModal.addEventListener("hide.bs.modal", resetContent)
