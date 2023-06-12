import { initDataUsers } from "./models/UsersModel.js"
import * as LevelModel from "./models/LevelModel.js"
import { addChallenge } from "./models/ChallengeModel.js"

console.log("init.js")

console.log("Available Width: " + window.screen.availWidth);
console.log("Available Height: " + window.screen.availHeight);

window.alert = function() {
    debugger;
}

initDataUsers()


if (!localStorage.getItem('levels'))
{
    let levelsList = []

    let defaultViews =  ['../img/DefaultRoomAssets/1/DefaultViews/View1.jpg','../img/DefaultRoomAssets/1/DefaultViews/View2.jpg','../img/DefaultRoomAssets/1/DefaultViews/View3.jpg','../img/DefaultRoomAssets/1/DefaultViews/View4.jpg']
    let alternateViews = [,['../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_1.jpg','../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_2.jpg'],['../img/DefaultRoomAssets/1/AlternativeViews/View3/View3_1.jpg','../img/DefaultRoomAssets/1/AlternativeViews/View3/View2_3.jpg'],]

    //! ERRO NA FUNÇÃO EXPORTADA
    //? ERRO RESOLVIDO MAS TENHO MUITAS QUESTÕES
    let arrayChallenge = []

    let newChallenge = addChallenge(
        'PDP', 'quiz', '', '', 100, 0, '',
        '', [],
        'Em que ano foi lançado CS?', ['Correto', 'Inc', 'ABC', '1876'], 1876, 
        '', '')
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        'PDP', 'quiz', '', '', 100, 0, '',
        '', [],
        'Em que ano foi lançado CS?', ['1876', 'Inc', 'ABC', 'Correto'], 1876, 
        '', '')
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "ComputerSpace", "simple", "","", 100, 0,"", 
        "",[],
        "", [], 0,
        "Texto da Pergunta Simples", "Resposta da Pergunta Simples", 
        "", "", 
        false)
    arrayChallenge.push(newChallenge)

    console.log(arrayChallenge)

    let defaultMaps = ['map1', 'map2', 'map3', 'map4']
    let alternativeMaps = [[''],['map2-1', 'map2-2'],['map3-1', 'map3-2'],['']]

    let newLevel = LevelModel.createLevel('1 - O Início', '../img/levelIcons/LVL1.png', '../img/levelIcons/LVL1_LOCKED.png', 15, arrayChallenge, 'level1.html', defaultViews, alternateViews, defaultMaps, alternativeMaps,[[]],[],[['Moeda ComputerSpace', '../img/DefaultRoomAssets/1/Items/ComputerSpace-Coin.png'],['Chave', '../img/DefaultRoomAssets/1/Items/ChestKey.png']])
    levelsList.push(newLevel)

    defaultViews = []
    alternateViews = []
    newLevel = LevelModel.createLevel('2 - A Era Dourada', '../img/levelIcons/LVL2.png', '../img/levelIcons/LVL2_LOCKED.png', 630, [], 'level2.html')
    levelsList.push(newLevel)

    defaultViews =[]
     alternateViews = []
    newLevel = LevelModel.createLevel('3 - Decadência e Recuperação', '../img/levelIcons/LVL3.png', '../img/levelIcons/LVL3_LOCKED.png', 630, [], 'level3.html')
    levelsList.push(newLevel)

    localStorage.setItem('levels', JSON.stringify(levelsList))
}