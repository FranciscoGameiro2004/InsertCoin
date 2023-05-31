import * as LevelModel from '../models/LevelModel.js'
import * as UserModel from '../models/UsersModel.js'

const levelsList = JSON.parse(localStorage.getItem('levels'))

let editLevelIndex = 0
let currentLevel = levelsList[editLevelIndex]
let currentEditView = 0

let timeInSeconds = 0
let convertedTime = ''


const levelTitleForm = document.querySelector('#levelTitle')
const levelDurationForm = document.querySelector('#levelDuration')
const thumbnailForm = document.querySelector('#levelThumbnail')
const thumbnailLockedForm = document.querySelector('#levelThumbnailLocked')
const defaultViewImg = document.querySelector('#defaultViewImg')
const defaultMapText = document.querySelector('#defaultMapText')

const alternativeViewsContainer = document.querySelector('#alternativeViewsContainer')

const levelsContainer = document.querySelector('#levelsContainer')
levelsContainer.innerHTML = ''

const challengesContainer = document.querySelector('#challengesContainer')
challengesContainer.innerHTML = ''

levelsList.forEach((level, levelIndex) => {
    let levelThumbnail = ''
    let btnAdmin = ''

    if (parseInt(UserModel.getUserLevel())-1 >= levelIndex){
        levelThumbnail = level.thumbnail
    } else {
        levelThumbnail = level.thumbnailLocked
    }

    if (JSON.parse(sessionStorage.getItem('userLogged')).type === 'admin'){
        btnAdmin =
        `
        <div class="text-center">
            <a class="btn btn-primary btn-sm adminEditLevel" href="#" role="button" data-bs-toggle="modal" data-bs-target="#editLevelModal">
                Editar
                <p hidden class="editLevelIndex">${levelIndex}</p>
            </a>
            <a class="btn btn-danger btn-sm" href="#" role="button">Remover</a>
        </div>
                        
        `

        document.querySelector('#addLevelBtn').innerHTML =
        `
        <a class="btn btn-success btn-sm" role="button">Adicionar Nível</a>
        `

    }

    levelsContainer.innerHTML += `
    
    <div class="card col-6 col-sm-4" style="width:18rem; border: none;">
        <a href="${level.link}" class="level">
            <div alt="${level.title}">
                <img src="${levelThumbnail}" class="card-img-top thumbnail">
            </div>
            
            <div class="card-body">
                <h5 class="lvlTitle card-title text-center">${level.title}</h5>
            </div>
        </a>
    </div>

    `

    if (parseInt(UserModel.getUserLevel())-1 < levelIndex){
        document.querySelectorAll('.level')[levelIndex].removeAttribute('href')
    }

    const points = JSON.parse(sessionStorage.getItem('userLogged')).points[levelIndex]
    if (points != 0){
        document.querySelectorAll('.card-body')[levelIndex].innerHTML +=
        `<h6 class="lvlPoints card-subtitle mb-2 text-muted text-center">Melhor pontuação: ${points}</h6>
        ${btnAdmin}            
        `
    } else {
        document.querySelectorAll('.card-body')[levelIndex].innerHTML +=
        `
        ${btnAdmin}
        `
    }

    document.querySelectorAll('.adminEditLevel').forEach(level => {
        level.addEventListener('click', (event)=>{
            editLevelIndex = parseInt(level.childNodes[1].innerHTML)
            currentLevel = levelsList[editLevelIndex]
            timeInSeconds = levelsList[editLevelIndex].timeInSeconds
            convertedTime = `${parseInt(timeInSeconds/60)<10 ? '0' : ''}${parseInt(timeInSeconds/60)}:${(parseInt(timeInSeconds-timeInSeconds/60))<10 ? '0' : ''}${timeInSeconds-parseInt(timeInSeconds/60)*60}`
            updateForm(editLevelIndex, currentEditView)
        })
    });
});

document.querySelectorAll('.viewIndexBtn').forEach(button => {
    button.addEventListener('click', ()=>{
        currentEditView = button.childNodes[0].innerHTML - 1
        document.querySelectorAll('.viewIndexBtn').forEach((element, btnIndex) => {
            if (btnIndex == currentEditView){
                element.setAttribute('class', 'viewIndexBtn page-item active')
            } else {
                element.setAttribute('class', 'viewIndexBtn page-item')
            }
        });
        updateForm(editLevelIndex, currentEditView)
    })
});

function updateForm(levelIndex, currentViewIndex){
    levelTitleForm.value = levelsList[levelIndex].title
            levelDurationForm.value = convertedTime
            thumbnailForm.setAttribute('src', levelsList[levelIndex].thumbnail)
            thumbnailLockedForm.setAttribute('src', levelsList[levelIndex].thumbnailLocked)
            defaultViewImg.setAttribute('src', levelsList[levelIndex].defaultViews[currentViewIndex])
            console.log(defaultMapText)
            defaultMapText.innerHTML = levelsList[levelIndex].defaultMaps[currentViewIndex]

            alternativeViewsContainer.innerHTML = ''
            try {
                levelsList[levelIndex].alternateViews[currentViewIndex].forEach((view, viewIndex) => {
                console.log(view)
                if (view) {
                    console.log(view)
                    alternativeViewsContainer.innerHTML += `
                <div class="alternativeViewContainer">
                        <p hidden class="viewIndex">${viewIndex}</p>
                        <img src="${view}">
                    <br>
                    <label>ImageMap associada:</label>
                    <textarea required class="form-control " cols="30"></textarea>
                    <a class="btn btn-danger btn-sm removeAlternativeView" role="button">Remover vista alternativa</a>
                    <hr>
                </div>`
                }
            });
            } catch {
                
            }
            
            challengesContainer.innerHTML = ''
            console.log(currentLevel.challenges.length)
            currentLevel.challenges.forEach(challenge => {
                let variableChellengeForm = ''

                switch(currentLevel.challenges.type){
                    case 'quiz':    variableChellengeForm =
                                    `
                                    <div class="quizForm" hidden>
                                        <label for="quizQuestionTitle-0">Pergunta</label>
                                        <input type="text" name="questionTitle" id="questionTitle-0">
                                        <br>
                                        <label for="quizCorrectAnswer-0">Resposta Correta</label>
                                        <input type="text" name="quizCorrectAnswer" id="quizCorrectAnswer-0">
                                        <br>
                                        <label for="quizQuestionTitle-0">Resposta Incorreta #1</label>
                                        <input type="text" name="quizIncorrectAnswer1" id="quizIncorrectAnswer0-0">
                                        <br>
                                        <label for="questionTitle-0">Resposta Incorreta #2</label>
                                        <input type="text" name="quizIncorrectAnswer2" id="quizIncorrectAnswer1-0">
                                        <br>
                                        <label for="questionTitle-0">Resposta Incorreta #3</label>
                                        <input type="text" name="quizIncorrectAnswer3" id="quizIncorrectAnswer2-0">
                                        <hr>
                                    </div>
                                    `
                                    break;
                    
                    case 'fill-in-blanks':  variableChellengeForm =
                                            `
                                            <div class="fInBlkForm" hidden>
                                                <label for="fInBlkText-1">Texto (em cada espaço em branco, deixar '«»'):</label>
                                                <textarea required class="form-control" name="fInBlkText" id="fInBlkText-1" cols="30"></textarea>
                                                <br>
                                                <label for="fInBlkTerm0-1">Termo 1</label>
                                                <input type="text" name="fInBlkTerm0" id="fInBlkTerm0-1">
                                                <br>
                                                <label for="fInBlkTerm1-1">Termo 2</label>
                                                <input type="text" name="fInBlkTerm1" id="fInBlkTerm1-1">
                                                <hr>
                                            </div>
                                            `
                                            break;

                    default:    currentLevel.challenges.type = 'simple'
                                variableChellengeForm =
                                `
                                <div class="simpleForm">
                                    <form name="simpleForm-2">
                                        <label for="simpleQuestion-2">Pergunta</label>
                                        <input type="text" name="simpleQuestion" id="simpleQuestion-2">
                                        <br>
                                        <label for="simpleAnswer-2">Resposta</label>
                                        <input type="text" name="simpleAnswer" id="simpleAnswer-2">
                                    </form>
                                    <hr>
                                </div>
                                `
                }

                challengesContainer.innerHTML += 
                `
                <div class="challenge">
                    <p hidden class="challengeIndex">0</p>
                    <label for="challengeTitle">Título do desafio:</label>
                    <input type="text" name="challengeTitle" id="challengeTitle" class="text" value="${challenge.title}"></input>
                    <br>
                    <label for="challengeType">Tipo de desafio</label>
                    <select name="challengeType" id="challengeType" value="${challenge.type}">
                        <optgroup label="Avaliativos">
                            <option value="fill-in-blanks">Preenchimento</option>
                            <option value="quiz">Escolha múltipla</option>
                            <option value="simple">Resposta símples</option>
                            <option value="crossed">Palavras cruzadas</option>
                        </optgroup>
                        <optgroup label="Expositivos">
                            <option value="youtube-video">Vídeo do Youtube</option>
                            <option value="text">Texto</option>
                        </optgroup>
                    </select>
                    <br>
                    <label for="challengeSequence">Sequência:</label>
                    <select name="challengeSequence" id="challengeSequence" value="${challenge.sequence}">
                        <option value="">Sem Sequência</option>
                        <option value="0">0 - Desafio</option>
                    </select>
                    <br>
                    <label for="challengeRequiredItem">Item pré-requerido:</label>
                    <select name="challengeRequiredItem" id="challengeRequiredItem" value="${challenge.requiredItem}">
                        <option value="">Sem item pré-requerido</option>
                    </select>
                    <br>
                    <label for="challengePoints">Pontos:</label>
                    <input type="number" name="challengePoints" id="challengePoints" value="${challenge.points}">
                    <br>
                    <label for="challengeReward">Prémio:</label>
                    <select name="challengeReward" id="challengeReward" value="${challenge.reward}">
                        <option value="">Sem prémio a atribuir</option>
                        <option value="0">Prémio</option>
                    </select>
                    <br>
                    <label for="challengeItemToRecieve" value="${challenge.reward}">Item a receber:</label>
                    <select name="challengeItemToRecieve" id="challengeItemToRecieve">
                        <option value="">Sem item a receber</option>
                        <option value="0">Item</option>
                    </select>
                    ${variableChellengeForm}
                </div>
                `
            });
}

levelDurationForm.addEventListener('change', ()=>{
    convertedTime = levelDurationForm.value
})

document.querySelectorAll('.submitChanges').forEach(button => {
    button.addEventListener('click', (event)=>{
        console.log('UPDATE LEVEL')

        const levelIndex = editLevelIndex
        const title = levelTitleForm.value
        const thumbnail = thumbnailForm.value
        const thumbnailLocked = thumbnailLockedForm.value
        const timeInSeconds = +convertedTime.substring(0,2)*60 + +convertedTime.substring(3,5)
        const challenges = []
        const link = ''

        alert(timeInSeconds)

        //LevelModel.updateLevel(levelIndex, title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link, defaultViews)
    })
});