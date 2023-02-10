

import { loadListUser, loadUserDefault, saveListUSer, delListUser } from "./gaming.js"

import { msgBox } from "./msgbox.js"
import { createUser, reGex } from "./function.js"

// delListUser()

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

    // Controle Regex
    // reGex(userPsw1.value)

    // Création de l'objet utilisateur

    let userData = {
        "pseudo" : userName.value,
        "mail" : usermail.value,
        "password" : userPsw1.value
        }

    createUser(userData); 
   
    let listUser = loadListUser()

    if (listUser.length === 0) {

        let newUser = loadUserDefault(userName.value, usermail.value)
        listUser.push(newUser)
        saveListUSer(JSON.stringify(listUser))

    } else {

        
        let userExist = false

        listUser = JSON.parse(listUser)

        for (let user in listUser) {

             (listUser[user].pseudo === userName.value) ? userExist = true : userExist = false

        }

        if (userExist) {

            console.log("User ", userName.value, "existant")

        } else {
            
            let newUser = loadUserDefault(userName.value, usermail.value)
            listUser.push(newUser)
            saveListUSer(JSON.stringify(listUser))

        }

    }






    // if (newUser === true) {
        
    //     msgBox("header", "Création de votre compte réussie !","Retour à la page d'accueil pour vous connecter" )

    //     setTimeout(function() {
    //         window.location.href= './index.html'
    //     }, 3500)
    
    // } else {

    //     msgBox("header", "Erreur !","Nom d'utilisateur existant" )

    // }

})

