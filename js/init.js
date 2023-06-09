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

    let defaultViews =  
    [
        '../img/DefaultRoomAssets/1/DefaultViews/View1.jpg',
        '../img/DefaultRoomAssets/1/DefaultViews/View2.jpg',
        '../img/DefaultRoomAssets/1/DefaultViews/View3.jpg',
        '../img/DefaultRoomAssets/1/DefaultViews/View4.jpg'
    ]
    let alternateViews = [,['../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_1.jpg','../img/DefaultRoomAssets/1/AlternativeViews/View2/View2_2.jpg'],['../img/DefaultRoomAssets/1/AlternativeViews/View3/View3_1.jpg','../img/DefaultRoomAssets/1/AlternativeViews/View3/View2_3.jpg'],]

    //! ERRO NA FUNÇÃO EXPORTADA
    //? ERRO RESOLVIDO MAS TENHO MUITAS QUESTÕES
    let arrayChallenge = []

    let newChallenge = null

    /*----------------------------------------------------------------*/ //Spacewar!
    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 100, "", '',
        '', [],
        'Quem criou "Spacewar!"?', ['Steve Russel', 'Gabe Newell', 'Nolan Bushnell', 'Tim Sweeney'], "Steve Russel",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 10, "", '',
        '', [],
        'Para além de destruir a nave adversária, qual é o outro objetivo em "Spacewar!"?', ['Coletar o máximo de moedas', 'Evitar que a nave toque no Sol', 'Não existia outro objetivo', 'Evitar a colisão com asteroides'], "Evitar que a nave toque no Sol",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Spacewar!', 'quiz', '', '', 100, "", '0',
        '', [],
        'Qual a principal razão pela qual "Spacewar!" foi famoso somente em universidades?', ['Ocupação de Steve Russel em outros projetos', 'Custos altos e tamanho dos computadores', 'Falta de vontade em vender ao público', 'Uma avaria impediu que fosse comercialmente produzido'], "Custos altos e tamanho dos computadores",
        '', '',
        'https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=44&end=190', '',
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //ComputerSpace
    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, "", "", 
        "",[],
        "", [], 0,
        "Quem criou Computer Space?(Iniciais de nome com Letra maiusculas)", "Nolan Bushnell", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 100, "", "", 
        "",[],
        "", [], 0,
        "Qual era a única cor da versão de 2 jogadores?", "verde", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "ComputerSpace", "simple", "", "0", 300, "", "", 
        "",[],
        "", [], 0,
        "Quanto tempo (em segundos) tinhas direito a jogar?", "90", 
        "https://www.youtube-nocookie.com/embed/Egw-EdMVZ4w?start=190&end=330", "", 
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //Pong
    newChallenge = addChallenge(
        "Pong", "simple", "", "", 100, "", "", 
        "",[],
        "", [], 0,
        "Que empresa Nolan Bushnell fundou após o fracasso de Computer Space?", "Atari", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Pong", "simple", "", "", 100, "", "", 
        "",[],
        "", [], 0,
        "De qual plataforma surgiu a inspiração para o desenvolvimento de Pong?", "Magnavox Odissey", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Pong", "simple", "", "", 100, "", "1", 
        "",[],
        "", [], 0,
        "Qual é o nome do bar onde Pong foi instalado?", "Andy Capp's", 
        "https://www.youtube-nocookie.com/embed/Or35jROrkmc?start=5&end=125", "", 
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //Jornal
    newChallenge = addChallenge
    (
        'Jornal', 'quiz', '', '1', 10, "", '',
        '', [],
        'Qual destas é uma consequência do sucesso da Atari com "Pong"?', ['Aumento do preço de cada jogo', 'A Atari foi adquirida por uma outra empresa', 'Onda de modificações e clones de Pong', 'Desenvolvimento de atualizações de Pong'], "Onda de modificações e clones de Pong",
        '', '',
        '', 'Devido ao sucesso de "Pong", empresas que faziam jogos arcada electro-mecânicos, tentaram capitalizar o sucesso da Atari (como, por exemplo: Sega e Williams Electronics). Enquanto que algumas fizeram modificações ao jogo original, outras simplesmente fizeram clones de "Pong". Bushnell, apesar de não ter conseguido patentear a ideia, optou por não processar tais empresas pelo ocorrido. Ainda por cima, Baer processou não só a Atari como outras empresas por terem usado suas patentes que continham conceitos básicos para os videojogos. Neste caso, o fundador a Atari necociou com a Baer para adquirir direitos para usar as patentes. O sucesso destas negociações permitiu que a atari desenvolvesse mais jogos e que "Pong" tivesse uma versão para uma consola.',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Jornal', 'quiz', '', '1', 10, "", '',
        '', [],
        'Porque é que a Baer processou a Atari?', ['Por "Pong" ser uma cópia de um produto da Baer', 'Por uma declaração de Bushnell que seria uma difamação contra Baer', 'Uso não autorizado de uma patente com princípios básicos de videojogos', 'A Atari, na verdade, não foi processada pela Baer'], "Uso não autorizado de uma patente com princípios básicos de videojogos",
        '', '',
        '', 'Devido ao sucesso de "Pong", empresas que faziam jogos arcada electro-mecânicos, tentaram capitalizar o sucesso da Atari (como, por exemplo: Sega e Williams Electronics). Enquanto que algumas fizeram modificações ao jogo original, outras simplesmente fizeram clones de "Pong". Bushnell, apesar de não ter conseguido patentear a ideia, optou por não processar tais empresas pelo ocorrido. Ainda por cima, Baer processou não só a Atari como outras empresas por terem usado suas patentes que continham conceitos básicos para os videojogos. Neste caso, o fundador a Atari necociou com a Baer para adquirir direitos para usar as patentes. O sucesso destas negociações permitiu que a atari desenvolvesse mais jogos e que "Pong" tivesse uma versão para uma consola.',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Jornal', 'quiz', '', '1', 300, "", '',
        '', [],
        'O que é que a Atari conseguiu após concluir com sucesso as negociações com a Baer?', ['A Atari foi adquirida pela Baer', 'A Atari conseguiu desenvolver mais jogos', 'A Atari teve de passar por uma reformulação', 'A Atari foi indenizada'], "A Atari conseguiu desenvolver mais jogos",
        '', '',
        '', 'Devido ao sucesso de "Pong", empresas que faziam jogos arcada electro-mecânicos, tentaram capitalizar o sucesso da Atari (como, por exemplo: Sega e Williams Electronics). Enquanto que algumas fizeram modificações ao jogo original, outras simplesmente fizeram clones de "Pong". Bushnell, apesar de não ter conseguido patentear a ideia, optou por não processar tais empresas pelo ocorrido. Ainda por cima, Baer processou não só a Atari como outras empresas por terem usado suas patentes que continham conceitos básicos para os videojogos. Neste caso, o fundador a Atari necociou com a Baer para adquirir direitos para usar as patentes. O sucesso destas negociações permitiu que a atari desenvolvesse mais jogos e que "Pong" tivesse uma versão para uma consola.',
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //GunFight
    newChallenge = addChallenge
    (
        'GunFight', 'quiz', '', '', 10, "", '',
        '', [],
        'Qual destes foi o gênero no qual "Gun Fight" foi pioneiro?', ['Estratégia', 'Puzzle', 'RPG', 'Ação e aventura'], "Ação e aventura",
        '', '',
        'https://www.youtube-nocookie.com/embed/PsZPoKU-eFY?start=25&end=100', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'GunFight', 'quiz', '', '', 10, "", '',
        '', [],
        'Como se chama o jogo japonês que originou Gun Fight?', ['Cowboy vs Sheriff', 'Western Gun', 'Cowboy Duel', 'Western Fight'], "Western Gun",
        '', '',
        'https://www.youtube-nocookie.com/embed/PsZPoKU-eFY?start=25&end=100', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'GunFight', 'quiz', '', '', 200, "", '',
        '', [],
        'Qual era a inovação do Gun Fight', ['Era o primeiro jogo a usar um microprocessador', 'Era o primeiro jogo de 16-bits', 'Era o primeiro jogo a usar cores para além do monocromático', 'Era o primeiro jogo com um joystick'], "Era o primeiro jogo a usar um microprocessador",
        '', '',
        'https://www.youtube-nocookie.com/embed/PsZPoKU-eFY?start=25&end=100', '',
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/

    

    /*----------------------------------------------------------------*/
    console.log(arrayChallenge)

    let defaultMaps = 
    [
        '<area id="challengeArea" data-type-question="quiz" alt="Spacewar!" title="Spacewar!" data-bs-toggle="modal" data-bs-target="#introduction" coords="442,246,472,296,472,312,468,320,479,322,480,467,453,469,452,394,335,394,336,467,304,471,306,323,323,323,316,305,316,290,344,246" shape="poly"><area id="challengeArea" data-type-question="simple" alt="ComputerSpace" title="ComputerSpace" data-bs-toggle="modal" data-bs-target="#introduction" coords="694,83,708,92,713,109,713,158,706,204,701,251,700,270,708,280,708,333,706,373,712,394,712,421,707,439,699,460,696,466,575,467,575,461,567,439,559,419,556,395,562,373,563,334,559,288,568,275,568,250,563,205,558,157,555,107,563,91,580,82,634,80" shape="poly">',
        '<area id="actionArea" class="changeView-MC" alt="TRAVA" title="TRAVA" coords="674,258,618,180" shape="rect">', 
        '<area id="challengeArea" data-type-question="simple" alt="Pong" title="Pong" data-bs-toggle="modal" data-bs-target="#introduction" coords="668,58,883,60,859,202,875,243,872,464,684,465,683,244,696,205" shape="poly"><area id="actionArea" data-type-question="quiz" alt="Bau" title="Baú" coords="433,214,580,217,605,242,606,256,624,256,627,456,596,456,594,354,424,352,423,456,396,456,393,257,411,259,413,244" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="GunFight" title="GunFight" data-bs-toggle="modal" data-bs-target="#introduction" coords="160,21,349,21,349,45,343,49,336,50,336,197,343,209,349,211,351,442,336,448,334,465,173,464,173,448,161,443,158,212,172,194,173,50,167,50,164,43,159,45" shape="poly">', 
        '<area id="challengeArea" alt="Porta de entrada" title="Porta de entrada" data-bs-toggle="modal" data-bs-target="#introduction" coords="437,53,597,407" shape="rect">'
    ]

    let alternativeMaps = 
    [
        [''],
        ['<area id="actionArea" class="changeView" alt="portaFechada" title="PORTA" coords="438,53,596,405" shape="rect">', '<area id="actionArea" class="finishLevel" alt="Fim" title="Fim" coords="589,58,533,406" shape="rect">'],
        [`
        <area id="challengeArea" data-type-question="quiz" alt="GunFight" title="GunFight" data-bs-toggle="modal" data-bs-target="#introduction" coords="160,20,349,21,349,42,342,49,336,47,336,195,345,196,343,207,348,211,348,444,161,445,159,211,166,211,165,198,172,196,172,51,165,50,159,43" shape="poly">
        <area id="challengeArea" data-type-question="quiz" alt="Jornal" title="Jornal" data-bs-toggle="modal" data-bs-target="#introduction" coords="454,173,564,264" shape="rect">
        <area id="challengeArea" data-type-question="simple" alt="Pong" title="Pong" data-bs-toggle="modal" data-bs-target="#introduction" coords="672,58,887,59,880,78,872,111,867,160,861,192,861,218,866,229,875,241,880,466,673,467,677,243,688,229,695,215,693,189,689,156,682,120,674,78,668,79"" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="GunFight" title="GunFight" data-bs-toggle="modal" data-bs-target="#introduction" coords="160,20,350,21,350,45,342,45,345,50,337,50,335,197,344,197,349,208,349,444,336,446,337,468,168,466,172,449,159,446,160,209,167,211,166,197,172,200,172,52,165,49,167,42,158,46" shape="poly">`],
        ['']
    ]

    let newLevel = LevelModel.createLevel('1 - O Início', '../img/levelIcons/LVL1.png', '../img/levelIcons/LVL1_LOCKED.png', 900, arrayChallenge, 'level1.html', defaultViews, alternateViews, defaultMaps, alternativeMaps,[[]],[],[['Moeda ComputerSpace', '../img/DefaultRoomAssets/1/Items/ComputerSpace-Coin.png'],['Chave', '../img/DefaultRoomAssets/1/Items/ChestKey.png']])
    levelsList.push(newLevel)

    //---------------------------------------------------------------------------------------------------------------------------------------------------


    defaultViews =  
    [
        '../img/DefaultRoomAssets/2/DefaultViews/View1.png',
        '../img/DefaultRoomAssets/2/DefaultViews/View2.png',
        '../img/DefaultRoomAssets/2/DefaultViews/View3.png',
        '../img/DefaultRoomAssets/2/DefaultViews/View4.png'
    ]
    alternateViews = [,['../img/DefaultRoomAssets/2/AlternativeViews/View2/View2_1.jpg','../img/DefaultRoomAssets/2/AlternativeViews/View2/View2_2.jpg'],['../img/DefaultRoomAssets/2/AlternativeViews/View3/View3_1.jpg','../jpg/DefaultRoomAssets/2/AlternativeViews/View3/View3_2.jpg'],]

    //! ERRO NA FUNÇÃO EXPORTADA
    //? ERRO RESOLVIDO MAS TENHO MUITAS QUESTÕES
    arrayChallenge = []

    newChallenge = null

    /*----------------------------------------------------------------*/ //Spacewar!
    newChallenge = addChallenge
    (
        'Space Invaders', 'quiz', '', '', 100, "", '',
        '', [],
        'Qual a empresa que desenvolveu "Space Invaders"?', ['Sega', 'Namco', 'Taito', 'Nintendo'], "Taito",
        '', '',
        'https://www.youtube.com/embed/3Cxw1HAD89c?start=49', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Space Invaders', 'quiz', '', '', 10, "", '',
        '', [],
        'Qual empresa adquiriu os direitos do jogo nos EUA?', ['Midway', 'Atari', 'Phillips', 'Williams Electronics'], "Midway",
        '', '',
        'https://www.youtube.com/embed/3Cxw1HAD89c?start=49', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Space Invaders', 'quiz', '', '', 100, "", '0',
        '', [],
        'Qual foi o jogo foi serviu de inspiração para "Space Invaders", segundo o criador do jogo?', ['Asteroids', 'Breakout', 'Space monsters', 'Galaxian'], "Breakout",
        '', '',
        'https://www.youtube.com/embed/3Cxw1HAD89c?start=49', '',
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //ComputerSpace
    newChallenge = addChallenge(
        "PacMan", "simple", "", "0", 100, "", "", 
        '', [],
        'Qual foi o nome original do jogo quando o mesmo foi jançado no Japão?', ['Ate-Man', 'Puck-man', 'Pac-guy', 'Mac-Man'], "Puck-man",
        '', '',
        'https://www.youtube.com/embed/3Cxw1HAD89c?start=49', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "PacMan", "simple", "", "0", 100, "", "", 
        '', [],
        'Quando é que o jogo foi lançado nos EUA?', ['Janeiro de 1980', 'Dezembro de 1979', 'Outubro de 1980', 'Julho de 1981'], "Outubro de 1980",
        '', '',
        'https://www.youtube.com/embed/3Cxw1HAD89c?start=49', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "PacMan", "simple", "", "0", 300, "", "", 
        '', [],
        'Qual opção comprova que "Pac-Man" foi um sucesso mundial?', ['A venda de merchandising', 'O facto de o jogo ser viciante', 'A existência de desenhos animados baseados no jogo', 'Todas as anteriores estão corretas'], "Todas as anteriores estão corretas",
        '', '',
        'https://www.youtube.com/embed/3Cxw1HAD89c?start=49', '',
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //Pong
    newChallenge = addChallenge(
        "Galaxian", "simple", "", "", 100, "", "", 
        "",[],
        "", [], 0,
        'Qual o nome da empresa que publicou "Galaxian"?', "Midway", 
        "https://www.youtube.com/embed/UEYIG1UYbyc?start=0", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Galaxian", "simple", "", "", 100, "", "", 
        "",[],
        "", [], 0,
        'Devido ao sucesso de "Galaxian", que jogo a Namco lancou?', "Galaga", 
        "https://www.youtube.com/embed/UEYIG1UYbyc?start=0", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge(
        "Galaxian", "simple", "", "", 100, "", "1", 
        "",[],
        "", [], 0,
        'É verdade que "Galaxian foi o 1º jogo a usar sprites multi-coloridos"? ("Sim", se verdadeiro | "Não", se falso)', "Sim", 
        "https://www.youtube.com/embed/UEYIG1UYbyc?start=0", "", 
        false
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //Jornal
    newChallenge = addChallenge
    (
        'Galaga', 'quiz', '', '1', 10, "", '',
        '', [],
        'Qual desenvolvedor teve foi encarregue de criar uma nova versão de "Galaxian"?', ['Shigeru Miyamoto', 'Toru Iwatani', 'Tomohiro Nishikado', 'Shigeru Yokoyama'], "Shigeru Yokoyama",
        '', '',
        'https://www.youtube.com/embed/4LLzJkvQBe0?start=75&end=271', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Galaga', 'quiz', '', '1', 10, "", '',
        '', [],
        'Qual destes melhoramentos é verdadeiro', ['O jogador poderia disparar armas diferentes', 'Os inimigos poderiam abduzir a nave do jogador', 'O jogo passava a ter moedas', 'Todas as anteriores estão corretas'], "Os inimigos poderiam abduzir a nave do jogador",
        '', '',
        'https://www.youtube.com/embed/4LLzJkvQBe0?start=75&end=271', '',
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Galaga', 'quiz', '', '1', 300, "", '',
        '', [],
        'Por cada crédito (= 1 moeda), em média, quantos minutos o jogo durava?', ['4 minutos', '7 minutos', '5 minutos', '9 minutos'], "7 minutos",
        '', '',
        'https://www.youtube.com/embed/4LLzJkvQBe0?start=75&end=271', '',
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/ //GunFight
    newChallenge = addChallenge
    (
        'Frogger', 'quiz', '', '', 10, "", '',
        "",[],
        "", [], 0,
        'Qual a empresa que desenvolveu "Frogger"?', "Konami", 
        "https://www.youtube.com/embed/Xytsu2oxLPo?start=0&end=120", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Frogger', 'quiz', '', '', 10, "", '',
        "",[],
        "", [], 0,
        'É verdade que o sapo pode nadar neste jogo? ("Sim", se verdadeiro | "Não", se falso)', "Não",  
        "https://www.youtube.com/embed/Xytsu2oxLPo?start=0&end=120", "", 
        false
    )
    arrayChallenge.push(newChallenge)

    newChallenge = addChallenge
    (
        'Frogger', 'quiz', '', '', 200, "", '',
        "",[],
        "", [], 0,
        'É verdade que "Frogger" foi um dos primeiros a ter diversas animações quando o sapo morre? ("Sim", se verdadeiro | "Não", se falso)', "Sim", 
        "https://www.youtube.com/embed/Xytsu2oxLPo?start=0&end=120", "", 
        true
    )
    arrayChallenge.push(newChallenge)
    /*----------------------------------------------------------------*/

    

    /*----------------------------------------------------------------*/
    console.log(arrayChallenge)

    defaultMaps = 
    [
        '<area id="challengeArea" data-type-question="quiz" alt="Space Invaders" title="Space Invaders" data-bs-toggle="modal" data-bs-target="#introduction" coords="304,57,467,56,467,114,460,116,461,213,468,214,468,278,460,281,464,467,311,467,315,280,306,280,304,216,311,215,312,118,303,117" shape="poly"><area id="challengeArea" data-type-question="simple" alt="PacMan" title="PacMan" data-bs-toggle="modal" data-bs-target="#introduction" coords="573,60,726,59,725,216,733,217,732,280,724,280,725,467,574,470,578,282,569,281,568,219,575,216" shape="poly">',
        '<area id="actionArea" class="changeView-MC" alt="TRAVA" title="TRAVA" coords="674,258,618,180" shape="rect">', 
        '<area id="challengeArea" data-type-question="simple" alt="Galaxian" title="Galaxian" data-bs-toggle="modal" data-bs-target="#introduction" coords="177,61,339,467" shape="rect"><area id="actionArea" data-type-question="quiz" alt="Bau" title="Baú" coords="433,214,580,217,605,242,606,256,624,256,627,456,596,456,594,354,424,352,423,456,396,456,393,257,411,259,413,244" shape="poly"><area id="challengeArea" data-type-question="quiz" alt="Frogger" title="Frogger" data-bs-toggle="modal" data-bs-target="#introduction" coords="681,60,843,466" shape="rect">', 
        '<area id="challengeArea" alt="Porta de entrada" title="Porta de entrada" data-bs-toggle="modal" data-bs-target="#introduction" coords="437,53,597,407" shape="rect">'
    ]

    alternativeMaps = 
    [
        [''],
        ['<area id="actionArea" class="changeView" alt="portaFechada" title="PORTA" coords="438,53,596,405" shape="rect">', '<area id="actionArea" class="finishLevel" alt="Fim" title="Fim" coords="589,58,533,406" shape="rect">'],
        [`
        <area id="challengeArea" data-type-question="quiz" alt="Frogger" title="Frogger" data-bs-toggle="modal" data-bs-target="#introduction" coords="681,60,843,466" shape="rect">
        <area id="challengeArea" data-type-question="quiz" alt="Galaga" title="Galaga" data-bs-toggle="modal" data-bs-target="#introduction" coords="454,173,564,264" shape="rect">
        <area id="challengeArea" data-type-question="simple" alt="Galaxian" title="Galaxian" data-bs-toggle="modal" data-bs-target="#introduction" coords="177,61,339,467" shape="rect"><area id="challengeArea" data-type-question="quiz" alt="Frogger" title="Frogger" data-bs-toggle="modal" data-bs-target="#introduction" coords="681,60,843,466" shape="rect">`],
        ['']
    ]
    newLevel = LevelModel.createLevel('2 - A Era Dourada', '../img/levelIcons/LVL2.png', '../img/levelIcons/LVL2_LOCKED.png', 1800, arrayChallenge, 'level2.html', defaultViews, alternateViews, defaultMaps, alternativeMaps,[[]],[],[['Moeda PacMan', '../img/DefaultRoomAssets/2/Items/PacManCoin.png'],['Chave', '../img/DefaultRoomAssets/2/Items/ChestKey.png']])
    levelsList.push(newLevel)

    //-----------------------------------------------------------------------------
    /*
    newLevel = LevelModel.createLevel('3 - Decadência e Recuperação', '../img/levelIcons/LVL3.png', '../img/levelIcons/LVL3_LOCKED.png', 630, [], 'level3.html')
    levelsList.push(newLevel)
    */

    localStorage.setItem('levels', JSON.stringify(levelsList))
}

