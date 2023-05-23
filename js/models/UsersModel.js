export class User
{
    username = "";
    password = "";
    type = "";
    level = 0;

    constructor(username, password, type = "user")
    {
        this.username = username;
        this.password = password;
        this.type = type;
        this.level = 1;
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

// ADICIONAR UTILIZADOR
export function add(username, password) 
{
    if (users.some((user) => user.username === username)) 
    {
        throw Error(`User with username "${username}" already exists!`);
    } 
    else 
    {
        users.push(new User(username, password));
        localStorage.setItem("users", JSON.stringify(users));
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