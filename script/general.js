import {
  reset,
  getTokenUser,
  getListUserBdd,
  setListUserBdd,
  idUser,
} from "./gaming.js";

import { routeur } from "./function.js";

import msgBox from "./msgbox.js";
// reset()

// let url = "./json/script_citadel_arrange.json";
let url = "./json/chaos_citadel_script.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON

let IdUserGame = getTokenUser();
let bddUser = getListUserBdd();

console.log(bddUser[IdUserGame]);

const imgavatar = document.querySelector("#imgavatar");



let newImg = "./assets/personnage/av_" + bddUser[IdUserGame].id_avatar + ".png";

imgavatar.src = newImg;
console.log(imgavatar);
const userName = document.querySelector("#username");
userName.innerHTML = bddUser[IdUserGame].pseudo;
const habilite = document.querySelector("#habilite");
const endurance = document.querySelector("#endurance");
const chance = document.querySelector("#chance");

const userHabilite = document.querySelector("#userhabilite");
userHabilite.innerHTML = bddUser[IdUserGame].ability_current;
const userEndurance = document.querySelector("#userendurance");
userEndurance.innerHTML = bddUser[IdUserGame].life_current;
const userChance = document.querySelector("#userchance");
userChance.innerHTML = bddUser[IdUserGame].chance_current;

const narratif_content = document.querySelector(".narratif-content");
const choice_content = document.querySelector(".choice-content");
const general_col2 = document.querySelector(".general-col2");
const general_col1 = document.querySelector(".general-col1");

const newObjet = document.querySelector("#objet")
const newMagie = document.querySelector("#magie")

window.addEventListener("load", ()=> {
  setTimeout(()=> {
    general_col2.classList.remove('start-right')
  },2000)
 
});

window.addEventListener('mousedown', (e) => {
 
  console.log(e)
  switch (e.button) {
    case 0:
      console.log ( 'Left button clicked.');
      num_etape++
      affiche_etape(num_etape);
      break;
    case 1:
      console.log ( 'Middle button clicked.');
      
      break;
    case 2:
      console.log ( 'Right button clicked.');
      num_etape--
      if (num_etape < 1) { num_etape = 1}
      affiche_etape(num_etape);
      
      break;
    default:
      
  }
})

window.addEventListener('resize', function() {
	// viewport and full window dimensions will change
	
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;

  console.log(viewport_width)

  if (viewport_width > 700) {

    general_col1.classList.add("opacity-out")
    general_col2.classList.add("cont-visible");
    general_col2.classList.add("ouvre-inventaire")
    general_col2.classList.remove("ferme-inventaire");

  } else if(viewport_width < 700) {

    general_col1.classList.add("opacity-out")
    general_col2.classList.remove("cont-visible");
    general_col2.classList.add("ouvre-inventaire")


  }
  console.log("Je modifie la taille de ma fenetre")

});

// Ouvre inventaire

const open_inventaire = document.querySelector(".open-inventaire");

open_inventaire.addEventListener("click", () => {
 
  console.log("J'ouvre' l'inventaire")

  general_col2.classList.remove("ferme-inventaire")
 
  general_col2.classList.add("ouvre-inventaire")

  general_col2.classList.toggle("cont-visible");

  general_col1.classList.remove("opacity-out")
 
  general_col1.classList.add("opacity-in")
  
 
});

// Close inventaire

const close_inventaire = document.querySelector(".close-inventaire");

close_inventaire.addEventListener("click", () => {
  
  console.log("Je ferme l'inventaire")

  general_col2.classList.add("ferme-inventaire")

  general_col2.classList.remove("ouvre-inventaire")

  setTimeout(() => {
    general_col2.classList.toggle("cont-visible");
  }, 1000);

  general_col1.classList.remove("opacity-in")

  general_col1.classList.add("opacity-out")


});

var list_btn_pathways;

let current_html = window.location.pathname;

console.log("Page en cours :", current_html);

// console.log(list_etape);

let num_etape = bddUser[IdUserGame].current_step

// let num_etape = 66;
num_etape = 1;

bddUser[IdUserGame].current_step = num_etape

analyse_etape(num_etape);

affiche_etape(num_etape);

// console.log("list_etape", list_etape[num_etape].step_type);

function affiche_etape(num_etape) {
  console.log("list_etape2", list_etape[num_etape].step_type);

  encadrement(list_etape[num_etape].step_type);

  let etape = list_etape[num_etape];

  etape_narratif(etape.content);
  etape_pathways(etape.pathways);

  analyse_etape(etape);
}

function etape_narratif(narratif) {
  narratif_content.classList.remove("deroulant-gauche");
  narratif_content.classList.add("deroulant-bas");
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
    btn_choice.classList.add("btn-choice");
    btn_choice.classList.add("zoom-in");
    btn_choice.dataset.next_etape = pathway;
    btn_choice.innerHTML = pathways[pathway].content;
    choice_content.append(btn_choice);
  }

  list_btn_pathways = document.querySelectorAll(".btn-choice");

  list_btn_pathways.forEach((element) => {
    element.addEventListener("click", ()=> {
      
      num_etape = parseInt(element.dataset.next_etape);

      console.log("--------------------------------------------------------");

      console.log("J'ai cliqué sur l'étape", num_etape);
      console.log(typeof num_etape);

      if (num_etape != 0) {

        narratif_content.classList.add("deroulant-gauche");
        narratif_content.classList.remove("deroulant-bas");

        bddUser[IdUserGame].current_step = num_etape;

        setListUserBdd(bddUser);

        console.log(bddUser);

        element.classList.add("destruction");

        list_btn_pathways = document.querySelectorAll(".btn-choice");

        list_btn_pathways.forEach((element) => {
          element.classList.add("extinction");
        });

        setTimeout(function () {

          setListUserBdd(bddUser);
          affiche_etape(num_etape);

        }, 800);
      
      } else {
        
        console.log("Vous avez perdu la partie !")
        msgBox(".narratif", "Ouillouillouill !", "Vous avez perdu la partie ! plus qu'a recommencer une bouvelle partie....", 5000)

        bddUser[IdUserGame].id_avatar = 0;
        bddUser[IdUserGame].current_step = 0;
        bddUser[IdUserGame].gaming = false;
        bddUser[IdUserGame].ability_current = 0;
        bddUser[IdUserGame].ability_max = 0;
        bddUser[IdUserGame].chance_current = 0;
        bddUser[IdUserGame].chance_max = 0;
        bddUser[IdUserGame].magic_current = 0;
        bddUser[IdUserGame].magic_max = 0;
        bddUser[IdUserGame].life_current = 0;
        bddUser[IdUserGame].life_max = 0;

        setListUserBdd(bddUser);
        console.log(bddUser);

        setTimeout(()=> {
          routeur('./home.html')
        }, 5000)

        bddUser[IdUserGame].current_step = 0;

        // setListUserBdd(bddUser);

        console.log(bddUser);

      }
    });
  });
}

function encadrement(step_type) {
  let separateur = "";

  for (let i = 0; i < step_type.length + 3; i++) {
    if (i === 0) {
      separateur += "+";
    } else {
      separateur += "-";
    }
  }

  separateur += "+";

  console.log(separateur);

  console.log("|", step_type, "|");

  console.log(separateur);

  console.log(list_etape[num_etape]);
}

function analyse_etape(details_etape) {

  console.clear();

  // encadrement("Détails de l'étape")

  console.log("Détails User");
  console.log(bddUser[IdUserGame]);
  console.log("Détails Etape");
  console.log(details_etape);

  console.log("**********************");
  console.log("* Détails de l'étape *");
  console.log("**********************");
  console.log("Etape :", num_etape);

  for (let objet in details_etape) {
    console.log("-", objet, "---------------------------------");

    switch (objet) {
      case "step_type":
        console.log(details_etape[objet]);
        break;

      case "content":
        console.log(details_etape[objet]);
        break;

      case "pathways":
        console.log(details_etape[objet]);
        let lst_element = details_etape[objet]
        for(let element in lst_element) {
          console.log(element,lst_element[element])
          let lst_content = lst_element[element]
          for (let content in lst_content) {
            console.log("Valeur attendu :",content)
            switch(content) {
              case "content":
                console.log(content, lst_content[content])
                break;
              case "inventory_required":
                console.log(content)
                let inventory_required = lst_content[content]
                for (let objet in inventory_required) {
                  console.log(objet, inventory_required[objet])
                }
                break;
              case "formula_balance":
                console.log(content)
                let formula_balance = lst_content[content]
                let detailFormule = ""
                for (let objet in formula_balance) {
                  console.log(objet, formula_balance[objet])

                  
                  if (formula_balance[objet] === 1) {
                    let posString = objet.indexOf('_') + 1
                    let newString = objet.substring(posString)
                    // console.log("Position:",posString, "newString", newString)
                    let btn = document.createElement('btn')
                    btn.innerHTML = newString + "&nbsp;<span>" + formula_balance[objet] + "</span>"
                    btn.classList.add(objet)
                    btn.classList.add("btn-magie")
                    btn.classList.add("zoom-in")

                    newMagie.appendChild(btn)
                    detailFormule += newString + ", "
                    msgBox(".narratif", "Yessss !", "Ajout des formules " + detailFormule + " dans votre inventaire", 4000 )
                   
                  }

                  if (formula_balance[objet] === -1) {
                    let posString = objet.indexOf('_') + 1
                    let newString = objet.substring(posString)
                    detailFormule += newString + ", "
                    msgBox(".narratif", "Ouill !", "Retrait des formules " + detailFormule + " dans votre inventaire", 4000 )
                  }

                }
                
                break;
              case "is_victory_default":
                // console.log(content)
                let is_victory_defaul = lst_content[content]
                for (let objet in is_victory_defaul) {
                  console.log(objet, is_victory_defaul[objet])
                }
              break;
              case "is_victory_default":
              // console.log(content)
              let is_victory_default = lst_content[content]
              for (let objet in is_victory_default) {
                console.log(objet, is_victory_default[objet])
              }
              break;
              
            }
          }
        }
        break;

      case "ennemies":
        console.log(details_etape[objet]);

        let ennemies = details_etape[objet];
        console.log("Nombre Enemie", ennemies.length);
        for (let enemie in ennemies) {
          let info_Enemie = ennemies[enemie];
          for (let details in info_Enemie) {
            console.log(details, info_Enemie[details]);
          }
        }
        break;
      case "characteristic_balance":

        // console.log(details_etape[objet]);

        let char_balance = details_etape[objet];

        let msgTotal = "";

        for (let element in char_balance) {
          // console.log(element, char_balance[element]);

          let msg = "";

          switch (element) {
            case "life_current":
              msg = MsgBalance_char(element, char_balance[element]);
              break;

            case "ability_current":
              msg = MsgBalance_char(element, char_balance[element]);
              break;

            case "chance_current":
              msg = msg = MsgBalance_char(element, char_balance[element]);
              break;
          }

          setCharacteristicBalance(element, char_balance[element])

          msgTotal += msg;
        }

        console.log(msgTotal);

        setTimeout(() => {
          msgBox(".narratif", "Oulalalala !", msgTotal, 7000);
        }, 2000);

        break;
      case "inventory_balance":
        console.log(details_etape[objet]);
        let inventory = details_etape[objet];
        for (let element in inventory) {
          console.log(element, inventory[element]);
        }
        break;

      case "is_escapable":
        console.log(details_etape[objet]);
        let is_escapable = details_etape[objet];
        for (let element in is_escapable) {
          console.log(element, is_escapable[element]);
        }
        break;

      case "max_rounds":
        console.log(details_etape[objet]);
        let max_rounds = details_etape[objet];
        for (let element in max_rounds) {
          console.log(element, max_rounds[element]);
        }
        break;
    }
  }
}

function MsgBalance_char(element, valeur) {
  let msgMemoire = [
    "Oulalalala !",
    "Outoutouille !",
    "Arf !",
    "Pas de bol !",
    "Grrrrr !",
  ];

  let nbAleatoire = Math.round(Math.random() * msgMemoire.length);

  let msg = "";

  if (valeur > 0) {
    msg = "Tu empoche";
  } else {
    msg = "Perte de";
  }

  valeur = Math.abs(valeur);

  let msg2 = "";
  let pluriel = valeur > 0 ? "s" : "";

  switch (element) {
    case "life_current":
      msg2 = `${msg} ${valeur} point${pluriel} de vie.`;
      break;

    case "ability_current":
      msg2 = `${msg} ${valeur} point${pluriel} d'habilité.`;
      break;

    case "chance_current":
      msg2 = `${msg} ${valeur} point${pluriel} de chance.`;
      break;
  }

  return msg2 + "<br/>";
}

function setCharacteristicBalance(element, nbPoint) {

  console.log("-------------------------------")
  // console.log("Element a traiter", element)

  switch(element) {

    case "life_current":
      
      if (nbPoint > 0 ) {

        console.log("Ajout life_current",nbPoint)
        bddUser[IdUserGame].life_current =  bddUser[IdUserGame].life_current + nbPoint

      } else {

        nbPoint = Math.abs(nbPoint)
        console.log("Débit life_current",nbPoint)
        bddUser[IdUserGame].life_current =  bddUser[IdUserGame].life_current - nbPoint
       
      }

      setTimeout(()=> {
       
        endurance.classList.add('brillance')
        userEndurance.classList.add('rotate-zoom')
        userEndurance.innerHTML = bddUser[IdUserGame].life_current
        setTimeout(()=> {
          
          endurance.classList.remove('brillance')
          userEndurance.classList.remove('rotate-zoom')
          

        }, 500)
      }, 5000)

      break;

    case "chance_current":
    
      if (nbPoint > 0 ) {

        console.log("Ajout chance_current",nbPoint)
        bddUser[IdUserGame].chance_current  =  bddUser[IdUserGame].chance_current  + nbPoint

      } else {

        nbPoint = Math.abs(nbPoint)
        console.log("Débit chance_current",nbPoint)
        bddUser[IdUserGame].chance_current  =  bddUser[IdUserGame].chance_current  - nbPoint
        
      }

      setTimeout(()=> {
       
        chance.classList.add('brillance')
        userChance.classList.add('rotate-zoom')
        userChance.innerHTML = bddUser[IdUserGame].chance_current
        setTimeout(()=> {
          chance.classList.remove('brillance')
          userChance.classList.remove('rotate-zoom')
         
        }, 500)
      }, 5100)

     
      break;

    case "ability_current":
  
      if (nbPoint > 0 ) {

        console.log("Ajout ability_current",nbPoint)
        bddUser[IdUserGame].ability_current = bddUser[IdUserGame].ability_current + nbPoint

      } else {

        nbPoint = Math.abs(nbPoint)
        console.log("Débit ability_current",nbPoint)
        bddUser[IdUserGame].ability_current = bddUser[IdUserGame].ability_current - nbPoint
        
      }

      setTimeout(()=> {
       
        habilite.classList.add('brillance')
        userHabilite.classList.add('rotate-zoom')
        userHabilite.innerHTML = bddUser[IdUserGame].ability_current
        setTimeout(()=> {
          habilite.classList.remove('brillance')
          userHabilite.classList.remove('rotate-zoom')
          
        }, 500)
      }, 5200)
      
      break;

  }


}
