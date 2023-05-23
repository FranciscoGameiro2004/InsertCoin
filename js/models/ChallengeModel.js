class Challenge{
    title = ''
    type = ''

    //NOTA: Fill-in-blanks
    fibText = ['']
    fibAnswers = [[]]

    //NOTA: Quiz
    quizText = ['']
    quizAnswers = [[[],0]] //*1

    //NOTA: Resposta símples
    simText = ['']
    simAnswer = ['']

    constructor(title, type, fibText = [''], fibAnswers = [[]], quizText = [''], quizAnswers = [[[],0]], simText = [''], simAnswer = ['']){ //*1
        this.title = title
        this.type = type

        switch (type){
            //TODO: Acrescentar condições em cada tipo de atividade.
            //? Será que isto é possível?
            case ('fill-in-blanks'):    this.fibText = fibText
                                        this.fibAnswers = fibAnswers
                                        break;

            case ('quiz'):  this.quizText = quizText
                            this.quizAnswers = quizAnswers //TODO: Ponderar como fazer a parte do quiz [*1]
                            break;
            
            case ('simple'):    this.simText = simText
                                this.simAnswer = simAnswer

            default:    console.log(`"${type}" is not a valid activity type.`)
        }
    }
}