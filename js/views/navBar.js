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
    <div class="container-fluid">
        <a class="navbar-brand ps-2" href="/index.html">
            <img id = "logotipo" src="./img/icone.png"  onerror="this.src='../img/icone.png';"/>
        </a>
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    `
    if (!userLogged)
    {
        //possivel resposta: condição para saber em que pagina se encontra carregada
        result +=
        `
        <div class="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo01">
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a href="/html/login.html" id="authBtnLogin" class="btn rounded-pill m-1 nav-link active">
                            Iniciar Sessão
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/html/register.html" id="authBtnRegister" class="btn rounded-pill m-1 nav-link active">
                            Criar conta
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `
        //data-bs-toggle="modal" data-bs-target="#mdlRegister"
    }
    
    else
    {
        result +=
        `
        <div class="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo01">
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="${User.getUserLogged().avatar}" width="40" height="40" class="rounded-circle">
                    <span class="ps-2" id="authCorLetras">ola ${User.getUserLogged().username}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li>
                            <a id="btnLevels" class="btn rounded-pill m-1 nav-link active" href="/html/levelSelection.html">
                                Níveis
                            </a>
                            <a id="btnLevels" class="btn rounded-pill m-1 nav-link active" href="/html/leaderboard.html">
                                Tabela de Liderança
                            </a>
                            <a id="btnLevels" class="btn rounded-pill m-1 nav-link active" href="/html/shop.html">
                                Loja
                            </a>
                            <a id="btnLevels" class="btn rounded-pill m-1 nav-link active" href="/html/options.html">
                                Opções
                            </a>
                            <a id="authBtnLogout" class="btn rounded-pill m-1 nav-link active" href="/">
                                Sair
                            </a>
                        </li>
                    </ul>
                </li>  

                </ul>
            </div>
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
    document.getElementById("authBtnLogout")?.addEventListener("click", () => 
    {
        teste()
        User.logout();
        location.reload();
    });

    document.getElementById("showData")?.addEventListener("click", () =>
    {
        let data = []
        data = JSON.parse(sessionStorage.getItem("userLogged"))
        console.table(data)
    })
}
navBarBuild()
