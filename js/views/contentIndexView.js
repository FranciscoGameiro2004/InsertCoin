


function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container">
        <img src="./img/Vector.png" class="img-fluid" alt="Snow" style="width:100%;">
        
    </div>
    `

    document.querySelector("#content").innerHTML = result
}
contentBuild()