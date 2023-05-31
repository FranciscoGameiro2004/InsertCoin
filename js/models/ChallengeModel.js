class Challenge{
    title = ''
    type = ''
    items = []
    sequence = ''
    requiredItem = ''
    points = 0
    reward = ''
    itemToRecieve = ''

    //TODO: RETIRAR ARRAYS

    //NOTA: Fill-in-blanks
    fibText = ''
    fibAnswers = []

    //NOTA: Quiz
    quizText = ''
    quizAnswers = []

    //NOTA: Resposta símples
    simText = ''
    simAnswer = ''

    constructor(title, type, items, sequence , requiredItem , points, reward, fibText, fibAnswers, quizText, quizAnswers, simText, simAnswer){
        this.title = title
        this.type = type
        this.items = items
        this.reward = reward

        switch (type){
            //TODO: Acrescentar condições em cada tipo de atividade.
            case ('fill-in-blanks'):    this.fibText = fibText
                                        this.fibAnswers = fibAnswers
                                        break;

            case ('quiz'):  this.quizText = quizText
                            this.quizAnswers = quizAnswers
                            break;
            
            case ('simple'):    this.simText = simText
                                this.simAnswer = simAnswer

            default:    console.log(`"${type}" is not a valid activity type.`)
        }
    }
}

//! ERRO NESTA FUNÇÃO
export function addChallenge(title, type, items, sequence = '', requiredItem = '', points = 0, reward = 0, fibText = '', fibAnswers = [], quizText = '', quizAnswers = [], simText = '', simAnswer = ''){
    alert('OK')
    //const newChallenge = new Challenge(title, type, items, sequence, requiredItem, points, reward, fibText, fibAnswers, quizText, quizAnswers, simText, simAnswer)
    //return newChallenge
}
