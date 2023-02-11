
import msgBox from "./msgbox.js";
import {
    searchIdUser, 
    loadUser,
    saveAvatar,
    loadAvatar,
    delAvatar,
    loadListUser,
    saveListUSer,
    delListUser
} from "./gaming.js";

// delListUser()

const list_competence = document.querySelectorAll('.val-competence')
const user = document.querySelector('#user')
const varHabilite = document.querySelector('#habilite')
const varEndurance = document.querySelector('#endurance')
const varChance = document.querySelector('#chance')

let usergame = loadUser()

let listUser = JSON.parse(loadListUser())
console.log(listUser)

let idUser = searchIdUser(usergame)

// Varibles des compétences

let habilite = 0;
let endurance = 0;
let chance = 0;


habilite, varHabilite.innerHTML = listUser[idUser].ability_max

endurance, varEndurance.innerHTML = listUser[idUser].life_max

chance, varChance.innerHTML = listUser[idUser].chance_max



// delAvatar(usergame)

let numAvatar = parseInt(loadAvatar(usergame))

user.innerHTML = usergame


console.log(list_competence)

// Chargement des images pour les avatar


let avatar_choice = document.querySelector('.avatar-choice');

for(let i = 1 ; i < 7; i++) {

    load_img(i);
    
}

// Choix du personnage

const list_personnage = document.querySelectorAll('.personnage');

if (numAvatar !== null) {

    list_personnage.forEach( (personnage, index) => {

        console.log(index, numAvatar)
       
            if (index + 1 === numAvatar) {
                personnage.classList.add("perso-actif");
                console.log("Image", index, "Active")
       
            }
                 
    })

}



list_personnage.forEach( (personnage, index) => {
    personnage.addEventListener('click', function() {
        console.log("J'ai cliqué sur le personnage", index);
        perso_actif()
        personnage.classList.add("perso-actif");
        numAvatar = index +1 ;
        saveAvatar(usergame, numAvatar)
        
        
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
    console.log("Lancement de la partie");

    if(numAvatar === 0) {

        msgBox("header", "Oups !!", "Tu as oublié des sélectionner ton avatar");
        return
 
     }

    if(habilite === 0 || endurance === 0 || chance === 0) {

        msgBox("header", "Oups !!", "Tu n'as pas lancé tout les dés");
        return

    }

    listUser[idUser].ability_current = habilite
    listUser[idUser].ability_max = habilite
    listUser[idUser].chance_current = chance
    listUser[idUser].chance_max = chance
    listUser[idUser].life_current = endurance
    listUser[idUser].life_max = endurance


    saveAvatar(usergame, numAvatar)

    listUser = JSON.stringify(listUser)

    saveListUSer(listUser)

    // listUser = JSON.parse(listUser)

    // msgBox("header", "C'est partie !", "Lancement de la partie...")

    // setTimeout( function() {

    //     window.location.href= './general.html';


    // }, 2000)
   
})



