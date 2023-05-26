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

//TODO: Fazer com que seja possível alterar a foto de perfil.