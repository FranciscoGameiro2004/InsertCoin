import * as UsersModel from '../models/UsersModel.js'

let editUserIndex = 0

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
            <tr class="userRow">
                <td>${user.username}</td>
                <td>${user.type}</td>
                <td>${user.level}</td>
                <td>
                    <a class="btn btn-primary btn-sm " role="button">
                        Ver mais detalhes
                        <p hidden class="detailUserIndex">${userIndex}</p>
                    </a>
                    <a class="btn btn-${user.blocked ? 'secondary' : 'warning'} btn-sm adminBlockUser" role="button">
                        ${user.blocked ? 'Desbloquear' : 'Bloquear'}
                        <p hidden class="blockUserIndex">${userIndex}</p>
                    </a>
                    <a class="btn btn-danger btn-sm adminRemoveUser" role="button">
                        Remover
                        <p hidden class="removeUserIndex">${userIndex}</p>
                    </a>
                </td>
            </tr>
            `
        }
        
    });
}


const adminBlockUserList = document.querySelectorAll('.adminBlockUser')
adminBlockUserList.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (event)=>{
        editUserIndex = parseInt(button.childNodes[1].innerHTML)
        let usersList = JSON.parse(localStorage.getItem('users'))
        
        console.log(button.innerHTML)

        if (usersList[editUserIndex].blocked) {
            console.log('T')
            UsersModel.unblockUser(editUserIndex)
            button.innerHTML =
            `
            Bloquear
            <p hidden class="blockUserIndex">${editUserIndex}</p>
            `
            button.setAttribute('class', 'btn btn-warning btn-sm adminBlockUser')
        } else {
            console.log('F')
            UsersModel.blockUser(editUserIndex)
            button.innerHTML =
            `
            Desbloquear
            <p hidden class="blockUserIndex">${editUserIndex}</p>
            `
            button.setAttribute('class', 'btn btn-secondary btn-sm adminBlockUser')
        }

    })
});

const adminRemoveList = document.querySelectorAll('.adminRemoveUser')
adminRemoveList.forEach((level) => {
    level.addEventListener('click', (event)=>{
        editUserIndex = parseInt(level.childNodes[1].innerHTML)

        UsersModel.removeUser(editUserIndex)
        let usersList = JSON.parse(localStorage.getItem('users'))

        const userRow = document.querySelectorAll('.userRow')[editUserIndex-1]
        userRow.remove()

        let detailUserIndexList = document.querySelectorAll('.detailUserIndex')
        let blockUserIndexList = document.querySelectorAll('.blockUserIndex')
        let removeUserIndexList = document.querySelectorAll('.removeUserIndex')

        for (let i=1; i<=usersList.length; i++){
            detailUserIndexList[i-1].innerHTML = userIndex
            blockUserIndexList[i-1].innerHTML = userIndex
            removeUserIndexList[i-1].innerHTML = userIndex
        }
    })
});

//TODO: Integrar as fotos de perfil adquiridas pela loja.