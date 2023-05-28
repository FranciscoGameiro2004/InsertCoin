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

    document.querySelector("#contentPrincipal").innerHTML = result

    result = ""
    result += 
    `
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-3">
                <div class="card m-10  border-white ">
                    <div class="card-horizontal align-items-center">

                        <div class="card-body">
                            <h4 class="card-title text-start">Sinopse</h4>
                            <p class="card-text text-start">
                                A aventura começa quando vais para um museu de história dos videojogos. 
                                De repente, tu ficas trancado em um conjunto de salas cheias de relíquias da história dos arcades. 
                                Para sair do museu, terás de resolver diversos desafios em salas que remetem tópicos desde o surgimento dos arcades, à sua era dourada até á sua decadência. 
                            </p>
                        </div>

                        <div class="img-square-wrapper p-5">
                            <img class="image-fluid" src="http://via.placeholder.com/300x300" alt="Card image cap">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    document.querySelector("#contentSinopse").innerHTML = result

    result = ""
    result += 
    `
    <div class="container-fluid text-center">
        <div>
            <img class="image-fluid" src="/img/Teaser.png" alt="Card image cap" style="width: 70%">
        </div>
        <div class="pt-4">
            <h1>Quer embarcar nesta aventura?</h1>
            <h1>Então venha jogar</h1>
        </div>
        <div class="p-3">
    `
    if(!sessionStorage.getItem('userLogged'))
    {
        result +=
        `
        <a href="/html/register.html" id="authBtnRegister" class="btn rounded-pill m-1 active">
            Criar conta
        </a>
        `
    }
    else
    {
        result +=
        `
        <a href="/html/levelSelection.html" id="authBtnRegister" class="btn rounded-pill m-1 active">
            jogar
        </a>
        `
    }
    result +=
    `
        </div>
    </div>
    `

    document.querySelector("#contentTeaser").innerHTML = result
}
contentBuild()