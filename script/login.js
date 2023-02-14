
import {reset , idUser, setTokenUser, getTokenUser, newUserBdd } from "./gaming.js";

import msgBox from "./msgbox.js";

import {loginUser,
    updateToken,
    getUser,
    delToken, routeur}
    from "./function.js";

// reset()

    let token = getTokenUser()

if (token !== null) {

    routeur('./home.html')

}

let userName = document.querySelector('#name');
let userPsw = document.querySelector('#psw');
let btn_connexion = document.querySelector('#valider');


btn_connexion.addEventListener('click', function(){

    if (userName.value == "") {

        console.log("Veuillez saisir un utilisateur");
        msgBox("header", "Information", "Veuillez saisir un utilisateur");
        return;
    } 

    if (userPsw.value === "") {

        console.log("Veuillez saisir votre mot de passe");
        msgBox("header", "Information", "Veuillez saisir votre mot de passe");
        return

    }

    let userData = {
        "pseudo" : userName.value,
        "password" : userPsw.value
    }


  let idUserGame = idUser(userName.value) 

  if (idUserGame === 0) {

    newUserBdd(userName.value, "Non renseigné")

  }

    setTokenUser(idUserGame)
    loginUser(userData);
   
})
