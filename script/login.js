


import {loginUser,
    updateToken,
    getUser,
    delToken }
    from "./function.js";

// delToken()

let token = updateToken();

if (token != "") {

    let tokenParse = JSON.parse(token);

    console.log("Transformation du token en format text en JSON");

    console.log(tokenParse);


    getUser(tokenParse);

}



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

    loginUser(userData);


    
})
