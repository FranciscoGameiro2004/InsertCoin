import * as UsersModel from '../models/UsersModel.js'

document.querySelector('#profileForm').addEventListener('submit', (event)=>{
    const newUsername = document.querySelector('#newUsername').value

    const success = UsersModel.updateUsername(newUsername)
    if (!success) {
        event.preventDefault()
    }
    
})


document.querySelector('#securityForm').addEventListener('submit', ()=>{

})