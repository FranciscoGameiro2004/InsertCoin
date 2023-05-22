import * as User from "../models/UsersModel.js"

function teste()
{
    console.log("Testing")
}

function navBarBuild()
{

    User.init()
    let userLogged = User.isLogged()
    console.log(userLogged)

    let result = ""

    result += 
    `
    <a class="navbar-brand ml-5" href="../index.html">
        <img src="./img/logo.png" style="width: 100px; height:56px" onerror="this.src='../img/logo.png';"/>
    </a>
    `
    if (!userLogged)
    {
        //possivel resposta: condição para saber em que pagina se encontra carregada
        result +=
        `
        <div id = authArea class="ml-5">
            <button class="btn btn-outline-success m-1" data-bs-toggle="modal" data-bs-target="#mdlLogin">
                Login
            </button>
            <a href="./register.html">
                <button class="btn btn-outline-success m-1">
                    register.html
                </button>
            </a>
        </div>
        `
        //data-bs-toggle="modal" data-bs-target="#mdlRegister"
    }
    else
    {
        result +=
        `
        <div id = authArea class="ml-5">
            <span style="color: white;">ola ${User.getUserLogged().username}</span>
            <button id="btnLogout" class="btn btn-outline-success m-2 my-sm-0">
                Logout
            </button>
        </div>
        `
    }
    
    document.querySelector("nav").innerHTML = result;

    // CLICAR NO BOTÃO DE REGISTAR
    document.querySelector("#frmRegister")?.addEventListener("submit", (event) => 
    {
      //event.preventDefault();
      // Gestão do formulário de Registo
      const registerUsername = document.getElementById("txtUsernameRegister");
      const registerPassword = document.getElementById("txtPasswordRegister");
      const registerPassword2 = document.getElementById("txtPasswordRegister2");
      try 
      {
        if (registerPassword.value !== registerPassword2.value) {
          throw Error("Password and Confirm Password are not equal");
        }
        User.add(registerUsername.value, registerPassword.value);
        displayMessage(
          "msgRegister",
          "User registered with success!",
          "success"
        );
        // Wait 1 second before reloading, so the user can see the login success message        
        setTimeout(() => 
        {
          location.reload();
        }, 1000);
      } 
      catch (e) 
      {
        displayMessage("msgRegister", e.message, "danger");
      }
    });
    
    // CLICAR NO BOTÃO DE LOGIN
    document.querySelector("#frmLogin")?.addEventListener("submit", (event) => 
    {
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
        } 
        catch (e) 
        {
            displayMessage("msgLogin", e.message, "danger");
        }
    });

    // CLICAR NO BOTÃO LOGOUT (O BOTÃO PODE NÃO EXISTIR POR ISSO USAR "?"" - OPTIONAL CHAINING)
    document.getElementById("btnLogout")?.addEventListener("click", () => 
    {
        teste()
        User.logout();
        location.reload();
    });
}
navBarBuild()
