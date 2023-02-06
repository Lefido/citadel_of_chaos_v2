
import listUsers from "../script.js"

console.log(listUsers)

let userName = document.querySelector('#name')
let usermail = document.querySelector('#mail')
let userPsw1 = document.querySelector('#psw1')
let userPsw2 = document.querySelector('#psw2')

let btn_connexion = document.querySelector('#valider')

btn_connexion.addEventListener('click', function(){

    if (userName.value === "") {
        console.log("Veuillez saisir un name")
        return
    }

    if (usermail.value === "") {
        console.log("Veuillez saisir un mail")
        return
    }

    if (userPsw1.value === "") {
        console.log("Veuillez saisir un mot de passe")
        return
    }

    if (userPsw2.value === "") {
        console.log("Veuillez confirmer le mot de passe")
        return
    }

    if (userPsw1.value != userPsw2.value) {
        console.log("Confirmation du mot passe incorrect")
        return
    }

    console.log("Enregistrement réussie")

    var user = userName.value + ":" +  {
            name: userName.value,
            mail: usermail.value,
            psw: userPsw1.value
        }

    console.log(user)
        
    listUsers.push(user)

    console.log(listUsers)

    setTimeout(function() {

        // window.location.href= './index.html'

    }, 10000)



})





