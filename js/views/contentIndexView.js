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
        <a href="/html/register.html" id="authBtnRegister" class="btn rounded-pill m-1 active">
            Criar conta
        </a>
        `
    }
    else
    {
        result +=
        `
        <img src="/img/left.png" class="img-fluid">
        <a href="/html/levelSelection.html" id="authBtnRegister" class="btn rounded-pill m-1 active">
            <h1 class="p-4">jogar</h1>
        </a>
        <img src="/img/right.png" class="img-fluid">
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