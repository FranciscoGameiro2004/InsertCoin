const levelsList = JSON.parse(localStorage.getItem('levels'))

const levelsNav = document.querySelector('#levelsNav')

levelsList.forEach((level, levelIndex) => {
    levelsNav.innerHTML +=
    `
    <li class="nav-item levelBtn">
        <a class="nav-link" id="lvlNavLink">${level.title}</a>
        <p class="levelIndex" hidden>${levelIndex}</p>
    </li>
    `

    document.querySelector('#levelLeaderboards').innerHTML +=
    `
    <table class="table" id="level${levelIndex}" hidden>
        <tr>
            <th>Utilizador</th>
            <th>Nível</th>
            <th>Pontuação total</th>
        </tr>
    </table>`
});

const usersList = JSON.parse(localStorage.getItem('users'))
const orderTotalUserList = usersList.sort(compareTotalPoints)

const orderLevelsUserList = []
let currentOrder = 0
levelsList.forEach((level, levelIndex) => {
    currentOrder = levelIndex
    orderLevelsUserList.push(JSON.parse(JSON.stringify(usersList.sort(compareLevelPoints))))
});

console.log(orderLevelsUserList)

orderTotalUserList.forEach(user => {
    const userPoints = user.points.reduce((sum, numPoints) => sum+=numPoints,0)

    if (userPoints != 0) {
        document.querySelector('#totalTable').innerHTML +=
        `
        <tr>
            <td>${user.username}</td>
            <td>${user.level}</td>
            <td>${userPoints}</td>
        </tr>
        `
    }
});

orderLevelsUserList.forEach((users, levelIndex) => {
    const levelTable = document.querySelector(`#level${levelIndex}`)

    users.forEach(user => {
        if (user.points[levelIndex] != 0) {
            levelTable.innerHTML +=
            `
            <tr>
                <td>${user.username}</td>
                <td>${user.level}</td>
                <td>${user.points[levelIndex]}</td>
            </tr>
            `
        }
        
    });
});

function compareTotalPoints(a, b){
    const numA = a.points.reduce((sum, numPoints) => sum+=numPoints,0)
    const numB = b.points.reduce((sum, numPoints) => sum+=numPoints,0)

    if (numA > numB) return -1
    if (numA == numB) return 0
    if (numA < numB) return 1
}

function compareLevelPoints(a, b){
    const numA = a.points[currentOrder]
    console.log(numA)
    const numB = b.points[currentOrder]
    console.log(numB)

    console.log(`ORDER ${currentOrder}`)
    

    if (numA > numB) return -1
    if (numA == numB) return 0
    if (numA < numB) return 1
}



document.querySelector('#totalBtn').addEventListener('click', ()=>{
    document.querySelector('#totalLeaderboard').hidden = false

    document.querySelectorAll('.levelBtn').forEach(element => {
        element.querySelector('#lvlNavLink').setAttribute('class', `nav-link`)
    });

    levelsList.forEach((level, levelIndex) => {
        document.querySelector(`#level${levelIndex}`).hidden=true
    })

    document.querySelector('#totalBtn').setAttribute('class', `nav-link active`)
})

document.querySelectorAll('.levelBtn').forEach((levelBtn) => {
    levelBtn.addEventListener('click', ()=>{
        document.querySelector('#totalLeaderboard').hidden = true
        const levelIndex = levelBtn.querySelector('.levelIndex').innerHTML
        document.querySelector('#totalBtn').setAttribute('class', 'nav-link')

        document.querySelectorAll('.levelBtn').forEach(element => {
            element.querySelector('#lvlNavLink').setAttribute('class', `nav-link`)
        });

        levelBtn.querySelector('#lvlNavLink').setAttribute('class', `nav-link active`)

        levelsList.forEach((level, levelIndex) => {
            document.querySelector(`#level${levelIndex}`).hidden=true
        })

        document.querySelector(`#level${levelIndex}`).hidden=false
    })
});