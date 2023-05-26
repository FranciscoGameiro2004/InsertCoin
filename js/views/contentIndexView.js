import * as UsersModel from '../models/UsersModel.js'

function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container-fluid p-5">
        <img src="/img/logo_principal.png" class="img-fluid" alt="Snow" style="width:50%;">
        <div>
            <p class="p-0 m-0 pt-4">Venha aprender a história dos Arcades através</p>
            <p class="p-0 m-0 pb-4">de uma aventura inesquecível!!!</p>
        </div>
        <div>
        <a href="#" id="authBtnRegister" class="btn rounded-pill p-2">
            Ver mais
        </a>
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