function contentBuild()
{
    let result = ""

    result += 
    `
    <div class="container">
        <img src="./img/vector.png" class="img-fluid" alt="Snow" style="width:100%;">
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-3">
                <div class="card">
                    <div class="card-horizontal">

                        <div class="card-body">
                            <h4 class="card-title">Sinopse</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <div class="img-square-wrapper">
                            <img class="" src="http://via.placeholder.com/300x300" alt="Card image cap">
                        </div>

                        </div>
                        <!--
                        <div class="card-footer">
                            <small class="text-muted">Last updated 2 mins ago</small>
                        </div>
                        -->
                </div>
            </div>
        </div>
    </div>
    `

    document.querySelector("#content").innerHTML = result
}
contentBuild()

