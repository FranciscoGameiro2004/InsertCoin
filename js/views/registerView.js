import * as UserModel from '../models/UsersModel.js'

document.querySelector('#registerForm').addEventListener('submit', (event)=>{
    const newUsername = document.querySelector('#newUsername').value
    const newPassword = document.querySelector('#newPassword').value
    const passwordConfirmation = document.querySelector('#passwordConfirmation').value

    const formSuccess = UserModel.add(newUsername, newPassword, passwordConfirmation)

    if (!formSuccess){
        event.preventDefault()
    }
})