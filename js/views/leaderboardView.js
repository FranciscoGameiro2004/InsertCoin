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
            <th>Utilizador - ${levelIndex}</th>
            <th>Nível</th>
            <th>Pontuação total</th>
        </tr>
    </table>`
});

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