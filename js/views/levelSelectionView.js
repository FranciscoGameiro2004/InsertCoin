import * as LevelModel from '../models/LevelModel.js'
import * as UserModel from '../models/UsersModel.js'

const levelsList = JSON.parse(localStorage.getItem('levels'))

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
            <a id="adminEditLevel${levelIndex}" class="btn btn-primary btn-sm" href="#" role="button" data-bs-toggle="modal" data-bs-target="#editLevelModal">Editar</a>
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
});