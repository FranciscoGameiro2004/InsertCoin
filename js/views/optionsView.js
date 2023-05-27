import * as UsersModel from '../models/UsersModel.js'

document.querySelector('#profileForm').addEventListener('submit', (event)=>{
    const newUsername = document.querySelector('#newUsername').value

    const success = UsersModel.updateUsername(newUsername)
    if (!success) {
        event.preventDefault()
    }
    
})


document.querySelector('#securityForm').addEventListener('submit', (event)=>{
    const newPassword = document.querySelector('#newPassword').value
    const passwordConfirmation = document.querySelector('#passwordConfirmation').value
    const currentPassword = document.querySelector('#currentPassword').value

    const success = UsersModel.updatePassword(newPassword, passwordConfirmation, currentPassword)
    if (!success) {
        event.preventDefault()
    }
})

const profilePic = JSON.parse(sessionStorage.getItem('userLogged')).avatar
document.querySelector('#avatarCont').setAttribute('src', profilePic)

document.forms['profilePicForm'].addEventListener('submit', ()=>{
    const newProfilePic = document.forms['profilePicForm']['profilePicChoice'].value

    UsersModel.updateProfilePic(newProfilePic)
})

//TODO: Integrar as fotos de perfil adquiridas pela loja.