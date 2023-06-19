/*
<table class="table">

    <tr>
        <th>Pontuação:</th>
        <td id="numPoints">150000 pts</td>
    </tr>

    <tr>
        <th>Pontuação extra (MM:SS restantes):</th>
        <td id="numExtraPoints">35000 pts</td>
    </tr>

    <tr>
        <th>Pontuação total:</th>
        <td id="totalPoints">185000 pts</td>
    </tr>

    <tr>
        <th>Moedas Ganhas:</th>
        <td id="numCoins">185 Moedas</td>
    </tr>

</table>
*/

import { completedArray } from "./level1View.js";

let numPoints = document.getElementById('numPoints');console.log(numPoints);
let numExtraPoints = document.getElementById('numExtraPoints');console.log(numExtraPoints);
let totalPoints = document.getElementById('totalPoints');console.log(totalPoints);
let numCoins = document.getElementById('numCoins');console.log(numCoins);

function actualizeDataUser()
{
    let currentUser = JSON.parse(sessionStorage.getItem('userLogged'));console.table(currentUser);

    console.log(completedArray)
}
actualizeDataUser()

export function exemplo(){
    let currentUser = JSON.parse(sessionStorage.getItem('userLogged'))

    let users = JSON.parse(localStorage.getItem('users'))

    const userIndex = users.findIndex(user => user.username === currentUser.username)

    //NOTA: Código para mudança de atributos

    users[userIndex] = currentUser

    localStorage.setItem('users', JSON.stringify(users))

    sessionStorage.setItem('userLogged', JSON.stringify(currentUser))

}