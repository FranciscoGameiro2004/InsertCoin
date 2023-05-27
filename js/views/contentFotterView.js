function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-9 mb-4 p-2">
                    <img src="/img/Logo_Principal_mono.png" id="imgCustom" class="img-fluid"/>
                </div>
                <div class="col-lg-6 col-md-9-justify-content-center mb-4 p-2">
                    <p class="text-lg-start">
                        “Insert Coin” é um website feito no âmbito do projeto interdisciplinar do 1º ano da Licenciatura em Tecnologias e Sistemas de Informação para a Web da Escola Superior de Media Artes e Design da Politécnico do Porto.
                        Consiste na criação de uma Escape-Room educacional
                        Este projeto é feito por:
                    </p>
                    <ul class="list-unstyled text-lg-center">
                        <li class="mb-2">
                            Benson Terra
                        </li>
                        <li class="mb-2">
                            Francisco Gameiro
                        </li>
                        <li class="mb-2">
                            Joana Bastos
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `

    document.querySelector("#footer").innerHTML = result
}
contentBuild()