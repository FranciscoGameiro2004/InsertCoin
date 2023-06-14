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

    let defaultViews =  [
        '../img/DefaultRoomAssets/1/DefaultViews/View1.jpg',
        '../img/DefaultRoomAssets/1/DefaultViews/View2.jpg',
        '../img/DefaultRoomAssets/1/DefaultViews/View3.jpg',
        '../img/DefaultRoomAssets/1/DefaultViews/View4.jpg']
    let alternateViews = [,['../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_1.jpg','../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_2.jpg'],['../img/DefaultRoomAssets/1/AlternativeViews/View3/View3_1.jpg','../img/DefaultRoomAssets/1/AlternativeViews/View3/View2_3.jpg'],]

    //! ERRO NA FUNÇÃO EXPORTADA
    //? ERRO RESOLVIDO MAS TENHO MUITAS QUESTÕES
    let arrayChallenge = []

    let newChallenge = null

    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 10, 0, '',
        '', [], 'Quem criou "Spacewar!"?', ['Steve Russel', 'Gabe Newell', 'Nolan Bushnell', 'Tim Sweeney'], "Steve Russel",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 10, 0, '',
        '', [], 'Para além de destruir a nave adversária, qual é o outro objetivo em "Spacewar!"?', ['Coletar o máximo de moedas', 'Evitar que a nave toque no Sol', 'Não existia outro objetivo', 'Evitar a colisão com asteroides'], "Evitar que a nave toque no Sol",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 10, 0, '0',
        '', [], 'Qual a principal razão pela qual "Spacewar!" foi famoso somente em universidades?', ['Ocupação de Steve Russel em outros projetos', 'Custos altos e tamanho dos computadores', 'Falta de vontade em vender ao público', 'Uma avaria impediu que fosse comercialmente produzido'], "Custos altos e tamanho dos computadores",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/
    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, 0, "", 
        "",[],
        "", [], 0,
        "Quem criou Computer Space?(Iniciais de nome com Letra maiusculas)", "Nolan Bushnell", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330&autoplay=1", "", 
        false)
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, 0, "", 
        "",[],
        "", [], 0,
        "Qual era a única cor da versão de 2 jogadores?", "verde", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330&autoplay=1", "", 
        false)
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, 0, "", 
        "",[],
        "", [], 0,
        "Quanto tempo (em segundos) tinhas direito a jogar?", "90", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330&autoplay=1", "", 
        true)
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/
    newChallenge = addChallenge(
        "Pong", "simple", "", "", 100, 0, "", 
        "",[],
        "", [], 0,
        "Que empresa Nolan Bushnell fundou após o fracasso de Computer Space?", "Atari", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125&autoplay=1", "", 
        false)
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Pong", "simple", "", "", 100, 0, "", 
        "",[],
        "", [], 0,
        "De qual plataforma surgiu a inspiração para o desenvolvimento de Pong?", "Magnavox Odissey", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125&autoplay=1", "", 
        false)
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Pong", "simple", "", "1", 100, 0, "", 
        "",[],
        "", [], 0,
        "Qual é o nome do bar onde Pong foi instalado?", "Andy Capp's", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125&autoplay=1", "", 
        true)
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/














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