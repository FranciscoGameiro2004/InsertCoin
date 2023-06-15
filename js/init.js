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

    /*----------------------------------------------------------------*/
    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 10, 0, '',
        '', [],
        'Quem criou "Spacewar!"?', ['Steve Russel', 'Gabe Newell', 'Nolan Bushnell', 'Tim Sweeney'], "Steve Russel",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 10, "", '',
        '', [],
        'Para além de destruir a nave adversária, qual é o outro objetivo em "Spacewar!"?', ['Coletar o máximo de moedas', 'Evitar que a nave toque no Sol', 'Não existia outro objetivo', 'Evitar a colisão com asteroides'], "Evitar que a nave toque no Sol",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 10, "", '0',
        '', [],
        'Qual a principal razão pela qual "Spacewar!" foi famoso somente em universidades?', ['Ocupação de Steve Russel em outros projetos', 'Custos altos e tamanho dos computadores', 'Falta de vontade em vender ao público', 'Uma avaria impediu que fosse comercialmente produzido'], "Custos altos e tamanho dos computadores",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/
    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, "", "", 
        "",[],
        "", [], 0,
        "Quem criou Computer Space?(Iniciais de nome com Letra maiusculas)", "Nolan Bushnell", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330&autoplay=1", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, "", "", 
        "",[],
        "", [], 0,
        "Qual era a única cor da versão de 2 jogadores?", "verde", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330&autoplay=1", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, "", "", 
        "",[],
        "", [], 0,
        "Quanto tempo (em segundos) tinhas direito a jogar?", "90", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330&autoplay=1", "", 
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/
    newChallenge = addChallenge(
        "Pong", "simple", "", "", 100, "", "", 
        "",[],
        "", [], 0,
        "Que empresa Nolan Bushnell fundou após o fracasso de Computer Space?", "Atari", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125&autoplay=1", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Pong", "simple", "", "", 100, "", "", 
        "",[],
        "", [], 0,
        "De qual plataforma surgiu a inspiração para o desenvolvimento de Pong?", "Magnavox Odissey", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125&autoplay=1", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Pong", "simple", "", "1", 100, "", "", 
        "",[],
        "", [], 0,
        "Qual é o nome do bar onde Pong foi instalado?", "Andy Capp's", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125&autoplay=1", "", 
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/
    newChallenge = addChallenge
    (
        'Jornal', 'quiz', '', '1', 10, "", '',
        '', [],
        'Qual destas é uma consequência do sucesso da Atari com "Pong"?', ['Aumento do preço de cada jogo', 'A Atari foi adquirida por uma outra empresa', 'Onda de modificações e clones de Pong', 'Desenvolvimento de atualizações de Pong'], "Onda de modificações e clones de Pong",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Jornal', 'quiz', '', '1', 10, "", '',
        '', [],
        'Porque é que a Baer processou a Atari?', ['Por "Pong" ser uma cópia de um produto da Baer', 'Por uma declaração de Bushnell que seria uma difamação contra Baer', 'Uso não autorizado de uma patente com princípios básicos de videojogos', 'A Atari, na verdade, não foi processada pela Baer'], "Uso não autorizado de uma patente com pricípios básicos de videojogos",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Jornal', 'quiz', '', '1', 10, "", '',
        '', [],
        'O que é que a Atari conseguiu após concluir com sucesso as negociações com a Baer?', ['A Atari foi adquirida pela Baer', 'A Atari conseguiu desenvolver mais jogos', 'A Atari teve de passar por uma reformulação', 'A Atari foi indenizada'], "A Atari conseguiu desenvolver mais jogos",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190&autoplay=1', '',
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/
    newChallenge = addChallenge
    (
        'GunFight', 'quiz', '', '', 10, "", '',
        '', [],
        'Qual destes foi o gênero no qual "Gun Fight" foi pioneiro?', ['Estratégia', 'Puzzle', 'RPG', 'Ação e aventura'], "Ação e aventura",
        '', '',
        'https://www.youtube-nocookie.com/embed/PsZPoKU-eFY?start=25&end=100&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'GunFight', 'quiz', '', '', 10, "", '',
        '', [],
        'Como se chama o jogo japonês que originou Gun Fight?', ['Cowboy vs Sheriff', 'Western Gun', 'Cowboy Duel', 'Western Fight'], "Western Gun",
        '', '',
        'https://www.youtube-nocookie.com/embed/PsZPoKU-eFY?start=25&end=100&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'GunFight', 'quiz', '', '', 10, "", '',
        '', [],
        'Qual era a inovação do Gun Fight', ['Era o primeiro jogo a usar um microprocessador', 'Era o primeiro jogo de 16-bits', 'Era o primeiro jogo a usar cores para além do monocromático', 'Era o primeiro jogo com um joystick'], "Era o primeiro jogo a usar um microprocessador",
        '', '',
        'https://www.youtube-nocookie.com/embed/PsZPoKU-eFY?start=25&end=100&autoplay=1', '',
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/

    

    /*----------------------------------------------------------------*/
    console.log(arrayChallenge)

    let defaultMaps = 
    [
        '<area id="challengeArea" data-type-question="quiz" alt="Spacewar!" title="Spacewar!" data-bs-toggle="modal" data-bs-target="#introduction" coords="442,246,472,296,472,312,468,320,479,322,480,467,453,469,452,394,335,394,336,467,304,471,306,323,323,323,316,305,316,290,344,246" shape="poly"><area id="challengeArea" data-type-question="simple" alt="ComputerSpace" title="ComputerSpace" data-bs-toggle="modal" data-bs-target="#introduction" coords="694,83,708,92,713,109,713,158,706,204,701,251,700,270,708,280,708,333,706,373,712,394,712,421,707,439,699,460,696,466,575,467,575,461,567,439,559,419,556,395,562,373,563,334,559,288,568,275,568,250,563,205,558,157,555,107,563,91,580,82,634,80" shape="poly">',
        '<area id="challengeArea" alt="TRAVA" title="TRAVA" coords="674,258,618,180" shape="rect">', 
        '<area id="challengeArea" data-type-question="simple" alt="Pong" title="Pong" data-bs-toggle="modal" data-bs-target="#introduction" coords="668,58,883,60,859,202,875,243,872,464,684,465,683,244,696,205" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="Baú" title="Baú" data-bs-toggle="modal" data-bs-target="#introduction" coords="433,214,580,217,605,242,606,256,624,256,627,456,596,456,594,354,424,352,423,456,396,456,393,257,411,259,413,244" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="GunFight" title="GunFight" data-bs-toggle="modal" data-bs-target="#introduction" coords="160,21,349,21,349,45,343,49,336,50,336,197,343,209,349,211,351,442,336,448,334,465,173,464,173,448,161,443,158,212,172,194,173,50,167,50,164,43,159,45" shape="poly">', 
        '<area id="challengeArea" alt="Porta de entrada" title="Porta de entrada" data-bs-toggle="modal" data-bs-target="#introduction" coords="437,53,597,407" shape="rect">'
    ]

    let alternativeMaps = 
    [
        [''],
        ['<area id="challengeArea" alt="TRAVA" title="TRAVA" coords="438,53,596,405" shape="rect">', '<area id="challengeArea" alt="TRAVA" title="TRAVA" coords="589,58,533,406" shape="rect">'],
        ['<area id="challengeArea" data-type-question="simple" alt="Pong" title="Pong" data-bs-toggle="modal" data-bs-target="#introduction" coords="670,59,884,58,884,75,872,108,866,159,860,191,860,216,868,229,872,242,872,463,682,461,680,241,689,227,695,216,695,193,689,152,680,117,675,79" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="Baú" title="Baú" data-bs-toggle="modal" data-bs-target="#introduction" coords="454,173,564,264" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="GunFight" title="GunFight" data-bs-toggle="modal" data-bs-target="#introduction" coords="160,20,349,21,349,42,342,49,336,47,336,195,345,196,343,207,348,211,348,444,161,445,159,211,166,211,165,198,172,196,172,51,165,50,159,43" shape="poly">', '<area id="challengeArea" data-type-question="simple" alt="Pong" title="Pong" data-bs-toggle="modal" data-bs-target="#introduction" coords="672,58,887,59,880,78,872,111,867,160,861,192,861,218,866,229,875,241,880,466,673,467,677,243,688,229,695,215,693,189,689,156,682,120,674,78,668,79"" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="GunFight" title="GunFight" data-bs-toggle="modal" data-bs-target="#introduction" coords="160,20,350,21,350,45,342,45,345,50,337,50,335,197,344,197,349,208,349,444,336,446,337,468,168,466,172,449,159,446,160,209,167,211,166,197,172,200,172,52,165,49,167,42,158,46" shape="poly">'],
        ['']
    ]

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