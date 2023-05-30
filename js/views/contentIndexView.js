function contentBuild()
{
    let result = ""
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
        <a href="/html/register.html" id="customBtn" class="btn rounded-pill m-1 active">
            <h1 class="ps-4 pe-4">Criar conta</h1>
        </a>
        `
    }
    else
    {
        result +=
        `
        <a href="/html/levelSelection.html" id="customBtn" class="btn rounded-pill m-1 active">
            <h1 class="ps-4 pe-4">Jogar</h1>
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