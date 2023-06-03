const leftArrow = document.getElementById('leftArrow');
//console.log(leftArrow);
const rightArrow = document.getElementById('rightArrow');
//console.log(rightArrow);
const btn1 = document.getElementById('btn1');
//console.log(btn1);
const btn2 = document.getElementById('btn2');
//console.log(btn2);
const btnReset = document.getElementById('reset');
//console.log(btnReset);
const gameScreen = document.getElementById('gameScreen');
console.log(gameScreen);
console.log(gameScreen.offsetWidth)
console.log(gameScreen.offsetHeight)

let salaViewsDefault = JSON.parse(localStorage.getItem("levels"))[0].defaultViews
console.log(salaViewsDefault)

let indexView = 0
gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`) 

leftArrow.addEventListener('click', () => 
{
    indexView -= 1
    checkIndex()
    console.log("leftArrow")
    gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`) 
});
rightArrow.addEventListener('click',() => 
{
    indexView += 1
    checkIndex()
    console.log("rightArrow")
    gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`) 
});

function checkIndex()
{
    if (indexView < 0)
    {
        indexView = 3
    }
    else if (indexView > 3)
    {
        indexView = 0
    }
}

btn1.addEventListener('click',() =>
{
    salaViewsDefault[1] = "../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_1.jpg"
    render()
})
btn2.addEventListener('click',() =>
{
    salaViewsDefault[1] = "../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_2.jpg"
    render()
})
btnReset.addEventListener('click',() =>
{
    const defaultViews =
    [
        "../img/DefaultRoomAssets/1/DefaultViews/View1.jpg",
        "../img/DefaultRoomAssets/1/DefaultViews/View2.jpg",
        "../img/DefaultRoomAssets/1/DefaultViews/View3.jpg",
        "../img/DefaultRoomAssets/1/DefaultViews/View4.jpg"
    ]
    salaViewsDefault = defaultViews
    //console.log(salaViewsDefault)
    render()
})

function render()
{
    gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`) 
}
/*
console.log("gameScreen width: " + gameScreen.offsetWidth);
console.log("gameScreen height: " + gameScreen.offsetHeight);
*/



// Function to create points on the game screen image
function createPoints() 
{
    // Get the game screen image element
    const gameScreen = document.getElementById("gameScreen");

    // Get the image map element
    const view1 = document.getElementById("view1");

    // Get the areas (image maps) within the image map
    const areas = view1.getElementsByTagName("area");

    // Get the point container element
    const pointContainer = document.getElementById("pointContainer");

    const timeBar = 25

    // Loop through the areas and create points for each coordinate
    for (let i = 0; i < areas.length; i++) 
    {
        console.log("ciclo " + i)
        const area = areas[i];
        let coords = area.getAttribute("coords").split(",");
        console.log(coords.length)
        let cordsLength = coords.length/2

        for (let j = 0; j < cordsLength; j++)
        {
            console.log("-----------------------------------------")
            console.log("-------------cilco:" + j + "-------------")
            console.log("-----------------------------------------")
            console.log(coords)
            let newCoordsPoints = coords.splice(0,2)
            console.log(coords)
            console.log(newCoordsPoints)
            const point = document.createElement("div");

            // Set the position and style of the point
            point.className = "point";
            point.style.left = newCoordsPoints[0] + "px";
            let newCoord = stringToInt(newCoordsPoints[1]) + timeBar;
            //console.log(newCoord)
            newCoordsPoints[1] = intToString(newCoord);
            point.style.top = newCoordsPoints[1] + "px";

            // Add the point to the point container
            pointContainer.appendChild(point);
        }

    
    }
}

// Call the createPoints function when the page has finished loading
window.addEventListener("load", createPoints);

function stringToInt(str) 
{
return parseInt(str, 10);
}

function intToString(num) 
{
return num.toString();
}
