const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
//console.log(currentLevelIndex)
//alert(currentLevelIndex)

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
//console.log(gameScreen);
//console.log(gameScreen.offsetWidth)
//console.log(gameScreen.offsetHeight)

export let itemsContainer = ['','','']

let salaViewsDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].defaultViews
//console.log(salaViewsDefault)

let indexView = 0
gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`) 

leftArrow.addEventListener('click', () => 
{
    indexView -= 1
    checkIndex()
    console.log("leftArrow")
    gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`)
    gameScreen.setAttribute("usemap", `#view${indexView + 1}`)
    reSize()
    //createPoints()
});
rightArrow.addEventListener('click',() => 
{
    indexView += 1
    checkIndex()
    console.log("rightArrow")
    gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`)
    gameScreen.setAttribute("usemap", `#view${indexView + 1}`)
    reSize()
    //createPoints()
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

// Function to create points on the game screen image
function createPoints() 
{
    // Get the image map element
    const view1 = document.getElementById(`view${indexView+1}`);

    // Get the areas (image maps) within the image map
    const areas = view1.getElementsByTagName("area");

    // Get the point container element
    const pointContainer = document.getElementById("pointContainer");
    $( "div" ).remove( ".point" );
    

    const timeBar = 25

    // Loop through the areas and create points for each coordinate
    for (let i = 0; i < areas.length; i++) 
    {
        //console.log("ciclo " + i)
        const area = areas[i];
        const coords = area.getAttribute("coords").split(",");
        // bconsole.log(coords.length)
        let cordsLength = coords.length/2

        for (let j = 0; j < cordsLength; j++)
        {
            /*
            console.log("-----------------------------------------")
            console.log("-------------cilco:" + j + "-------------")
            console.log("-----------------------------------------")
            console.log(coords)
            */
            let newCoordsPoints = coords.splice(0,2)
            //console.log(coords)
            //console.log(newCoordsPoints)
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

//window.addEventListener("load", createPoints);
//window.addEventListener("resize",createPoints);

function stringToInt(str) 
{
return parseInt(str, 10);
}
function intToString(num) 
{
return num.toString();
}

function reSize()
{
    $(document).ready(function(e) 
    {
        $('img[usemap]').rwdImageMaps(); 
        //Allows image maps to be used in a responsive design by recalculating the area coordinates 
        // to match the actual image size on load and window.resize
        console.log('Image maps resize')
    });
}

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
    //Allows image maps to be used in a responsive design by recalculating the area coordinates 
    // to match the actual image size on load and window.resize
    //console.log('Image maps resize')
});

export function doesContainItem(itemIndex){
    if (itemsContainer.includes(itemIndex)){
        return true
    } else {
        return false
    }
}

//var input = document.getElementById("myInput").click();