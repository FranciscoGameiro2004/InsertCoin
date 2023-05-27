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

    constructor(title, thumbnail, thumbnailLocked = '', timeInSeconds, challenges, link = '', defaultViews=[''], alternateViews=[['']], defaultMaps=[''], alternateMaps=['']){
        this.title = title
        this.thumbnail = thumbnail
        this.thumbnailLocked = thumbnailLocked
        this.timeInSeconds = timeInSeconds
        this.challenges = challenges
        this.link = link
    }
}

export function createLevel(title='', thumbnail='', thumbnailLocked = '', timeInSeconds = 0, challenges = [], link = '#', defaultViews=[''], alternateViews=[['']], defaultMaps=[''], alternateMaps=['']){
    return new Level(title, thumbnail, thumbnailLocked, timeInSeconds, challenges, link, defaultViews, alternateViews, defaultMaps, alternateMaps)
}