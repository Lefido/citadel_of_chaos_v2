
import { saveUser, loadUser, delUser, saveListUSer } from "./gaming.js";

import {loginUser,
    updateToken,
    getUser,
    delToken, routeur}
    from "./function.js";

     delUser()

    let usergame = loadUser()
    if (usergame !== null) {
        console.log(usergame)
        routeur('./home.html')
    } else {

        console.log("userGame none")

    }
    



// delToken()

// let getToken = updateToken();

// if (getToken != "") {

//     getUser(getToken)

// } 



let userName = document.querySelector('#name');
let userPsw = document.querySelector('#psw');
let btn_connexion = document.querySelector('#valider');
let header = document.querySelector('header');

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



    saveUser(userName.value)

    loginUser(userData);

    // userName.value = ""
    // userPsw.value = ""


    
})
