let url = "./json/chaos_citadel_script.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON

const narratif_content = document.querySelector(".narratif-content");
const choice_content = document.querySelector(".choice-content");

var list_btn_choice;

let num_etape = 1;

affiche_etape(num_etape)

function affiche_etape(num_etape) {

  let etape = list_etape[num_etape];

  etape_narratif(etape.content);
  etape_pathways(etape.pathways);

  list_btn_choice = btn_choice();


  list_btn_choice.forEach((element) => {

    element.addEventListener("click", function () {

      console.log("J'ai cliqué sur l'étape", element.dataset.next_etape);
      affiche_etape(element.dataset.next_etape)
    
    });
  
});

}

function etape_narratif(narratif) {

  narratif_content.innerHTML = "";

  let new_narratif = document.createElement("p");
  new_narratif.innerHTML = narratif;

  narratif_content.appendChild(new_narratif);

}

function etape_pathways(pathways) {
  choice_content.innerHTML = "";

  for (let pathway in pathways) {
    let btn_choice = document.createElement("button");

    btn_choice.classList.add("btn-2");
    btn_choice.classList.add("btn-choice");
    btn_choice.dataset.next_etape = pathway;
    btn_choice.innerHTML = pathways[pathway].content;

    choice_content.append(btn_choice);
  }


 

}

function btn_choice() {
  return document.querySelectorAll(".btn-choice");
}
