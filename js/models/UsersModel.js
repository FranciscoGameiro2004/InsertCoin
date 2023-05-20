export class User
{
    username = "";
    password = "";
    type = "";

    constructor(username, password, type)
    {
        this.username = username;
        this.password = password;
        this.type = type;
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
            "userAdmin",
            "passwordAdmin",
            "typeAdmin",
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
        console.log(users)
        //login("userAdmin","passwordAdmin")
        
    }
    else
    {
        console.log("init UserModel No")
        users = []
    }
}

export function login(username, password)
{
    console.log("function login") 
    console.log(users)


    let usercheck = users.find( (user) => user.username === username && user.password === password)
    
    if (usercheck)
    {
        console.log("check true")
        localStorage.setItem("userLogged",JSON.stringify(usercheck))
        return true
    }
}


export function isLogged()
{
    if (localStorage.getItem("userLogged"))
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
    return JSON.parse(localStorage.getItem("userLogged"));
}