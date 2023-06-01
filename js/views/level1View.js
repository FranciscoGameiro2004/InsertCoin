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
gameScreen.style.backgroundImage = `url(${salaViewsDefault[indexView]})`

leftArrow.addEventListener('click', () => 
{
    indexView -= 1
    console.log("leftArrow")
    gameScreen.style.backgroundImage = `url(${salaViewsDefault[indexView]})`
});
rightArrow.addEventListener('click',() => 
{
    indexView += 1
    console.log("rightArrow")
    gameScreen.style.backgroundImage = `url(${salaViewsDefault[indexView]})`
});
/*
btn1.addEventListener('click',() => 
{
    gameScreen.style.backgroundImage = "url(" + salaViewsDefault[]
})
*/



