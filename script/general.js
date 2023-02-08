


let url = "./json/script_citadel_arrange.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON

const narratif_content = document.querySelector(".narratif-content");
const choice_content = document.querySelector(".choice-content");

var list_btn_pathways;

let current_html = window.location.pathname

console.log("Page en cours :", current_html)
console.log(list_etape);

let num_etape = 1;

affiche_etape(num_etape)


function affiche_etape(num_etape) {

  let etape = list_etape[num_etape];

  etape_narratif(etape.content);
  etape_pathways(etape.pathways);

}

function etape_narratif(narratif) {

  narratif_content.classList.remove("extinction")
  narratif_content.classList.add("allumage")
  
  narratif_content.innerHTML = "";

  let new_narratif = document.createElement("p");
  new_narratif.innerHTML = narratif;
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

      narratif_content.classList.add("extinction")
      narratif_content.classList.remove("allumage")

      let btn_selction = element.dataset.next_etape

      console.log("J'ai cliqué sur l'étape", btn_selction);

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

