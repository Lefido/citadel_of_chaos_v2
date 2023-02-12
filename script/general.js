
import { listUser, IdUserGame, getToken, UpdateListUser, reset } from "./gaming.js";


// reset()

// let url = "./json/script_citadel_arrange.json";
let url = "./json/chaos_citadel_script.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON

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

let token = getToken()
let userGame = token.user
let idUser = IdUserGame(userGame)
let list_User = listUser()

let num_etape = list_User[idUser].current_step

affiche_etape(num_etape)

function affiche_etape(num_etape) {

  let etape = list_etape[num_etape];

  etape_narratif(etape.content);
  etape_pathways(etape.pathways);

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

      console.log("J'ai cliqué sur l'étape", btn_selction);

      list_User[idUser].current_step = parseInt(num_etape)

      UpdateListUser(list_User)

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

