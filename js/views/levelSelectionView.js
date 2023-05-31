import * as LevelModel from '../models/LevelModel.js'
import * as UserModel from '../models/UsersModel.js'

const levelsList = JSON.parse(localStorage.getItem('levels'))

let editLevelIndex = 0
let currentEditView = 1

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
            let timeInSeconds = levelsList[editLevelIndex].timeInSeconds
            let convertedTime = `${parseInt(timeInSeconds/60)<10 ? '0' : ''}${parseInt(timeInSeconds/60)}:${(parseInt(timeInSeconds-timeInSeconds/60))<10 ? '0' : ''}${timeInSeconds-parseInt(timeInSeconds/60)}`

            levelTitleForm.value = levelsList[editLevelIndex].title
            levelDurationForm.value = convertedTime
            thumbnailForm.setAttribute('src', levelsList[editLevelIndex].thumbnail)
            thumbnailLockedForm.setAttribute('src', levelsList[editLevelIndex].thumbnailLocked)
            defaultViewImg.setAttribute('src', levelsList[editLevelIndex].defaultViews[currentEditView])
            console.log(defaultMapText)
            alert(levelsList[editLevelIndex].defaultMaps[currentEditView])
            defaultMapText.innerHTML = levelsList[editLevelIndex].defaultMaps[0]

            alternativeViewsContainer.innerHTML = ''
            levelsList[editLevelIndex].alternateViews[currentEditView].forEach((view, viewIndex) => {
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
        })
    });
});