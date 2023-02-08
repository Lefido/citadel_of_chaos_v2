
import msgBox from "./msgbox.js";

// Varibles des compétences

let habilite = 0;
let endurance = 0;
let chance = 0;

const list_competence = document.querySelectorAll('.val-competence')

console.log(list_competence)

// Chargement des images pour les avatar
let numPlayer = 0;

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
        numPlayer = index +1 ;
        
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
        
        let Valeurde = lance_de()

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

    if(numPlayer === 0) {

        msgBox("header", "Information", "Veuillez sélectionner un Avatar");
        return
 
     }

    if(habilite === 0 || endurance === 0 || chance === 0) {

        msgBox("header", "Information", "Tout les dés n'ont pas été lancé");
        return

    }

    msgBox("header", "C'est partie !", "Lancement de la partie...")

    setTimeout( function() {

        window.location.href= './general.html';


    }, 2000)
   
})



