import { initDataUsers } from "./models/UsersModel.js"
import * as LevelModel from "./models/LevelModel.js"

console.log("init.js")

console.log("Available Width: " + window.screen.availWidth);
console.log("Available Height: " + window.screen.availHeight);

window.alert = function() {
    debugger;
}

initDataUsers()

if (!localStorage.getItem('levels')){
    let levelsList = []

    let newLevel = LevelModel.createLevel('1 - O Início', '../img/levelIcons/LVL1.png', '../img/levelIcons/LVL1_LOCKED.png', 630, [], 'level1.html')
    levelsList.push(newLevel)

    newLevel = LevelModel.createLevel('2 - A Era Dourada', '../img/levelIcons/LVL2.png', '../img/levelIcons/LVL2_LOCKED.png', 630, [], 'level2.html')
    levelsList.push(newLevel)

    newLevel = LevelModel.createLevel('3 - Decadência e Recuperação', '../img/levelIcons/LVL3.png', '../img/levelIcons/LVL3_LOCKED.png', 630, [], 'level3.html')
    levelsList.push(newLevel)

    localStorage.setItem('levels', JSON.stringify(levelsList))
}