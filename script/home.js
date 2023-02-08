
import msgBox from "./msgbox.js"

const start_game = document.querySelector('.start-game')
const new_game = document.querySelector('.new-game')


start_game.addEventListener("click", function() {

   

    msgBox("header", "Chargement de la partie", "Récupération de vos paramètres...")

    setTimeout(function() {
        window.location.href= './general.html'
    }, 2000)



})

new_game.addEventListener("click", function() {

    console.log("J'ai cliqué sur start")

    msgBox("header", "Lancement du nouvelle partie", "Chargement des paramètres...")

    setTimeout(function() {
        window.location.href= './player.html'
    }, 2000)

   

})