import * as UsersModel from '../models/UsersModel.js'

function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container-fluid p-5">
        <img src="/img/logo_principal.png" class="img-fluid" alt="Snow" style="width:50%;">
    </div>
    
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-3">
                <div class="card m-10">
                    <div class="card-horizontal">

                        <div class="card-body">
                            <h4 class="card-title text-start">Sinopse</h4>
                            <p class="card-text text-start">
                                A aventura começa quando vais para um museu de história dos videojogos. 
                                De repente, tu ficas trancado em um conjunto de salas cheias de relíquias da história dos arcades. 
                                Para sair do museu, terás de resolver diversos desafios em salas que remetem tópicos desde o surgimento dos arcades, à sua era dourada até á sua decadência. 
                            </p>
                        </div>

                        <div class="img-square-wrapper">
                            <img class="" src="http://via.placeholder.com/300x300" alt="Card image cap">
                        </div>

                </div>
            </div>
        </div>
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