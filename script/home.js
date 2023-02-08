
const start_game = document.querySelector('.start-game')
const new_game = document.querySelector('.new-game')


start_game.addEventListener("click", function() {

    window.location.href= './general.html'

})

new_game.addEventListener("click", function() {

    console.log("J'ai cliqué sur start")

    window.location.href= './player.html'

})