


function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container">
        <img src="./img/vector.png" alt="Snow" style="width:100%;">
        
    </div>
    `

    document.querySelector("#content").innerHTML = result
}
contentBuild()