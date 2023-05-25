import * as UserModel from '../models/UsersModel.js'

document.querySelector('#loginForm').addEventListener('submit', event => {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users'))

    let success = UserModel.login(username, password)
    alert(`Success? ${success}`)
    if (!success){
        event.preventDefault()
    }
})