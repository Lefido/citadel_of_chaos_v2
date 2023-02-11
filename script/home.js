
import { loadUser, loadListUser, delUser } from "./gaming.js"
import {routeur} from "./function.js"

import msgBox from "./msgbox.js"

const start_game = document.querySelector('#start-game')
const new_game = document.querySelector('#new-game')
const deconnexion = document.querySelector('#deconnexion')
const user = document.querySelector("#user")


let userGame = loadUser()
let listUser = JSON.parse(loadListUser())

console.log(listUser)

let ficheUser = []

if (userGame !== null) {

    user.innerHTML = userGame
    
    for (let detailUser in listUser) {

        if (listUser[detailUser].pseudo === userGame) {

            ficheUser.push(listUser[detailUser])
        }

    }

    if (ficheUser[0].current_step === 0) {


        console.log("Masque le bouton continuer la partie")
        start_game.style.display = "none"

    }

}


start_game.addEventListener("click", function() {

    msgBox("header", "Chargement de la partie", "Récupération de vos paramètres...")

    setTimeout(function() {
        window.location.href= './general.html'
    }, 2000)

})

new_game.addEventListener("click", function() {

    console.log("J'ai cliqué sur start")

    msgBox("header", "Préparation d'une nouvelle partie", "Chargement des paramètres...")

    setTimeout(function() {
        window.location.href= './player.html'
    }, 2000)

   
})

deconnexion.addEventListener("click", function() {

    delUser()
    msgBox("header", "Information", "déconnextion encours...")

    setTimeout(function() {
        routeur('./index.html')
        // window.location.href= './index.html'
    }, 2000)

   

})