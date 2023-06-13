import * as UsersModel from '../models/UsersModel.js'

let currentUser = JSON.parse(sessionStorage.getItem('userLogged'))
let numOfCoins = currentUser.coins

let currentItemPath = ''
let currentItemCoins = 0

updateCoins()
updateButtons()

const confirmationModalShow = new bootstrap.Modal('#confirmationModal')
const confirmationModal = document.querySelector('#confirmationModal')

const cannotAffordModalShow = new bootstrap.Modal('#cannotAffordModal')
const cannotAffordModal = document.querySelector('#cannotAffordModal')

function updateButtons(){
    const acquiredItems = currentUser.acquiredItems
    console.log(acquiredItems)
    document.querySelectorAll('.shopItem').forEach(shopItem => {
        const currentItemPath = shopItem.querySelector('#itemImg').getAttribute('src')
        if (acquiredItems.some(itemPath => itemPath == currentItemPath)){
            const buyButton = shopItem.querySelector('#buyButton')
            buyButton.innerHTML = 'Adquirido'
            buyButton.setAttribute('class', 'btn btn-secondary btn-sm disabled')
        }
    });
}

function updateCoins(){
    currentUser = JSON.parse(sessionStorage.getItem('userLogged'))
    numOfCoins = currentUser.coins
    const coinsContainer = document.querySelector('#coinsContainer')
    coinsContainer.innerHTML = `${numOfCoins} Moeda${numOfCoins == 1 ? '' : 's'}`
}

document.querySelectorAll('.buyButton').forEach((buyButton) => {
    buyButton.addEventListener('click', ()=>{
        const url = window.location.href.replace('/html/shop.html', '')

        const itemCard = buyButton.parentElement.parentElement.parentElement
        const itemImg = itemCard.querySelector('#itemImg').src.replace(url, '..')
        const itemName = itemCard.querySelector('#itemName').innerHTML
        const itemCoins = parseInt(itemCard.querySelector('#itemCoins').innerHTML.replace(' Moedas', ''))

        if (numOfCoins >= itemCoins) {
            confirmationModalShow.show()
            currentItemPath = itemImg
            currentItemCoins = itemCoins
            confirmationModal.querySelector('#message').innerHTML = `Quer mesmo adquirir o item ${itemName}?`
        } else {
            cannotAffordModalShow.show()
            cannotAffordModal.querySelector('#message').innerHTML = `Não tem dinheiro suficiente para adquirir o item ${itemName}.`
        }
    })
});

document.querySelector('#confirmationBtn').addEventListener('click', ()=>{
    UsersModel.buyItem(currentItemPath, currentItemCoins)
    updateCoins()
    updateButtons()
    confirmationModal.hide()
})