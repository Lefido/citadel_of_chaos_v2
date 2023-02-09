

import { msgBox } from "./msgbox.js"
import { createUser } from "./function.js"


let userName = document.querySelector('#name')
let usermail = document.querySelector('#mail')
let userPsw1 = document.querySelector('#psw1')
let userPsw2 = document.querySelector('#psw2')

let btn_connexion = document.querySelector('#valider')

btn_connexion.addEventListener('click', function(){

    if (userName.value === "") {
        console.log("Veuillez saisir un name")
        msgBox("header", "Information","Veuillez saisir un name" )
        return
    }

    if (userName.value.length < 6 ) {
        console.log("Utilisateur trop court")
        msgBox("header", "Information","Nom d'utilisateur trop court, 6 caractères minimum" )
        return
    }

    if (usermail.value === "") {
        console.log("Veuillez saisir un mail")
        msgBox("header", "Information","Veuillez saisir un email" )
        return
    }

    if (userPsw1.value === "") {
        console.log("Veuillez saisir un mot de passe")
        msgBox("header", "Information","Veuillez saisir un mot de passe" )
        return
    }

    if (userPsw1.value.length < 8 ) {
        console.log("Mot de passe trop court")
        msgBox("header", "Information","Mot de passe trop court, 8 caractères minimum" )
        return
    }



    if (userPsw2.value === "") {
        console.log("Veuillez confirmer le mot de passe")
        msgBox("header", "Information","Veuillez confirmer le mot de passe" )
        return
    }

    if (userPsw1.value != userPsw2.value) {
        console.log("Confirmation du mot passe incorrect")
        msgBox("header", "Erreur !","Mot de passe de confirmation incorrect" )
        return
    }


    // Création de l'objet du nouvel utilisateur

    let userData = {
        "pseudo" : userName.value,
        "mail" : usermail.value,
        "password" : userPsw1.value
        }

    
   createUser(userData); 



    // if (newUser === true) {
        
    //     msgBox("header", "Création de votre compte réussie !","Retour à la page d'accueil pour vous connecter" )

    //     setTimeout(function() {
    //         window.location.href= './index.html'
    //     }, 3500)
    
    // } else {

    //     msgBox("header", "Erreur !","Nom d'utilisateur existant" )

    // }

})

