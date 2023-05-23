class Challenge{
    title = ''
    type = ''

    constructor(title, type){
        this.title = title
        this.type = type

        switch (type){
            case ('fill-in-blanks'):    //TODO: Acrescentar condições em cada tipo de atividade.
                                        break;
            default: console.log(`"${type}" is not a valid activity type.`)
        }
    }
}