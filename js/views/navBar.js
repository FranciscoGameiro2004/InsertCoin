import * as User from "../models/UsersModel.js"

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
            <button class="btn btn-outline-success m-1" data-bs-toggle="modal" data-bs-target="#mdlLogin">
                Login
            </button>
            <button class="btn btn-outline-success m-1" data-bs-toggle="modal" data-bs-target="#mdlRegister">
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


    // CLICAR NO BOTÃO DE LOGIN
  document.querySelector("#frmLogin")?.addEventListener("submit", (event) => {
    //event.preventDefault();
    try {
      User.login(
        document.getElementById("txtUsername").value,
        document.getElementById("txtPassword").value
      );
      displayMessage("msgLogin", "User logged in with success!", "success");
      // Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (e) {
      displayMessage("msgLogin", e.message, "danger");
    }
  });


}
navBarBuild()
