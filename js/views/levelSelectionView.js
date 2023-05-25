import * as LevelModel from '../models/LevelModel.js'
import * as UserModel from '../models/UsersModel.js'

const levelsList = JSON.parse(localStorage.getItem('levels'))

const levelsContainer = document.querySelector('#levelsContainer')
levelsContainer.innerHTML = ''

levelsList.forEach((level, levelIndex) => {
    let levelThumbnail = ''

    if (parseInt(UserModel.getUserLevel())-1 >= levelIndex){
        levelThumbnail = level.thumbnail
    } else {
        levelThumbnail = level.thumbnailLocked
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
        document.querySelectorAll('.card-body')[levelIndex].innerHTML += `<h6 class="lvlPoints card-subtitle mb-2 text-muted text-center">Melhor pontuação: ${points}</h6>`
    }
});