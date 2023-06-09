const pergunta  = document.getElementById('pergunta')
//console.log(pergunta);

const optArray = []
//console.log(optArray)
const opt1 = document.getElementById("option1")
//console.log(opt1)
optArray.push(opt1)
const opt2 = document.getElementById("option2")
//console.log(opt2)
optArray.push(opt2)
const opt3 = document.getElementById("option3")
//console.log(opt3)
optArray.push(opt3)
const opt4 = document.getElementById("option4")
//console.log(opt4)
optArray.push(opt4)

const challeng_1 = document.getElementById("PDP")
//console.log(PDP)

function teste()
{
    console.log("teste")
}

const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
//console.log(currentLevelIndex)
let salaDesafiosDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].challenges
console.log(salaDesafiosDefault)

function loadChallengs()
{
    salaDesafiosDefault.forEach( element => 
    {
        console.log("--loadChallengs--")
        console.log(element)
        console.log(element.title)
        console.log(element.quizText)
        console.log(element.type)
        console.log(element.quizAnswers)
        console.log("--loadChallengs--")
        pergunta.innerHTML = element.quizText
        for(let i = 0; i < optArray.length; i++)
        {
            console.log(optArray[i])
            optArray[i].innerHTML = element.quizAnswers[i]
        }
    });
        
}
challeng_1.addEventListener("click", loadChallengs)

