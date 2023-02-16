

import {routeur} from "./function.js"
import msgBox from "./msgbox.js"

import {reset, getTokenUser, getListUserBdd, removeToken} from "./gaming.js"

// reset()


let idUserGame = getTokenUser()
let bddUser = getListUserBdd()

console.log(bddUser[idUserGame])


const start_game = document.querySelector('#start-game')
const new_game = document.querySelector('#new-game')
const deconnexion = document.querySelector('#deconnexion')
const user = document.querySelector("#user")

user.innerHTML = bddUser[idUserGame].pseudo

if (bddUser[idUserGame].current_step === 0 || bddUser[idUserGame].current_step === "0") {

    start_game.style.display = "none";

} else {
    new_game.style.display = "none";
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

    msgBox("header", "Information", "déconnextion en cours...")

    removeToken()

    setTimeout(function() {
        routeur('./index.html')
        // window.location.href= './index.html'
    }, 2000)

   

})