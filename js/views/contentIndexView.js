import * as UsersModel from '../models/UsersModel.js'

function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container-fluid p-5">
        <img src="/img/logo_principal.png" class="img-fluid" alt="Snow" style="width:50%;">
        <div class="">
            <p>Venha aprender a história dos Arcades através</p>
            <p>de uma aventura inesquecível!!!</p>
        </div>
        <div>
        <a href="#" id="authBtnRegister" class="btn rounded-pill m-1">
            Ver mais
        </a>
    </div>
    

    
    <div class="container-fluid">
        <h4>
            texto generico
        </h4>
    </div>
    `

    document.querySelector("#content").innerHTML = result

    if(sessionStorage.getItem('userLogged')){
        const btn = document.querySelector('#btnIndex')
        btn.innerHTML = 'Jogar'
        btn.setAttribute('href', './html/levelSelection.html')
    }
}
contentBuild()