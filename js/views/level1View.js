const urlParams = new URLSearchParams(window.location.search)
const currentLevelIndex = urlParams.get('level')
//console.log(currentLevelIndex)
//alert(currentLevelIndex)

export const leftArrow = document.getElementById('leftArrow');
//console.log(leftArrow);
export const rightArrow = document.getElementById('rightArrow');
//console.log(rightArrow);
export const gameScreen = document.getElementById('gameScreen');
//console.log(gameScreen);
//console.log(gameScreen.offsetWidth)
//console.log(gameScreen.offsetHeight)

export let itemsArray = []
//console.log(coinsArray)
export let itemsContainer = ['','','']
export let numOfMasterCoinParts = 0

export var completedArray = []

let salaViewsDefault = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].defaultViews
//console.log(salaViewsDefault)
let salaViewsAnternate = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].alternateViews


export let defaultMaps = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].defaultMaps
//console.log(defaultMaps)
let alternativeMaps = JSON.parse(localStorage.getItem("levels"))[currentLevelIndex].alternateMaps
//console.log(alternativeMaps)

export let view1 = document.getElementById("view1")
//console.log(view1)
//view1.innerHTML = defaultMaps[0]
export let view2 = document.getElementById("view2")
//console.log(view2)
//view2.innerHTML = defaultMaps[1]
export let view3 = document.getElementById("view3")
//console.log(view3)
//view3.innerHTML = defaultMaps[2];//console.log(view3.innerHTML)
export let view4 = document.getElementById("view4")
//console.log(view4)
//view4.innerHTML = defaultMaps[3]



let alternateViewsIndex = [0,0,0,0]
let alternateMapsIndex = [0,0,0,0]

addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll('.changeView').forEach(element => {
        element.addEventListener('click', ()=>{
            changeView()
            document.querySelectorAll('.changeView').forEach(changedElement => {
                changedElement.addEventListener('click', ()=>{
                    changeView()
                })
            })
            document.querySelectorAll('.changeView-MC').forEach(changedElement => {
                changedElement.addEventListener('click', ()=>{
                    if(isMasterCoinCompleted()){
                        changeView()
                    }
                })
            })
            //! ERRO AO CARREGAR PAR ACABAR O NÍVEL
            document.querySelectorAll('.finishLevel').forEach(changedElement=>{
                changedElement.addEventListener('click', ()=>{
                    alert('Parabéns! Acabou o nível!!!')
                })
            })
        }); 
    })
})

addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll('.changeView-MC').forEach(element => {
        element.addEventListener('click', ()=>{
        if(isMasterCoinCompleted()){
            changeView()
            document.querySelectorAll('.changeView-MC').forEach(changedElement => {
                changedElement.addEventListener('click', ()=>{
                    if(isMasterCoinCompleted()){
                        changeView()
                    }
                })
            })
            document.querySelectorAll('.changeView').forEach(changedElement => {
                changedElement.addEventListener('click', ()=>{
                    changeView()
                })
            })
            //! ERRO AO CARREGAR PAR ACABAR O NÍVEL
            document.querySelectorAll('.finishLevel').forEach(changedElement=>{
                changedElement.addEventListener('click', ()=>{
                    alert('Parabéns! Acabou o nível!!!')
                })
            })
        }
    }); 
    })
})

let indexView = 0
gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`) 

leftArrow.addEventListener('click', () => 
{
    indexView -= 1
    checkIndex()
    //console.log("leftArrow")
    gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`)
    gameScreen.setAttribute("usemap", `#view${indexView + 1}`)
    reSize()
    //createPoints()
});
rightArrow.addEventListener('click',() => 
{
    indexView += 1
    checkIndex()
    //console.log("rightArrow")
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

function render()
{
    checkMaps()
    gameScreen.setAttribute('src', `${salaViewsDefault[indexView]}`)
    const view = document.querySelector(`#view${indexView + 1}`)
    //console.log(defaultMaps)
    view.innerHTML = defaultMaps[indexView]
    //console.log(defaultMaps)
    //alert('OK')
    reSize()
    checkMaps()
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

export function reSize()
{
    $(document).ready(function(e) 
    {
        $('img[usemap]').rwdImageMaps(); 
        //Allows image maps to be used in a responsive design by recalculating the area coordinates 
        // to match the actual image size on load and window.resize
        //console.log('Image maps resize')
    });
}

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
    //Allows image maps to be used in a responsive design by recalculating the area coordinates 
    // to match the actual image size on load and window.resize
    //console.log('Image maps resize')
});

export function doesContainItem(itemIndex){
    if (itemsContainer.find(itemIndx => itemIndex == itemIndx)){
        return true
    } else {
        return false
    }
}

export function slotUpdate()
{
    const currentLevel = JSON.parse(localStorage.getItem('levels'))[currentLevelIndex]
    const items = currentLevel.items
    //console.log(items)
    itemsContainer.forEach((itemIndex, containerIndex) => 
    {
        try
        {
            if (itemIndex != '')
            {

                //console.log(itemIndex)
                //console.log(items[parseInt(itemIndex)])

                document.querySelectorAll('.itemContainer')[containerIndex].setAttribute('src',items[parseInt(itemIndex)][1].replace('..',''))
                document.querySelectorAll('.itemContainer')[containerIndex].setAttribute('alt',items[parseInt(itemIndex)][0])
                
                if (!itemsArray.includes(items[parseInt(itemIndex)][0]))
                {
                    itemsArray.push(items[parseInt(itemIndex)][0]);//console.log(itemsArray);
                }
                else
                {
                    //console.log(itemsArray);
                }

            } 
            else 
            {
                document.querySelectorAll('.itemContainer')[containerIndex].setAttribute('src','')
                document.querySelectorAll('.itemContainer')[containerIndex].setAttribute('alt','')  
            }
        } catch {

        }
    });
}

export function masterCoinUpdate(){
    const masterCoinImg = document.querySelector('#masterCoinImg')
    const masterCoinQuantity = document.querySelector('#masterCoinQuantity')
    switch (numOfMasterCoinParts){
        case 1: masterCoinImg.setAttribute('src', '/img/moeda_1.png')
                masterCoinQuantity.innerHTML = '1/3'
                break;
        case 2: masterCoinImg.setAttribute('src', '/img/moeda_2.png')
                masterCoinQuantity.innerHTML = '2/3'
                break;
        case 3: masterCoinImg.setAttribute('src', '/img/moeda_3.png')
                masterCoinQuantity.innerHTML = '3/3'
                break;
        default:    masterCoinImg.setAttribute('src', '/img/moeda_0.png')
                    masterCoinQuantity.innerHTML = '0/3'
                    numOfMasterCoinParts = 0
                    break;
    }
}

export function addMasterCoinPart(){
    numOfMasterCoinParts += 1
    alert(numOfMasterCoinParts)
    masterCoinUpdate()
}
/*----------------------------------------------------------------*/
export let control = 0
export function isMasterCoinCompleted(){
    console.log(numOfMasterCoinParts === 3)
    console.log(control)
    if(control == 0)
    {
        control+=1
        return numOfMasterCoinParts === 3
    }
}
/*----------------------------------------------------------------*/
export function changeView(){
    salaViewsDefault[indexView] = salaViewsAnternate[indexView][alternateViewsIndex[indexView]]

    defaultMaps[indexView] = alternativeMaps[indexView][alternateViewsIndex[indexView]]
    //console.log(defaultMaps[indexView])
    //console.log(alternateViewsIndex[indexView])
    alternateViewsIndex[indexView] += 1
    alert(alternateViewsIndex)

    render()
}
/*----------------------------------------------------------------*/
let testeBtn = document.getElementById("btnTest").addEventListener("click",checkMaps)

export function checkMaps()
{
    console.log(completedArray)
    completedArray.forEach( element => 
    {
        let area = document.querySelector(`area[title="${element}"]`)
        console.log(area)
        if (area != null)
        {
            area.remove()
        }

    })
}

slotUpdate()
masterCoinUpdate()