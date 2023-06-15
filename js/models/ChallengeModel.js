const typeQuestion = []

class Challenge{
    title = ''
    type = ''
    sequence = ''
    requiredItem = ''
    points = 0
    reward = ''
    itemToRecieve = ''

    //NOTA: Fill-in-blanks
    fibText = ''
    fibAnswers = []

    //NOTA: Quiz
    quizText = ''
    quizAnswers = []
    quizAnswer = 0

    //NOTA: Resposta símples
    simText = ''
    simAnswer = ''

    //NOTA: Vídeo do Youtube/Texto expoxitivo//mensagem
    ytLink = ''
    expTextContent = ''

    
    recieveMasterCoinPart = false

    //NOTA: Ação final do challenge
    finalFunction = ""

    constructor(
        title, type, sequence , requiredItem , points, reward, itemToRecieve, 
        fibText, fibAnswers,
        quizText, quizAnswers,quizAnswer, 
        simText, simAnswer, 
        ytLink, expTextContent, 
        recieveMasterCoinPart,
        )
        {
            this.title = title
            this.type = type
            this.sequence = sequence
            this.requiredItem = requiredItem
            this.points = points
            this.reward = reward
            this.itemToRecieve = itemToRecieve

            this.fibText = fibText
            this.fibAnswers = fibAnswers

            this.quizText = quizText
            this.quizAnswers = quizAnswers
            this.quizAnswer = quizAnswer

            this.simText = simText
            this.simAnswer = simAnswer

            this.ytLink = ytLink
            this.expTextContent = expTextContent

            this.recieveMasterCoinPart = recieveMasterCoinPart
            
            /*
            switch (type)
            {
                //TODO: Acrescentar condições em cada tipo de atividade.
                case ('fill-in-blanks'):    this.fibText = fibText
                                            this.fibAnswers = fibAnswers
                                            break;

                case ('quiz'):  this.quizText = quizText
                                this.quizAnswers = quizAnswers
                                this.quizAnswer = quizAnswer
                                break;
                
                case ('simple'):    this.simText = simText
                                    this.simAnswer = simAnswer
                                    break;

                case ('youtube-video'): this.ytLink = ytLink
                                        break;
                
                case ('expTextContent'):    this.expTextContent = expTextContent
                                            break;
                default:    console.log(`"${type}" is not a valid activity type.`)
            }
            */
    }
}

//! ERRO NESTA FUNÇÃO
//? ERRO RESOLVIDO MAS TENHO MUITAS QUESTÕES
export function addChallenge(title, type, sequence = '', requiredItem = '', points = 0, reward = 0, itemToRecieve = '', fibText = '', fibAnswers = [], quizText = '', quizAnswers = [], quizAnswer ,simText = '', simAnswer = '', ytLink='', expTextContent='', recieveMasterCoinPart=false){
    const newChallenge = new Challenge(title, type, sequence, requiredItem, points, reward, itemToRecieve, fibText, fibAnswers, quizText, quizAnswers, quizAnswer, simText, simAnswer, ytLink, expTextContent, recieveMasterCoinPart)
    return newChallenge
}