

import msgBox from "./msgbox.js";

import {loginUser,
    updateToken,
    getUser,
    delToken, routeur}
    from "./function.js";



let token = updateToken()

if (token !== null) {

    getUser(token)

    // routeur('./home.html')

}

////////////////////////////////////

// async function fetchUserJson() {


//     var myHeaders = new Headers();
//     myHeaders.append("Authentication", token);
  
//     const response = await fetch("http://chaos-citadel.test/user/get_info", {
//         method: 'GET',
//         Headers : myHeaders
//     });
//     const myUser = await response.json();
//     return myUser

// }

// fetchUserJson().then(myUser => {
//     console.log(myUser)
// })

///////////////////////////////////

    
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


    loginUser(userData);

    
})
