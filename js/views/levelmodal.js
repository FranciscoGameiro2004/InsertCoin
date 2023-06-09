const pergunta  = document.getElementById('pergunta')
//console.log(pergunta);

const optArray = [];

const opt1 = document.getElementsByClassName("option1");
optArray.push(...opt1);

const opt2 = document.getElementsByClassName("option2");
optArray.push(...opt2);

const opt3 = document.getElementsByClassName("option3");
optArray.push(...opt3);

const opt4 = document.getElementsByClassName("option4");
optArray.push(...opt4);

console.log(optArray);

optArray.forEach(opt => 
{
    //console.log(opt.innerHTML);
    opt.addEventListener("click", teste)
});


const nextBtn = document.getElementById("next")
//console.log(nextBtn)

const challeng_1 = document.getElementById("PDP")
//console.log(PDP)

const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
//console.log(currentLevelIndex)
let salaDesafiosDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].challenges
//console.log(salaDesafiosDefault)

let nquestion = 0
function loadChallengs()
{
    let challeng = salaDesafiosDefault[0]
    console.log(challeng)

    pergunta.innerHTML = challeng.quizText

    for(let i = 0; i < optArray.length; i++)
    {
        //console.log(optArray[i])
        optArray[i].innerHTML = challeng.quizAnswers[i]
    }
        
}
loadChallengs()
challeng_1.addEventListener("click", loadChallengs)

nextBtn.addEventListener("click", 
{
    
})

function teste()
{
    console.log("teste")
}