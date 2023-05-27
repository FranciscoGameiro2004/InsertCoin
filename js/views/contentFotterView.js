function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-9 mb-4 p-2">
                    <img src="/img/Logo_Principal_mono.png" id="imgCustomLogo" class="img-fluid"/>
                </div>
                <div class="col-lg-6 col-md-9-justify-content-center p-0">
                    <p class="text-lg-start">
                        “Insert Coin” é um website feito no âmbito do projeto interdisciplinar do 1º ano da Licenciatura em Tecnologias e Sistemas de Informação para a Web da Escola Superior de Media Artes e Design da Politécnico do Porto.
                        Consiste na criação de uma Escape-Room educacional
                        Este projeto é feito por:
                    </p>
                    <ul class="list-unstyled text-lg-center">
                        <li class="mb-2 p-0">
                            Benson Terra
                        </li>
                        <li class="mb-2 p-0">
                            Francisco Gameiro
                        </li>
                        <li class="mb-0 p-0">
                            Joana Bastos
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row p-2 align-items-center">
                <div class="col">
                    <img src="/img/git_img.png" id="imgCustomGit" class="img-fluid"/>
                    <p class="p-2">Acompanhe no GitHub o nosso projeto!!!</p>
                </div>
            </div>
        </div>
    </div>
    `

    document.querySelector("#footer").innerHTML = result
}
contentBuild()