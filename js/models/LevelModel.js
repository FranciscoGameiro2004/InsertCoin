//TODO: ROOM

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

    items = ['']

    constructor(title, thumbnail, thumbnailLocked = '', timeInSeconds, challenges, link = '', defaultViews=[''], alternateViews=[['']], defaultMaps=[''], alternateMaps=[['']], defaultPreRequisite=[''], alternatePreRequisite=[['']], items=['']){
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

        this.items = items
    }
}

export function createLevel(title='', thumbnail='', thumbnailLocked = '', timeInSeconds = 0, challenges = [], link = '#', defaultViews=[''], alternateViews=[['']], defaultMaps=[''], alternateMaps=[['']], defaultPreRequisite=[''], alternatePreRequisite=[['']], items=['']){
    return new Level(title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link, defaultViews, alternateViews, defaultMaps, alternateMaps, defaultPreRequisite, alternatePreRequisite, items)
}

export function updateLevel(levelIndex, title='', thumbnail='', thumbnailLocked = '', timeInSeconds = 0, challenges = [], link = '#', defaultViews=[''], alternateViews=[['']], defaultMaps=[''], alternateMaps=[['']], defaultPreRequisite=[''], alternatePreRequisite=[['']], items=['']){
    const updatedLevel = new Level(title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link, defaultViews, alternateViews, defaultMaps, alternateMaps, defaultPreRequisite, alternatePreRequisite, items)
    
    let levels = JSON.parse(localStorage.getItem('levels'))

    levels[levelIndex] = updatedLevel

    localStorage.setItem('levels', JSON.stringify(levels))
}