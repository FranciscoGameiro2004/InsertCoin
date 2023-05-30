class Challenge{
    title = ''
    type = ''
    sequence = 0
    requiredItem = ''
    points = 0
    reward = ''
    itemToRecieve = ''

    //TODO: RETIRAR ARRAYS

    //NOTA: Fill-in-blanks
    fibText = ['']
    fibAnswers = [[]]

    //NOTA: Quiz
    quizText = ['']
    quizAnswers = [[]]

    //NOTA: Resposta símples
    simText = ['']
    simAnswer = ['']

    constructor(title, items, type, sequence = 0, requiredItem = '', points = 0, reward = 0, fibText = [''], fibAnswers = [[]], quizText = [''], quizAnswers = [[]], simText = [''], simAnswer = ['']){
        this.title = title
        this.items = items
        this.type = type
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
