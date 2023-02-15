
import {reset, getTokenUser, getListUserBdd, setListUserBdd, idUser } from "./gaming.js";

import msgBox from "./msgbox.js";
// reset()

// let url = "./json/script_citadel_arrange.json";
let url = "./json/chaos_citadel_script.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON

let IdUserGame = getTokenUser()
let bddUser = getListUserBdd()

console.log(bddUser[IdUserGame]);

const imgavatar = document.querySelector('#imgavatar');

let newImg = "./assets/personnage/av_" + bddUser[IdUserGame].id_avatar + ".png"


imgavatar.src = newImg
console.log(imgavatar)
const userName = document.querySelector('#username').innerHTML = bddUser[IdUserGame].pseudo;

const habilite = document.querySelector('#habilite')
const endurance = document.querySelector('#endurance')
const chance = document.querySelector('#chance')

const userHabilite = document.querySelector('#userhabilite')
userHabilite.innerHTML = bddUser[IdUserGame].ability_current
const userEndurance = document.querySelector('#userendurance')
userEndurance.innerHTML = bddUser[IdUserGame].life_current
const userChance = document.querySelector('#userchance')
userChance.innerHTML =  bddUser[IdUserGame].chance_current

const narratif_content = document.querySelector(".narratif-content");
const choice_content = document.querySelector(".choice-content");
const general_col2 = document.querySelector('.general-col2')

const open_inventaire = document.querySelector('.open-inventaire')

open_inventaire.addEventListener('click', ()=> {
  general_col2.classList.toggle('cont-visible')
})


const close_inventaire = document.querySelector('.close-inventaire')

close_inventaire.addEventListener('click', ()=> {
  general_col2.classList.toggle('cont-visible')
})

var list_btn_pathways;

let current_html = window.location.pathname

console.log("Page en cours :", current_html)

// console.log(list_etape);

// let num_etape = bddUser[IdUserGame].current_step
let num_etape = 347

affiche_etape(num_etape)

function affiche_etape(num_etape) {
  
  encadrement(list_etape[num_etape].step_type)

  let etape = list_etape[num_etape];

  etape_narratif(etape.content);
  etape_pathways(etape.pathways);

  analyse_etape(etape)

}

function etape_narratif(narratif) {

  narratif_content.classList.remove("deroulant-gauche")
  narratif_content.classList.add("deroulant-bas")
  narratif_content.scrollTop = 0;
  
  narratif_content.innerHTML = "";

  let new_narratif = document.createElement("p");
  new_narratif.innerHTML = "(" + num_etape + "). " + narratif;
  narratif_content.appendChild(new_narratif);

}

function etape_pathways(pathways) {

  choice_content.innerHTML = "";

  for (let pathway in pathways) {

    let btn_choice = document.createElement("button");
    // btn_choice.classList.add("btn-2");
    btn_choice.classList.add("btn-choice");
    btn_choice.classList.add("zoom-in");
    btn_choice.dataset.next_etape = pathway;
    btn_choice.innerHTML = pathways[pathway].content;
    choice_content.append(btn_choice);

  }

  list_btn_pathways = document.querySelectorAll(".btn-choice");

  list_btn_pathways.forEach((element) => {

    element.addEventListener("click", function () {

      narratif_content.classList.add("deroulant-gauche")
      narratif_content.classList.remove("deroulant-bas")

      let btn_selction = element.dataset.next_etape

      num_etape = btn_selction

      console.log("--------------------------------------------------------")

      console.log("J'ai cliqué sur l'étape", btn_selction);

      bddUser[IdUserGame].current_step = num_etape

      setListUserBdd(bddUser)

      element.classList.add('destruction')

      list_btn_pathways = document.querySelectorAll(".btn-choice");

      list_btn_pathways.forEach((element) => {
        element.classList.add('extinction')
      })

      setTimeout(function() {

        affiche_etape(btn_selction)

      }, 800)

      // affiche_etape(element.dataset.next_etape)
    
    });
  
});

}

function encadrement(step_type) {

  let separateur = ""

  for (let i=0; i < step_type.length + 3; i++) {

    if (i === 0) {

      separateur +="+"

    } else {
      separateur +="-"

    } 

  }

  separateur +="+"

  console.log(separateur)

  console.log("|", step_type, "|")

  console.log(separateur)

  console.log(list_etape[num_etape])


}

function analyse_etape(details_etape) {

console.clear()



// encadrement("Détails de l'étape")

console.log("Détails User")
console.log(bddUser[IdUserGame])
console.log("Détails Etape")
console.log(details_etape)

console.log("**********************")
console.log("* Détails de l'étape *")
console.log("**********************")
console.log("Etape :", num_etape)


for (let objet in details_etape) {

  console.log("-", objet, "---------------------------------")
  
  switch(objet) {

    case "step_type":
      console.log(details_etape[objet])
      break;

    case "content":

     console.log(details_etape[objet])
     break;

     case "pathways":
      console.log(details_etape[objet])
      let pathway = details_etape[objet]
      for (let i in pathway) {
        console.log(i, pathway[i].content)
      }
      break;

    case "ennemies":
      console.log(details_etape[objet])
      let ennemies = details_etape[objet]
      for (let enemie in ennemies) {
        
        let info_Enemie = ennemies[enemie]
        for (let details in info_Enemie) {
          console.log(details, info_Enemie[details])
        }
       
      }
      break;
    case "characteristic_balance":
      console.log(details_etape[objet])
      let char_balance = details_etape[objet]
      for (let i in char_balance) {
        
        console.log(i, char_balance[i])

        // console.log("Vie avant attaque  :", bddUser[IdUserGame].life_current)
      
        let msg = "";

        if (char_balance[i] <0 ) {

          bddUser[IdUserGame].life_current = bddUser[IdUserGame].life_current -  Math.abs(char_balance[i])

          msg =  "Vous allez perdre " +  Math.abs(char_balance[i]) + " poinst d'endurance"

        } else {

          bddUser[IdUserGame].life_current = bddUser[IdUserGame].life_current +  Math.abs(char_balance[i])

          msg =  "Vous allez gagner " +  Math.abs(char_balance[i]) + " poinst d'endurance"

        }

        // console.log("Vie après attaque  :", bddUser[IdUserGame].life_current)

        setListUserBdd(bddUser)

        
        setTimeout(()=>{
          msgBox(".narratif", "Ouillouillouille !", msg )
          
          endurance.classList.add("perso-actif")

          setTimeout(()=> {
            endurance.classList.remove("perso-actif")
            userEndurance.innerHTML =  bddUser[IdUserGame].life_current
          }, 3000)


        }, 3000)

      }
      break;
      case "inventory_balance":

      console.log(details_etape[objet])
      let inventory = details_etape[objet]
      for (let element in inventory) {

        console.log(element, inventory[element])

      }
      break;

      case "is_escapable":
        console.log(details_etape[objet])
        let is_escapable = details_etape[objet]
      for (let element in is_escapable) {

        console.log(element, is_escapable[element])

      }
      break;
      
    case "max_rounds":
      console.log(details_etape[objet])
      let max_rounds = details_etape[objet]
    for (let element in max_rounds) {

      console.log(element, max_rounds[element])

    }
    break;


  }
  
}

}

