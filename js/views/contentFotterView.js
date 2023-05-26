import * as UsersModel from '../models/UsersModel.js'

function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container-fluid p-5">
        <div class="row">
            <div class="align-items-center">
                <img src="/img/Logo_Principal_Mono.png" class="img-fluid">
            </div>
            <div class="align-items-center">
                <h1>Welcome</h1>
            </div>
        </div>

        

    </div>
    `

    document.querySelector("#footer").innerHTML = result
}
contentBuild()