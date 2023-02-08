
import listUsers from "../script.js"
// import message from "./msgbox.js"
import msgBox from "./msgbox.js"

console.log(listUsers["lefido"])


let userName = document.querySelector('#name')
let userPsw = document.querySelector('#psw')
let btn_connexion = document.querySelector('#valider')
let header = document.querySelector('header')

btn_connexion.addEventListener('click', function(){

    if (userName.value == "") {

        console.log("Veuillez saisir un utilisateur")
        msgBox("header", "Information", "Veuillez saisir un utilisateur")
        return
    } 

    if (userPsw.value === "") {

        console.log("Veuillez saisir votre mot de passe")
        msgBox("header", "Information", "Veuillez saisir votre mot de passe")
        return

    }

    
    if (userName.value == listUsers[userName.value].name && userPsw.value === listUsers[userName.value].psw ) {

        msgBox("header", "Youpi !", "Connexion réussie, chargement de votre position")

        setTimeout(() => {

            console.log("Connexion réussie")
            window.location.href= './home.html'
            
        }, 2000);
    
        return

    } else {

        console.log("Erreur utilisateur ou mot de passe")
        msgBox("header", "Erreur !", "Utilisateur ou mot de passe")
        return
    }

})




