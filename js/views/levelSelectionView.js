import * as LevelModel from '../models/LevelModel.js'
import * as UserModel from '../models/UsersModel.js'
import * as ChallengeModel from '../models/ChallengeModel.js'

let levelsList = JSON.parse(localStorage.getItem('levels'))

let editLevelIndex = 0
let currentLevel = levelsList[editLevelIndex]
let currentEditView = 0

let timeInSeconds = 0
let convertedTime = ''

let imgDefaultViews = ['','','','']
let imgAlternateViews = [[''],[''],[''],['']]
let imgDefaultMaps = ['','','','']
let imgAlternateMaps = [[''],[''],[''],['']]
let needToChangeDefMap = true


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
        <a class="btn btn-success btn-sm disabled" disabled role="button" >Adicionar Nível [Em breve...]</a>
        `

    }

    levelsContainer.innerHTML += `
    
    <div class="card col-6 col-sm-4" style="width:18rem; border: none;">
        <a href="level1.html?level=${levelIndex}" class="level">
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
            convertedTime = `${parseInt(timeInSeconds/60)<10 ? '0' : ''}${parseInt(timeInSeconds/60)}:${(timeInSeconds-parseInt(timeInSeconds/60)*60)<10 ? '0' : ''}${timeInSeconds-parseInt(timeInSeconds/60)*60}`
            updateForm(editLevelIndex, currentEditView)
            updateImageMapArray()
            updateItemsContainer()
        })
    });
});

document.querySelectorAll('.viewIndexBtn').forEach(button => {
    button.addEventListener('click', ()=>{
        updateImageMapArray()

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
    needToChangeDefMap = false
    currentLevel.defaultViews.forEach((view, index) => {
        imgDefaultViews[index] = view
    });
    currentLevel.defaultMaps.forEach((map, index) => {
        imgDefaultMaps[index] = map
    });
    defaultMapText.value = imgDefaultMaps[currentEditView]
    currentLevel.alternateViews.forEach((view, viewIndex) => {
        try{
            view.forEach((image, imgIndex) => {
                imgAlternateViews[viewIndex][imgIndex] = image
            });
        } catch {
            console.log('View is null')
        }
    });currentEditView
    currentLevel.alternateMaps.forEach((view, viewIndex) => {
        try{
            view.forEach((map, mapIndex) => {
                imgAlternateMaps[viewIndex][mapIndex] = map
            });
        } catch {
            console.log('Map is null')
        }
    });
    needToChangeDefMap = true
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
                if (levelsList[levelIndex].alternateViews[currentEditView] !== ['']){
                    levelsList[levelIndex].alternateViews[currentEditView].forEach((view, viewIndex) => {
                    console.log(view)
                    if (view) {
                        console.log(view)
                        alternativeViewsContainer.innerHTML += `
                    <div class="alternativeViewContainer">
                        <p hidden class="viewIndex">${viewIndex}</p>
                        <img class="alternativeViewImg" src="${view}">
                        <input type="file" name="" class="alternateViewInput">
                        <br>
                        <label>ImageMap associada:</label>
                        <textarea required class="form-control alternativeImageMap" cols="30"></textarea>
                        <a class="btn btn-danger btn-sm removeAlternativeView" role="button">
                            Remover vista alternativa
                            <p hidden class="alternativeViewIndex">${viewIndex}</p>
                        </a>
                        <hr>
                    </div>`
                    }
                    });
                }
                addRemoveAlternativeViews()
                updateImageMapArray()
            } catch {
                
            }

            document.querySelectorAll('.alternativeViewContainer').forEach((container, containerIndex) => {
                container.querySelector('.alternateViewInput').addEventListener('change', ()=>{
                    console.log('ok')
                    const file = container.querySelector('.alternateViewInput').files[0]
                    const reader = new FileReader()
                
                    reader.addEventListener('load', ()=>{
                        container.querySelector('.alternativeViewImg').src = reader.result
                        imgAlternateViews[currentEditView][containerIndex] = reader.result
                    })
                    reader.readAsDataURL(file)
                })
                
            });
            
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
                                                <label for="fInBlkText">Texto (em cada espaço em branco, deixar '«»'):</label>
                                                <textarea required class="form-control" name="fInBlkText" id="fInBlkText" cols="30">${challenge.fibText}</textarea>
                                                <br>
                                                <label for="fInBlkTerms">Termo 1</label>
                                                <input type="text" name="fInBlkTerms" id="fInBlkTerms" value="${challenge.fibAnswers.join(';')}">
                                                <hr>
                                            </div>
                                            `
                                            break;

                    case 'youtube-video':   variableChellengeForm =
                                            `
                                            <div class="youtubeForm">
                                                <label for="youtubeLink">Link do vídeo do Youtube:</label>
                                                <input type="url" name="youtubeLink" id="youtubeLink" value="${challenge.ytLink}">
                                                <br>
                                                <!--ERRO NO IFRAME DO YT-->
                                                <!--<iframe width="560" height="315" src="${challenge.ytLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
                                                <hr>
                                            </div>
                                            `
                                            break;
                    
                    case 'text':    variableChellengeForm =
                                    `
                                    <div class="textForm">
                                        <label for="expTextContent">Texto:</label>
                                        <textarea required class="form-control" name="expTextContent" id="expTextContent" cols="30">${challenge.expTextContent}</textarea>
                                        <hr>
                                    </div>
                                    `
                                    break;

                    default:    challenge.type = 'simple'
                                variableChellengeForm =
                                `
                                <div class="simpleForm">
                                    <form name="simpleForm">
                                        <label for="simpleQuestion">Pergunta</label>
                                        <input type="text" name="simpleQuestion" id="simpleQuestion" value="${challenge.simText}">
                                        <br>
                                        <label for="simpleAnswer">Resposta</label>
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
                    <label for="recieveMasterCoinPart">Ganha parte da moeda mestre?</label>
                    <select name="recieveMasterCoinPart" id="recieveMasterCoinPart" value="">
                        <option value="true">Sim</option>
                        <option selected value="false">Não</option>
                    </select>
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
                    <select name="challengeSequence" id="challengeSequence" class="sequenceOptionsContainer" value="${challenge.sequence}">
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
                    <br>
                    <label for="ytLinkInput">Link Youtube:</label>
                    <input type="text" name="ytLinkInput" id="ytLinkInput" class="text" value="${challenge.ytLink}"></input>
                    <br>
                    <label for="textoExpInput">Texto:</label>
                    <input type="text" name="textoExpInput" id="textoExpInput" class="text" value="${challenge.expTextContent}"></input>
                    <div class="simpleForm">
                    <div class="variableChallengeContainer">
                        ${variableChellengeForm}
                    <div>
                    
                `
                updateSequenceOptions()
            
            });

            updateChallengeForms()
            updateImageMapArray()
}

levelDurationForm.addEventListener('change', ()=>{
    convertedTime = levelDurationForm.value
})

document.querySelector('#addChallenge').addEventListener('click', ()=>{
    challengesContainer.innerHTML += 
                `
                <div class="challenge addedChallenge">
                    <p hidden class="challengeIndex">0</p>
                    <label for="challengeTitle">Título do desafio:</label>
                    <input type="text" name="challengeTitle" id="challengeTitle" class="text" value=""></input>
                    <br>
                    <label for="recieveMasterCoinPart">Ganha parte da moeda mestre?</label>
                    <select name="recieveMasterCoinPart" id="recieveMasterCoinPart" value="">
                        <option value="true">Sim</option>
                        <option selected value="false">Não</option>
                    </select>
                    <br>
                    <label for="challengeType">Tipo de desafio</label>
                    <select name="challengeType" id="challengeType" value="">
                        <optgroup label="Avaliativos">
                            <option value="fill-in-blanks">Preenchimento</option>
                            <option selected value="quiz">Escolha múltipla</option>
                            <option value="simple">Resposta símples</option>
                            <option value="crossed">Palavras cruzadas</option>
                        </optgroup>
                    </select>
                    <br>
                    <label for="challengeSequence">Sequência:</label>
                    <select name="challengeSequence" id="challengeSequence" class="sequenceOptionsContainer" value="">
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
                    <label for="ytLinkInput">Link Youtube:</label>
                        <input type="text" name="ytLinkInput" id="ytLinkInput" class="text"></input>
                        <label for="textoExpInput">Texto:</label>
                        <input type="text" name="textoExpInput" id="textoExpInput" class="text"></input>
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
    updateSequenceOptions()
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
        const defaultViews = imgDefaultViews
        const alternativeViews = imgAlternateViews
        const defaultMaps = imgDefaultMaps
        console.log(defaultMaps)
        const alternativeMaps = imgAlternateMaps

        const defaultPreRequisite = ['']
        const alternatePreRequisite = [['']]

        const items = []
        document.querySelectorAll('.itemContainer').forEach((itemContainer) => {
            const itemName = itemContainer.querySelector('#itemName').value
            const itemImg = itemContainer.querySelector('#itemImg').src
            items.push([itemName, itemImg])
            console.log([itemName, itemImg])
        });

        document.querySelectorAll('.challenge').forEach(challenge => {
            const title = challenge.querySelector('#challengeTitle').value
            const type = challenge.querySelector('#challengeType').value
            const sequence = challenge.querySelector('#challengeSequence').value
            const requiredItem = String(challenge.querySelector('#challengeRequiredItem').value) 
            const points = challenge.querySelector('#challengePoints').value
            const reward = challenge.querySelector('#challengeReward').value
            const itemToRecieve = challenge.querySelector('#challengeItemToRecieve').value

            const ytLink = challenge.querySelector('#ytLinkInput').value
            alert(ytLink)
            const expTextContent = challenge.querySelector('#textoExpInput').value

            const recieveMasterCoinPart = Boolean(challenge.querySelector('#recieveMasterCoinPart').value)
            

            if (type === 'quiz'){
                const quizText = challenge.querySelector('#questionTitle').value
                const quizAnswers = [challenge.querySelector('#quizCorrectAnswer').value, challenge.querySelector('#quizIncorrectAnswer0').value, challenge.querySelector('#quizIncorrectAnswer1').value, challenge.querySelector('#quizIncorrectAnswer2').value]
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve,   '',        [],     quizText, quizAnswers,        '',      '',        '',     ytLink,             expTextContent, recieveMasterCoinPart))
            } else if (type === 'simple'){                /*title, type, sequence, requiredItem, points, reward, itemToRecieve, fibText, fibAnswers, quizText, quizAnswers,quizAnswer, simText, simAnswer, ytLink, expTextContent, recieveMasterCoinPart*/
                const simText = challenge.querySelector('#simpleQuestion').value
                const simAnswer = challenge.querySelector('#simpleAnswer').value
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, '', [], '', [], simText, simAnswer, ytLink, expTextContent, recieveMasterCoinPart))
            } else if (type === 'fill-in-blanks'){
                const fibText = challenge.querySelector('#fInBlkText').value
                const fibAnswers = challenge.querySelector('#fInBlkTerms').value.split(';')
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, fibText, fibAnswers, '', [], '', '', ytLink, expTextContent, recieveMasterCoinPart))
            } /* else if (type === 'crossed'){

            } else if (type === 'youtube-video') {
                const ytLink = challenge.querySelector('#youtubeLink').value
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, '', [], '', [], '', '', ytLink, '', recieveMasterCoinPart))
            } else if (type === 'text'){
                const expTextContent = challenge.querySelector('#expTextContent')
                challenges.push(ChallengeModel.addChallenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, '', [], '', [], '', '', '', '', recieveMasterCoinPart))
            } */
        });

        LevelModel.updateLevel(levelIndex, title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link, defaultViews, alternativeViews,defaultMaps, alternativeMaps, defaultPreRequisite, alternatePreRequisite, items)

        levelsList = JSON.parse(localStorage.getItem('levels'))
        currentLevel = levelsList[editLevelIndex]
        console.log(currentLevel)
        updateItemsContainer()
    })
});

function updateChallengeForms(){
    document.querySelectorAll('.challenge').forEach(challengeContainer => {
        challengeContainer.querySelector('#challengeType').addEventListener('change', ()=>{
            console.log(challengeContainer.childNodes)
            const challengeType = challengeContainer.querySelector('#challengeType').value
            const variableContainer = challengeContainer.querySelector('.variableChallengeContainer')

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
                        <label for="simpleQuestion">Pergunta</label>
                        <input type="text" name="simpleQuestion" id="simpleQuestion" value="">
                        <br>
                        <label for="simpleAnswer">Resposta</label>
                        <input type="text" name="simpleAnswer" id="simpleAnswer" value="">
                    </form>
                    <hr>
                </div>
                `
            } else if (challengeType === 'crossed'){

            } else if (challengeType === 'youtube-video'){
                variableContainer.innerHTML =
                `
                <div class="youtubeForm">
                    <label for="youtubeLink">Link do vídeo do Youtube:</label>
                    <input type="url" name="youtubeLink" id="youtubeLink" value="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <br>
                    <!--ERRO NO IFRAME DO YT-->
                    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
                    <hr>
                </div>
                `
                changeYoutubePreview()
            } else if (challengeType === 'text'){
                variableContainer.innerHTML =
                `
                <div class="textForm">
                    <label for="expTextContent">Texto:</label>
                    <textarea required class="form-control" name="expTextContent" id="expTextContent" cols="30"></textarea>
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

function changeViewsAddEvents(){
    document.querySelectorAll('.alternateViewInput').forEach((viewInput, viewIndex) => {
        viewInput.addEventListener('change', ()=>{
            const file = viewInput.files[0]
            const reader = new FileReader()

            const viewImage = document.querySelectorAll('.alternativeViewImg')[viewIndex]

            reader.addEventListener('load', ()=>{
                viewImage.src = reader.result
            })
            reader.readAsDataURL(file)
        })
    });
}

document.querySelector('#thumbnailLockedContainerInput').addEventListener('change', ()=>{
    const file = document.querySelector('#thumbnailLockedContainerInput').files[0]
    const reader = new FileReader()

    reader.addEventListener('load', ()=>{
        document.querySelector('#levelThumbnailLocked').src = reader.result
    })
    reader.readAsDataURL(file)
})

document.querySelector('#defaultViewInput').addEventListener('change', ()=>{
    const file = document.querySelector('#defaultViewInput').files[0]
    const reader = new FileReader()

    reader.addEventListener('load', ()=>{
        document.querySelector('#defaultViewImg').src = reader.result
        imgDefaultViews[currentEditView] = reader.result
    })

    reader.readAsDataURL(file)
})

defaultMapText.addEventListener('change',()=>{
    if (needToChangeDefMap){
        imgDefaultMaps[currentEditView] = defaultMapText.value
    }
    
})

function updateSequenceOptions(){
    const sequenceOptionsContainer = document.querySelectorAll('.sequenceOptionsContainer')
    sequenceOptionsContainer.forEach((container, containerIndex) => {
        container.innerHTML = `<option value="">Sem Sequência</option>`

        currentLevel.challenges.forEach((challenge, challengeIndex) => {
            if (isNaN(parseInt(challenge.sequence))) challenge.sequence = 0
            container.innerHTML += `<option ${challenge.sequence == challengeIndex ? 'selected' : ''} value="${challengeIndex}">${challengeIndex} - ${challenge.title}</option>`
        });
    });
}

document.querySelector('#addAlternativeViewBtn').addEventListener('click', ()=>{
    addAlternativeViews()
})

function addRemoveAlternativeViews(){
    const alternativeViewsContainer = document.querySelector('#alternativeViewsContainer')
    alternativeViewsContainer.querySelectorAll('.removeAlternativeView').forEach(button => {
        button.addEventListener('click', ()=>{
            const index = parseInt(button.querySelector('.alternativeViewIndex').innerHTML)
            const containerToRemove = button.querySelector('.alternativeViewIndex').parentElement.parentElement
            containerToRemove.parentNode.removeChild(containerToRemove)

            imgAlternateMaps[currentEditView].splice(index, 1)
            imgAlternateViews[currentEditView].splice(index, 1)
        })
    });
}

function addAlternativeViews(){
    const alternativeViewsContainer = document.querySelector('#alternativeViewsContainer')
    const newAltenativeViewIndex = alternativeViewsContainer.querySelectorAll('.alternativeViewContainer').length

    alternativeViewsContainer.innerHTML += `
    <div class="alternativeViewContainer">
        <p class="viewIndex" hidden="">${newAltenativeViewIndex}</p>
        <img class="alternativeViewImg" src="https://dummyimage.com/1034x532/fff/aaa">
        <input type="file" name="" class="alternateViewInput">
        <br>
        <label>ImageMap associada:</label>
        <textarea required="" class="form-control alternativeImageMap" cols="30">Insira aqui uma Image-map</textarea>
        <a class="btn btn-danger btn-sm removeAlternativeView" role="button">
            Remover vista alternativa
            <p class="alternativeViewIndex" hidden="">${newAltenativeViewIndex}</p>
        </a>
        <hr>
    </div>
    `

    changeViewsAddEvents()

    if (imgAlternateMaps[currentEditView].length === 1){
        imgAlternateViews[currentEditView][0] = 'https://dummyimage.com/1034x532/fff/aaa'
        imgAlternateMaps[currentEditView][0] = 'new-alt-map'
    } else {
        imgAlternateViews[currentEditView].push('https://dummyimage.com/1034x532/fff/aaa') 
        imgAlternateMaps[currentEditView].push('new-alt-map') 
    }

    addRemoveAlternativeViews()
    updateImageMapArray()
}

function updateImageMapArray(){
    document.querySelectorAll('.alternativeImageMap').forEach((mapText, mapIndex) => {
        console.log(mapText)
        mapText.addEventListener('change', ()=>{
            imgAlternateMaps[currentEditView][mapIndex] = mapText.value
        })
    });
    document.querySelectorAll('.alternativeViewImg').forEach((viewURL, viewIndex) => {
        viewURL.addEventListener('change', ()=>{
            imgAlternateViews[currentEditView][viewIndex] = viewURL.getAttribute('src')
        })
    });
}

function changeYoutubePreview(){
    document.querySelectorAll('.youtubeForm').forEach((ytForm, ytIndex) => {
        const ytLink = ytForm.querySelector('#youtubeLink')
        ytLink.addEventListener('change', ()=>{
            alert(ytLink.value)
            //! ERRO NO IFRAME DO YT
            //ytForm.querySelector('iframe').src = ytLink.value
        })
    });
}

function updateItemsContainer(){
    const itemsContainer = document.querySelector('#itemContainers')
    itemsContainer.innerHTML = ''
    const items = currentLevel.items
    console.log(items)
    items.forEach((item, itemIndex) => {
        itemsContainer.innerHTML +=
        `
        <div class="itemContainer">
            <label for="itemName">Nome do Item:</label>
            <input type="text" name="itemName" id="itemName" value="${item[0]}">
            <br>                        
            <label for="itemPic">Fotografia do item:</label>
            <input type="file" name="itemPic" id="itemPic">
            <br>
            <img id="itemImg" src="${item[1]}" alt="">
            <br>
            <a class="btn btn-danger btn-sm delItemBtn" href="#" role="button">
                Apagar Item
                <p hidden class="delItemIndex">${itemIndex}</p>
            </a>
            <hr>
        </div>
        `

        console.log('ok')

        const challenges = currentLevel.challenges
        document.querySelectorAll('.challenge').forEach((challenge, challengeIndex) => {
            console.log(challenges[challengeIndex].requiredItem)
            challenge.querySelector('#challengeRequiredItem').innerHTML +=
            `
            <option ${challenges[challengeIndex].requiredItem == String(itemIndex) ? 'selected' : ''} value="${itemIndex}">${item[0]}</option>
            `
        });
    });

    
    
    addDeleteItemEvent()
}

document.querySelector('#addItemBtn').addEventListener('click', ()=>{
    addItemToContainer()
})

function addItemToContainer(){
    const itemsContainer = document.querySelector('#itemContainers')
    itemsContainer.innerHTML +=
    `
    <div class="itemContainer">
        <label for="itemName">Nome do Item:</label>
        <input type="text" name="itemName" id="itemName" value="Nome do item">
        <br>                        
        <label for="itemPic">Fotografia do item:</label>
        <input type="file" name="itemPic" id="itemPic">
        <br>
        <img id="itemImg" src="https://dummyimage.com/100/000/fff&text=item" alt="">
        <br>
        <a class="btn btn-danger btn-sm delItemBtn" href="#" role="button">
            Apagar Item
            <p hidden class="delItemIndex">${itemsContainer.querySelectorAll('.itemContainer').length}</p>
        </a>
        <hr>
    </div>
    `
    
    addDeleteItemEvent()
}

function addDeleteItemEvent(){
    document.querySelectorAll('.delItemBtn').forEach((button, btnIndex) => {
        button.addEventListener('click', ()=>{
            const itemContainerIndex = parseInt(button.querySelector('.delItemIndex').innerHTML) 
            const itemsContainer = document.querySelector('#itemContainers')
            const containerToRemove = itemsContainer.querySelectorAll('.itemContainer')[itemContainerIndex]

            itemsContainer.removeChild(containerToRemove)

            itemsContainer.querySelectorAll('.delItemIndex').forEach((delItemIndex, index) => {
                delItemIndex.innerHTML = index
            });
        })
    });
}

updateItemsContainer()