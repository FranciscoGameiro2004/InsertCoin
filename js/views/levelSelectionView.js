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
            </div>
            
            `
        }
    });
}

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

        //LevelModel.updateLevel(levelIndex, title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link)
    })
});