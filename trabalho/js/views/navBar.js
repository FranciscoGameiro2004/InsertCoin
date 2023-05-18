import * as User from "../models/UserModel.js"

function navBarBuild()
{

    User.init()
    let userLogged = User.isLogged()
    console.log(userLogged)

    let result = ""

    result += 
    `
    <a class="navbar-brand ml-5" href="../index.html">
        <img src="./img/logo.png" style="width: 100px; height:56px"/>
    </a>
    `
    if (!userLogged)
    {
        result +=
        `
        <div id = authArea class="ml-5">
            <button class="btn btn-primary ml-5" data-toggle="collapse" data-target="#collapsibleNavbar">
                Login
            </button>
            <button class="btn btn-primary ml-5" data-toggle="collapse" data-target="#collapsibleNavbar">
                Registrar
            </button>
        </div>
        `
    }
    else
    {
        result +=
        `
        <div id = authArea class="ml-5">
            <span style="color: white;">ola ${User.getUserLogged().username}</span>
            <button class="btn btn-primary" data-toggle="collapse" data-target="#collapsibleNavbar">
                Logout
            </button>
        </div>
        `
    }
    
    


    
    document.querySelector("nav").innerHTML = result;
}
navBarBuild()
