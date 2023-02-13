
import msgBox from "./msgbox.js";
import {
    getToken,
    listUser,
    IdUserGame,
    UpdateListUser,
    updateToken
} from './gaming.js'

const list_competence = document.querySelectorAll('.val-competence')
const user = document.querySelector('#user')
const varHabilite = document.querySelector('#habilite')
const varEndurance = document.querySelector('#endurance')
const varChance = document.querySelector('#chance')

let infoToken = getToken()

let userGame =  infoToken.user
let id_img = infoToken.id_img
let idUser = IdUserGame(userGame)
let list_User = listUser()

if (list_User[idUser].current_step !== 0) {

    window.location.href= './general.html';

}

user.innerHTML = userGame

// Varibles des compétences
let numAvatar = list_User[idUser].num_perso
let habilite = list_User[idUser].ability_current;
let endurance = list_User[idUser].life_current;
let chance = list_User[idUser].chance_current;

// Chargement des images pour les avatar

let avatar_choice = document.querySelector('.avatar-choice');

for(let i = 1 ; i < 7; i++) {

    load_img(i);
    
}

// Choix du personnage

const list_personnage = document.querySelectorAll('.personnage');

list_personnage.forEach((personnage, index) => {

    if (index + 1 === numAvatar) {
        personnage.classList.add("perso-actif");
    }

})


list_personnage.forEach( (personnage, index) => {
    personnage.addEventListener('click', function() {
        console.log("J'ai cliqué sur le personnage", index);
        perso_actif()
        personnage.classList.add("perso-actif");
        numAvatar = index +1 ;
        
    })
})

// Desactive le personngae actif 

function perso_actif() {
    const pero_actif = document.querySelectorAll('.perso-actif');
    pero_actif.forEach((personnage) => {
        personnage.classList.remove("perso-actif");
    })
}


// Chargement des personnages

function load_img(i) {

    let img = document.createElement('img');
    img.src = "./assets/personnage/av_" + i + ".png";
    img.alt = "Image avatar " + i
    img.dataset.id = i;
    img.classList.add("personnage");
    avatar_choice.appendChild(img);

}

// Detection du boutton lancer de dé

const list_btn_jouer = document.querySelectorAll('.btn-jouer');

if (habilite !== 0) {
    varHabilite.innerHTML = habilite
    list_btn_jouer[0].classList.add("masqued")
}

if (endurance !== 0) {
    varEndurance.innerHTML = endurance
    list_btn_jouer[1].classList.add("masqued")
}

if (chance !== 0) {
    varChance.innerHTML = chance
    list_btn_jouer[2].classList.add("masqued")
}

console.log(list_btn_jouer)

list_btn_jouer.forEach((choix_btn, index) => {

    choix_btn.addEventListener('click', function() {
        
        let Valeurde = lance_de() * 6

        choix_btn.classList.add("masqued");

        switch (index) {
            case 0:
                habilite = Valeurde
                list_competence[index].classList.add("rotate-zoom")
                list_competence[index].innerHTML = habilite
                console.log("Habilite", habilite)
                
                break;

            case 1:
                endurance = Valeurde
                list_competence[index].classList.add("rotate-zoom")
                list_competence[index].innerHTML = endurance
                console.log("Endurance", endurance)
                break;

            case 2:
                chance = Valeurde
                list_competence[index].classList.add("rotate-zoom")
                list_competence[index].innerHTML = chance
                console.log("Chance", chance)
            break;
        
            default:
                break;
        }

    })

})


function lance_de() {

    return 1 + Math.round(Math.random() * 5);


}

const playGame = document.querySelector('.btn-1');

playGame.addEventListener('click', function() {
    
    if(numAvatar === 0) {

        msgBox("header", "Oups !!", "Tu as oublié des sélectionner ton avatar");
        return
 
     }

    if(habilite === 0 || endurance === 0 || chance === 0) {

        msgBox("header", "Oups !!", "Tu n'as pas lancé tout les dés");
        return

    }

    updateToken(userGame, numAvatar )


    list_User[idUser].num_perso = habilite
    list_User[idUser].ability_current = habilite
    list_User[idUser].ability_max = habilite
    list_User[idUser].life_current = endurance
    list_User[idUser].life_max = endurance
    list_User[idUser].chance_current = chance
    list_User[idUser].chance_max = chance
    list_User[idUser].current_step = 1

    UpdateListUser(list_User)

    msgBox("header", "C'est partie !", "Lancement de la partie...")

    setTimeout( function() {

        window.location.href= './general.html';

    }, 2000)
   
})



