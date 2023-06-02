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