class Level{
    title = ''
    thumbnail = ''
    thumbnailLocked = ''
    timeInSeconds = 0
    challenges = []
    link = ''

    defaultViews = ['']
    alternateViews = [['']]

    defaultMaps = ['']
    alternateMaps = [['']]

    defaultPreRequisite = ['']
    alternatePreRequisite = [['']]

    constructor(title, thumbnail, thumbnailLocked = '', timeInSeconds, challenges, link = '', defaultViews=[''], alternateViews=[['']], defaultMaps=[''], alternateMaps=[['']], defaultPreRequisite=[''], alternatePreRequisite=[['']]){
        this.title = title
        this.thumbnail = thumbnail
        this.thumbnailLocked = thumbnailLocked
        this.timeInSeconds = timeInSeconds
        this.challenges = challenges
        this.link = link

        this.defaultViews = defaultViews
        this.alternateViews = alternateViews

        this.defaultMaps = defaultMaps
        this.alternateMaps = alternateMaps

        this.defaultPreRequisite = defaultPreRequisite
        this.alternatePreRequisite = alternatePreRequisite
    }
}

export function createLevel(title='', thumbnail='', thumbnailLocked = '', timeInSeconds = 0, challenges = [], link = '#', defaultViews=[''], alternateViews=[['']], defaultMaps=[''], alternateMaps=[['']], defaultPreRequisite=[''], alternatePreRequisite=[['']]){
    return new Level(title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link, defaultViews, alternateViews, defaultMaps, alternateMaps, defaultPreRequisite, alternatePreRequisite)
}