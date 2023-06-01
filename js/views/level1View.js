const leftArrow = document.getElementById('leftArrow');
console.log(leftArrow);
const rightArrow = document.getElementById('rightArrow');
console.log(rightArrow);

function teste()
{
    console.log('teste');
}



leftArrow.addEventListener('click', () => {console.log("leftArrow")});
rightArrow.addEventListener('click',() => {console.log("rightArrow")});

