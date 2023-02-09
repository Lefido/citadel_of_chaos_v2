

import msgBox from "./msgbox.js"

import {setToken, updateToken, delToken, LoginUser } from "./function.js"
import { routeur } from "./routeur.js"

// updateToken()

// delToken("tokencitadel")
// let token = updateToken()

// if(token != null) {

//     console.log("Token existant")
//     routeur('./home.html')

// }


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

    let userData = {
        "pseudo" : userName.value,
        "password" : userPsw.value
    }





    msgBox("header", "Youpi !", "Connexion réussie, chargement de votre position")

    setTimeout(() => {

        console.log("Connexion réussie");

        setToken(responsApi);

        window.location.href= './home.html';
        
    }, 2000);



        console.log("Erreur utilisateur ou mot de passe");
        msgBox("header", "Erreur !", "Utilisateur ou mot de passe");


    
    
})
