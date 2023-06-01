import * as LevelModel from '../models/LevelModel.js'
import * as UserModel from '../models/UsersModel.js'
import * as ChallengeModel from '../models/ChallengeModel.js'

const levelsList = JSON.parse(localStorage.getItem('levels'))

let editLevelIndex = 0
let currentLevel = levelsList[editLevelIndex]
let currentEditView = 0

let timeInSeconds = 0
let convertedTime = ''

let imgDefaultViews = ['','','','']
let imgAlternateViews = [[''],[''],[''],['']]
let imgDefaultMaps = ['','','','']
let imgAlternateMaps = [[''],[''],[''],['']]


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
    currentLevel.defaultViews.forEach((view, index) => {
        imgDefaultViews[index] = view
    });
    currentLevel.defaultMaps.forEach((map, index) => {
        imgDefaultMaps[index] = map
    });
    currentLevel.alternateViews.forEach((view, viewIndex) => {
        try{
            view.forEach((image, imgIndex) => {
                imgAlternateViews[viewIndex][imgIndex] = image
            });
        } catch {
            console.log('View is null')
        }
    });
    currentLevel.alternateMaps.forEach((view, viewIndex) => {
        try{
            view.forEach((map, mapIndex) => {
                imgAlternateMaps[viewIndex][mapIndex] = map
            });
        } catch {
            console.log('View is null')
        }

        
    });
    console.log(imgDefaultViews)
    console.log(imgDefaultMaps)
    console.log(imgAlternateViews)
    console.log(imgAlternateMaps)   

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
            currentLevel.challenges.forEach(challenge => {

                let variableChellengeForm = ''

                switch(challenge.type){
                    case 'quiz':    variableChellengeForm =
                                    `
                                    <div class="quizForm">
                                        <label for="quizQuestionTitle-0">Pergunta</label>
                                        <input type="text" name="questionTitle" id="questionTitle" value="${challenge.quizText}">
                                        <br>
                                        <label for="quizCorrectAnswer-0">Resposta Correta</label>
                                        <input type="text" name="quizCorrectAnswer" id="quizCorrectAnswer" value="${challenge.quizAnswers[0]}">
                                        <br>
                                        <label for="quizQuestionTitle-0">Resposta Incorreta #1</label>
                                        <input type="text" name="quizIncorrectAnswer1" id="quizIncorrectAnswer0" value="${challenge.quizAnswers[1]}">
                                        <br>
                                        <label for="questionTitle-0">Resposta Incorreta #2</label>
                                        <input type="text" name="quizIncorrectAnswer2" id="quizIncorrectAnswer1" value="${challenge.quizAnswers[2]}">
                                        <br>
                                        <label for="questionTitle-0">Resposta Incorreta #3</label>
                                        <input type="text" name="quizIncorrectAnswer3" id="quizIncorrectAnswer2" value="${challenge.quizAnswers[3]}">
                                        <hr>
                                    </div>
                                    `
                                    break;
                    
                    case 'fill-in-blanks':  variableChellengeForm =
                                            `
                                            <div class="fInBlkForm">
                                                <label for="fInBlkText-1">Texto (em cada espaço em branco, deixar '«»'):</label>
                                                <textarea required class="form-control" name="fInBlkText" id="fInBlkText" cols="30"></textarea>
                                                <br>
                                                <label for="fInBlkTerm0-1">Termo 1</label>
                                                <input type="text" name="fInBlkTerm0" id="fInBlkTerms">
                                            </div>
                                            `
                                            break;

                    default:    challenge.type = 'simple'
                                variableChellengeForm =
                                `
                                <div class="simpleForm">
                                    <form name="simpleForm-2">
                                        <label for="simpleQuestion-2">Pergunta</label>
                                        <input type="text" name="simpleQuestion" id="simpleQuestion" value="${challenge.simText}">
                                        <br>
                                        <label for="simpleAnswer-2">Resposta</label>
                                        <input type="text" name="simpleAnswer" id="simpleAnswer" value="${challenge.simAnswer}">
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
                    <input type="text" name="challengeTitle" id="challengeTitle" class="text" value="${challenge.title}">
                    <br>
                    <label for="challengeType">Tipo de desafio</label>
                    <select name="challengeType" id="challengeType">
                        <optgroup label="Avaliativos">
                            <option ${challenge.type === 'fill-in-blanks' ? 'selected' : ''} value="fill-in-blanks">Preenchimento</option>
                            <option ${challenge.type === 'quiz' ? 'selected' : ''} value="quiz">Escolha múltipla</option>
                            <option ${challenge.type === 'simple' ? 'selected' : ''} value="simple">Resposta símples</option>
                            <option ${challenge.type === 'crossed' ? 'selected' : ''} value="crossed">Palavras cruzadas</option>
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
                    <label for="challengeItemToRecieve" value="${challenge.itemToRecieve}">Item a receber:</label>
                    <select name="challengeItemToRecieve" id="challengeItemToRecieve">
                        <option value="">Sem item a receber</option>
                        <option value="0">Item</option>
                    </select>
                    <div class="variableChallengeContainer">
                        ${variableChellengeForm}
                    <div>
                    
                `

            
            });

            updateChallengeForms()
}

levelDurationForm.addEventListener('change', ()=>{
    convertedTime = levelDurationForm.value
})

document.querySelector('#addChallenge').addEventListener('click', ()=>{
    alert('ADICIONAR DESAFIO')
    challengesContainer.innerHTML += 
                `
                <div class="challenge addedChallenge">
                    <p hidden class="challengeIndex">0</p>
                    <label for="challengeTitle">Título do desafio:</label>
                    <input type="text" name="challengeTitle" id="challengeTitle" class="text" value=""></input>
                    <br>
                    <label for="challengeType">Tipo de desafio</label>
                    <select name="challengeType" id="challengeType" value="">
                        <optgroup label="Avaliativos">
                            <option value="fill-in-blanks">Preenchimento</option>
                            <option selected value="quiz">Escolha múltipla</option>
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
                    <select name="challengeSequence" id="challengeSequence" value="">
                        <option value="">Sem Sequência</option>
                        <option value="0">0 - Desafio</option>
                    </select>
                    <br>
                    <label for="challengeRequiredItem">Item pré-requerido:</label>
                    <select name="challengeRequiredItem" id="challengeRequiredItem" value="">
                        <option value="">Sem item pré-requerido</option>
                    </select>
                    <br>
                    <label for="challengePoints">Pontos:</label>
                    <input type="number" name="challengePoints" id="challengePoints" value="">
                    <br>
                    <label for="challengeReward">Prémio:</label>
                    <select name="challengeReward" id="challengeReward" value="">
                        <option value="">Sem prémio a atribuir</option>
                        <option value="0">Prémio</option>
                    </select>
                    <br>
                    <label for="challengeItemToRecieve" value="">Item a receber:</label>
                    <select name="challengeItemToRecieve" id="challengeItemToRecieve">
                        <option value="">Sem item a receber</option>
                        <option value="0">Item</option>
                    </select>
                    <div class="variableChallengeContainer">
                        <div class="quizForm">
                            <label for="quizQuestionTitle-0">Pergunta</label>
                            <input type="text" name="questionTitle" id="questionTitle" value="">
                            <br>
                            <label for="quizCorrectAnswer-0">Resposta Correta</label>
                            <input type="text" name="quizCorrectAnswer" id="quizCorrectAnswer" value="">
                            <br>
                            <label for="quizQuestionTitle-0">Resposta Incorreta #1</label>
                            <input type="text" name="quizIncorrectAnswer1" id="quizIncorrectAnswer0" value="">
                            <br>
                            <label for="questionTitle-0">Resposta Incorreta #2</label>
                            <input type="text" name="quizIncorrectAnswer2" id="quizIncorrectAnswer1" value="">
                            <br>
                            <label for="questionTitle-0">Resposta Incorreta #3</label>
                            <input type="text" name="quizIncorrectAnswer3" id="quizIncorrectAnswer2" value="">
                            <hr>
                        </div>
                    <div>
                    
                </div>
                    
                </div>
                `
    
    updateChallengeForms()
})

document.querySelectorAll('.submitChanges').forEach(button => {
    button.addEventListener('click', (event)=>{
        console.log('UPDATE LEVEL')

        const levelIndex = editLevelIndex
        const title = levelTitleForm.value
        const thumbnail = thumbnailForm.src
        const thumbnailLocked = thumbnailLockedForm.src
        const timeInSeconds = +convertedTime.substring(0,2)*60 + +convertedTime.substring(3,5)
        let challenges = []
        const link = levelIndex
        const defaultViews = ['']
        const alternativeViews = [['']]
        const defaultPreRequisite = ['']
        const alternatePreRequisite = [['']]

        document.querySelectorAll('.challenge').forEach(challenge => {
            const title = challenge.querySelector('#challengeTitle').value
            const type = challenge.querySelector('#challengeType').value
            const sequence = challenge.querySelector('#challengeSequence').value
            const requiredItem = challenge.querySelector('#challengeRequiredItem').value
            const points = challenge.querySelector('#challengePoints').value
            const reward = challenge.querySelector('#challengeReward').value
            const itemToRecieve = challenge.querySelector('#challengeItemToRecieve').value
            

            if (type === 'quiz'){
                const quizText = challenge.querySelector('#questionTitle').value
                const quizAnswers = [challenge.querySelector('#quizCorrectAnswer').value, challenge.querySelector('#quizIncorrectAnswer0').value, challenge.querySelector('#quizIncorrectAnswer1').value, challenge.querySelector('#quizIncorrectAnswer2').value]
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, '', [], quizText, quizAnswers, '', ''))
            } else if (type === 'simple'){
                const simText = challenge.querySelector('#simpleQuestion').value
                const simAnswer = challenge.querySelector('#simpleAnswer').value
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, '', [], '', [], simText, simAnswer))
            } else if (type === 'fill-in-blanks'){
                const fibText = challenge.querySelector('#fInBlkText').value
                const fibAnswers = challenge.querySelector('#fInBlkTerms').value.split(';')
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, fibText, fibAnswers, '', [], '', ''))
            }
        });

        //LevelModel.updateLevel(levelIndex, title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link, defaultViews, alternativeViews,defaultViews, alternativeViews, defaultPreRequisite, alternatePreRequisite)
        console.log('OK')
    })
});

function updateChallengeForms(){
    document.querySelectorAll('.challenge').forEach(challengeContainer => {
        challengeContainer.childNodes[11].addEventListener('change', ()=>{
            const challengeType = challengeContainer.childNodes[11].value
            const variableContainer = challengeContainer.childNodes[43]

            alert(challengeType)

            if (challengeType === 'quiz'){
                variableContainer.innerHTML =
                `
                <div class="quizForm">
                    <label for="quizQuestionTitle">Pergunta</label>
                    <input type="text" name="questionTitle" id="questionTitle" value="">
                    <br>
                    <label for="quizCorrectAnswer">Resposta Correta</label>
                    <input type="text" name="quizCorrectAnswer" id="quizCorrectAnswer" value="">
                    <br>
                    <label for="quizIncorrectAnswer0">Resposta Incorreta #1</label>
                    <input type="text" name="quizIncorrectAnswer1" id="quizIncorrectAnswer0" value="">
                    <br>
                    <label for="quizIncorrectAnswer1">Resposta Incorreta #2</label>
                    <input type="text" name="quizIncorrectAnswer2" id="quizIncorrectAnswer1" value="">
                    <br>
                    <label for="quizIncorrectAnswer2">Resposta Incorreta #3</label>
                    <input type="text" name="quizIncorrectAnswer3" id="quizIncorrectAnswer2" value="">
                    <hr>
                </div>
                `
            } else if (challengeType === 'fill-in-blanks'){
                variableContainer.innerHTML =
                `
                <div class="fInBlkForm">
                    <label for="fInBlkText">Texto (em cada espaço em branco, deixar '«»'):</label>
                    <textarea required class="form-control" name="fInBlkText" id="fInBlkText" cols="30"></textarea>
                    <br>
                    <label for="fInBlkTerms">Termo 1</label>
                    <input type="text" name="fInBlkTerms" id="fInBlkTerms">
                    <hr>
                </div>
                `
            } else if (challengeType === 'simple'){
                variableContainer.innerHTML =
                `
                <div class="simpleForm">
                    <form name="simpleForm">
                        <label for="simpleQuestion-2">Pergunta</label>
                        <input type="text" name="simpleQuestion" id="simpleQuestion" value="">
                        <br>
                        <label for="simpleAnswer">Resposta</label>
                        <input type="text" name="simpleAnswer" id="simpleAnswer" value="">
                    </form>
                    <hr>
                </div>
                `
            }
        })
    });
}

document.querySelector('#thumbnailContainerInput').addEventListener('change', ()=>{
    const file = document.querySelector('#thumbnailContainerInput').files[0]
    const reader = new FileReader()

    reader.addEventListener('load', ()=>{
        document.querySelector('#levelThumbnail').src = reader.result
    })
    reader.readAsDataURL(file)
})

document.querySelector('#thumbnailLockedContainerInput').addEventListener('change', ()=>{
    const file = document.querySelector('#thumbnailLockedContainerInput').files[0]
    const reader = new FileReader()

    reader.addEventListener('load', ()=>{
        document.querySelector('#levelThumbnailLocked').src = reader.result
    })
    reader.readAsDataURL(file)
})