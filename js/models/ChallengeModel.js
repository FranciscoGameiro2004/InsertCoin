class Challenge{
    title = ''
    type = ''
    reward = ''
    item = [['']]

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

    constructor(title, item, type, reward = '', fibText = [''], fibAnswers = [[]], quizText = [''], quizAnswers = [[]], simText = [''], simAnswer = ['']){
        this.title = title
        this.item = item
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
