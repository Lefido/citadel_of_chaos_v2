
import listUsers from "../script.js"

console.log(listUsers["lefido"])

let userName = document.querySelector('#name')
let userPsw = document.querySelector('#psw')
let btn_connexion = document.querySelector('#valider')

btn_connexion.addEventListener('click', function(){

    if (userName.value == "") {

        console.log("Veuillez saisir un user")
        return
    } 

    if (userPsw.value === "") {

        console.log("Veuillez saisir un mdp")
        return

    }

    if (userName.value == listUsers[userName.value].name && userPsw.value === listUsers[userName.value].psw ) {

        console.log("Connexion réussie")
        window.location.href= './home.html'

    } else {

        console.log("Erreur user ou psw")
    }

})





