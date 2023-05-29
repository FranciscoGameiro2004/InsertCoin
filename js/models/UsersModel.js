export class User
{
    username = "";
    password = "";
    type = "";
    level = 0;
    avatar = '';
    points = []
    timeCompletedSeconds = []
    coins = 0
    blocked = false

    constructor(username, password, type = "user",level = 1)
    {
        this.username = username;
        this.password = password;
        this.type = type;
        this.level = level;
        this.avatar = '../img/profilePics/default/Blue.png';
        this.points = [0,0,0]
        this.timeCompletedSeconds = [0,0,0]
        this.coins = 0
        this.blocked = false
    }
}

let users = []
export function initDataUsers()
{
    console.log("function initDataUsers")

    if (!localStorage.users)
    {
        let user = ""

        user = new User(
            "admin",
            "admin",
            "admin",
            3
        )

        users.push(user)
        console.table(users)
        console.log("injecting")
        localStorage.setItem("users", JSON.stringify(users))
    }
}

export function init()
{
    console.log("init UserModel")
    if (localStorage.users)
    {
        console.log("init UserModel Yes")
        users = JSON.parse(localStorage.getItem("users"))
        //console.log(users)
        login("userAdmin","passwordAdmin")
        
    }
    else
    {
        console.log("init UserModel No")
        users = []
    }
}

// ADICIONAR UTILIZADOR
export function add(username, password, passwordConfirmation) 
{   
    let users = JSON.parse(localStorage.getItem('users'))
    alert(`Existe? ${users.some((user) => user.username === username)}`)
    alert(`Igual? ${password === passwordConfirmation}`)
    if (!(users.some((user) => user.username === username)) && (password === passwordConfirmation)) 
    {
        users.push(new User(username, password));
        localStorage.setItem("users", JSON.stringify(users));
        return true
    }
    else
    {
        return false
    }
}

export function login(username, password)
{
    console.log("function login") 
    //console.log(users)

    let usercheck = users.find( (user) => user.username === username && user.password === password)
    
    if (usercheck)
    {
        console.log("check true")
        sessionStorage.setItem("userLogged",JSON.stringify(usercheck))
        return true
    }
}

export function isLogged()
{
    if (sessionStorage.getItem("userLogged"))
    {
        return true
    }
    else
    {
        return false
    }
}

export function getUserLogged()
{
    return JSON.parse(sessionStorage.getItem("userLogged"));
}

export function logout()
{
    sessionStorage.removeItem("userLogged");
}

function teste()
{
    console.log("Testing")
}

export function getUserLevel(){
    return JSON.parse(sessionStorage.getItem('userLogged')).level
}

export function updateUsername(newUsername){
    alert(!users.some(user => user.username === newUsername))
    if (!users.some(user => user.username === newUsername)) {
        let currentUser = JSON.parse(sessionStorage.getItem('userLogged'))

        let users = JSON.parse(localStorage.getItem('users'))

        const userIndex = users.findIndex(user => user.username === currentUser.username)

        currentUser.username = newUsername

        users[userIndex] = currentUser

        localStorage.setItem('users', JSON.stringify(users))

        sessionStorage.setItem('userLogged', JSON.stringify(currentUser))

        return true
    }
    return false
}

export function updatePassword(newPassword, passwordConfirmation, currentPassword){
    let currentUser = JSON.parse(sessionStorage.getItem('userLogged'))

    if(newPassword === passwordConfirmation && currentPassword === currentUser.password){
        let users = JSON.parse(localStorage.getItem('users'))

        const userIndex = users.findIndex(user => user.username === currentUser.username)

        currentUser.password = newPassword

        users[userIndex] = currentUser

        localStorage.setItem('users', JSON.stringify(users))

        sessionStorage.setItem('userLogged', JSON.stringify(currentUser))

        return true
    }
    return false
}

export function updateProfilePic(newProfilePic){
    let currentUser = JSON.parse(sessionStorage.getItem('userLogged'))

    let users = JSON.parse(localStorage.getItem('users'))

    const userIndex = users.findIndex(user => user.username === currentUser.username)

    currentUser.avatar = newProfilePic

    users[userIndex] = currentUser

    localStorage.setItem('users', JSON.stringify(users))

    sessionStorage.setItem('userLogged', JSON.stringify(currentUser))

}