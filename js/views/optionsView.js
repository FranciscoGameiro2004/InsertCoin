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

if (JSON.parse(sessionStorage.getItem('userLogged')).type === 'admin'){
    document.querySelector('#userManagementBtn').removeAttribute('hidden')

    const usersList = JSON.parse(localStorage.getItem('users'))

    const userManagementTable = document.querySelector('#userManagementTable')
    userManagementTable.innerHTML = 
    `
    <tr>
        <th>Utilizador</th>
        <th>Tipo</th>
        <th>Nível atual</th>
        <th>Opções</th>
    </tr>
    `

    usersList.forEach((user, userIndex) => {
        if (user.username !== JSON.parse(sessionStorage.getItem('userLogged')).username){
            userManagementTable.innerHTML += 
            `
            <tr>
                <td>${user.username}</td>
                <td>${user.type}</td>
                <td>${user.level}</td>
                <td>
                    <a class="btn btn-primary btn-sm " href="#" role="button">
                        Ver mais detalhes
                        <p hidden class="userIndex">${userIndex}</p>
                    </a>
                    <a class="btn btn-warning btn-sm " href="#" role="button">
                        Bloquear
                        <p hidden class="userIndex">${userIndex}</p>
                    </a>
                    <a class="btn btn-danger btn-sm " href="#" role="button">
                        Remover
                        <p hidden class="userIndex">${userIndex}</p>
                    </a>
                </td>
            </tr>
            `
        }
        
    });
}

//TODO: Integrar as fotos de perfil adquiridas pela loja.