
import msgBox from "./msgbox.js";
import {
   getTokenUser,
   getListUserBdd,
   setListUserBdd,
   reset
} from './gaming.js'



const list_competence = document.querySelectorAll('.val-competence')
const user = document.querySelector('#user')
const varHabilite = document.querySelector('#habilite')
const varEndurance = document.querySelector('#endurance')
const varChance = document.querySelector('#chance')

let idUserGame = getTokenUser()
let bddUser = getListUserBdd()

console.log(bddUser[idUserGame])


if (bddUser[idUserGame].current_step !== 0 && bddUser[idUserGame].gaming === true ) {

    window.location.href= './general.html';
} 


user.innerHTML = bddUser[idUserGame].pseudo

// Varibles des compétences
let idAvatar = bddUser[idUserGame].id_avatar
let habilite = bddUser[idUserGame].ability_current;
let endurance = bddUser[idUserGame].life_current;
let chance = bddUser[idUserGame].chance_current;

// Chargement des images pour les avatar

let avatar_choice = document.querySelector('.avatar-choice');

for(let i = 1 ; i < 7; i++) {

    load_img(i);
    
}

// Choix du personnage

const list_personnage = document.querySelectorAll('.personnage');

list_personnage.forEach( (personnage, index) => {
    personnage.addEventListener('click', function() {
        console.log("J'ai cliqué sur le personnage", index);
        perso_actif()
        personnage.classList.add("perso-actif");
        idAvatar = index +1 ;
        
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
    
    if(idAvatar === 0) {

        msgBox("header", "Oups !!", "Tu as oublié des sélectionner ton avatar", 2000);
        return
 
     }

    if(habilite === 0 || endurance === 0 || chance === 0) {

        msgBox("header", "Oups !!", "Tu n'as pas lancé tout les dés", 2000);
        return

    }

    bddUser[idUserGame].id_avatar = idAvatar
    bddUser[idUserGame].ability_current = habilite
    bddUser[idUserGame].ability_max = habilite
    bddUser[idUserGame].life_current = endurance
    bddUser[idUserGame].life_max = endurance
    bddUser[idUserGame].chance_current = chance
    bddUser[idUserGame].chance_max = chance
    bddUser[idUserGame].current_step = 1
    bddUser[idUserGame].gaming = true

    setListUserBdd(bddUser)

    console.log(bddUser)

    msgBox("header", "C'est partie !", "Lancement de la partie...",3000)

    setTimeout( function() {

        window.location.href= './general.html';

    }, 3000)
   
})



