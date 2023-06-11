export let resQuestion = ""
/*----------------------------------------------------------------*/
const contentModal = document.getElementById("contentModal")
//console.log(contentModal)
/*----------------------------------------------------------------*/
import {salaDesafiosDefault, captureFocus, resUser, nQuestion} from "./levelmodal.js"
/*----------------------------------------------------------------*/
export function rederContent(data_type_question)
{
    let content = ""
    contentModal.innerHTML = content

    if (data_type_question == "4_Options")
    {
        //console.log("4_Options")
        content = 
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
        contentModal.innerHTML = content
        /*----------------------------------------------------------------*/
        const pergunta  = document.getElementById('pergunta')
        //console.log(pergunta);
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
        let challeng = salaDesafiosDefault[nQuestion]
        //console.log(challeng)
    
        pergunta.innerHTML = challeng.quizText
    
        for(let i = 0; i < optArray.length; i++)
        {
            //console.log(optArray[i])
            optArray[i].innerHTML = challeng.quizAnswers[i]
        }

        console.log(nQuestion)

        resQuestion = challeng.quizAnswer.toString()
        console.log(resQuestion)
    }
    else if(data_type_question == "simple_Answer")
    {
        console.log("simple_Answer")
    }
    else
    {
        console.log("teste")
    }
}