const leftArrow = document.getElementById('leftArrow');
//console.log(leftArrow);
const rightArrow = document.getElementById('rightArrow');
//console.log(rightArrow);
const btn1 = document.getElementById('btn1');
//console.log(btn1);
const gameScreen = document.getElementById('gameScreen');
console.log(gameScreen);

let salaViewsDefault = JSON.parse(localStorage.getItem("levels"))[0].defaultViews
console.table(salaViewsDefault)

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




