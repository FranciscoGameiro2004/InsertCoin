import { insertBestPoints, upLevel, winCoins } from "../models/UsersModel.js";
import { completedArray, currentLevelIndex, numOfCurrentPoints } from "./level1View.js";
import { check, salaTime } from "./time.js";


let numPoints = document.getElementById('numPoints');console.log(numPoints);
let numExtraPoints = document.getElementById('numExtraPoints');console.log(numExtraPoints);
let totalPoints = document.getElementById('totalPoints');console.log(totalPoints);
let numCoins = document.getElementById('numCoins');console.log(numCoins);

export function actualizeDataUser()
{
    //console.clear()
    console.log("ActualizeDataUser")
    let currentUser = JSON.parse(sessionStorage.getItem('userLogged'));console.table(currentUser);

    numPoints.innerHTML = numOfCurrentPoints

    numExtraPoints.innerHTML = salaTime/2

    totalPoints.innerHTML = numOfCurrentPoints + (salaTime/2)
    
    let resCoins = Math.trunc(totalPoints.innerHTML/10)

    winCoins(resCoins)
    insertBestPoints(+totalPoints.innerHTML, currentLevelIndex)
    upLevel(+currentLevelIndex)

    numCoins.innerHTML = resCoins


}
//actualizeDataUser()

function exemplo(){
    let currentUser = JSON.parse(sessionStorage.getItem('userLogged'))

    let users = JSON.parse(localStorage.getItem('users'))

    const userIndex = users.findIndex(user => user.username === currentUser.username)

    //NOTA: Código para mudança de atributos

    users[userIndex] = currentUser

    localStorage.setItem('users', JSON.stringify(users))

    sessionStorage.setItem('userLogged', JSON.stringify(currentUser))

}