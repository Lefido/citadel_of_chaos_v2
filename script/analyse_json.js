


const formerEtape = document.querySelector('#former-etape')
const nextEtape = document.querySelector('#next-etape')
const displayEtape = document.querySelector('#display-etape')
const content = document.querySelector('#content')
const choiceEtape = document.querySelector('#choice-etape')
const validation = document.querySelector('#validation')

let url = "./json/chaos_citadel_script.json";
let response = await fetch(url);
let list_etape = await response.json(); // lire le corps de réponse et analyser en JSON

let numEtape = 1;

formerEtape.addEventListener('click',()=> {
    numEtape--
    choiceEtape.value = numEtape
    detailsEtape(numEtape);
    
})

nextEtape.addEventListener('click',()=> {
    numEtape++
    choiceEtape.value = numEtape
    detailsEtape(numEtape);
   
})

choiceEtape.addEventListener('keyup', (e)=> {
    console.log(e)

    if(e.which === 13) {
        console.log("J'ai appuyé sur la touche entrée")

        numEtape = choiceEtape.value
        detailsEtape(numEtape);

    }

})

validation.addEventListener('click',()=> {
    numEtape = choiceEtape.value
    detailsEtape(numEtape);
})


detailsEtape(numEtape);

function detailsEtape(num_Etape) {

    console.clear()

    displayEtape.innerHTML = "PATHWAY : " + num_Etape

    content.innerHTML = ""

    let step_current = list_etape[num_Etape];
    console.log(step_current);

    let msg;

    for (let etape in step_current) {

        switch(etape) {

            case "step_type":
                msg = etape
                console.log(msg)
                add_element_h2(msg)
    
                msg = step_current[etape]
                console.log(msg)
                add_element_h3(msg)
                break

            case "content":
                msg = etape
                console.log(msg)
                add_element_h2(msg)
                msg = step_current[etape]
                console.log(msg)
                add_element_h3(msg)
                break

            case "inventory_balance":
                msg = etape
                console.log(msg)
                add_element_h2(msg)
                let list_inventory_balance = step_current[etape]
                for (let inventory_balance in list_inventory_balance) {
                    msg = inventory_balance
                    console.log(msg)
                    add_element_h3(msg)
                    msg = list_inventory_balance[inventory_balance]
                    console.log(msg)
                    add_element_h4(msg)
                }
                break

            case "ennemies":
                msg = etape
                console.log(msg)
                add_element_h2(msg)
                let list_ennemies = step_current[etape]
                for (let idEnemie in list_ennemies) {
                    msg = idEnemie
                    console.log(msg)
                    add_element_h3(msg)
                    let detail_enemie = list_ennemies[idEnemie]
                    for (let detail in detail_enemie) {
                        msg = detail
                        console.log(msg)
                        add_element_h4(msg)
                        msg = detail_enemie[detail]
                        console.log(msg)
                        add_element_h5(msg)
                    }
                    

                }
                break

            case "max_rounds":
                msg = etape
                console.log(msg)
                add_element_h2(msg)
                msg =  step_current[etape]
                console.log(msg)
                add_element_h3(msg)

                break

            case "is_escapable":
                msg = etape
                console.log(msg)
                add_element_h2(msg)
                msg = step_current[etape]
                console.log(msg)
                add_element_h3(msg)
                break

            case "characteristic_balance":
                msg = etape
                console.log(msg)
                add_element_h2(msg)

                let list_characteristic_balance =  step_current[etape]
                for (let characteristic_balance in list_characteristic_balance) {
                    msg = characteristic_balance
                    console.log(msg)
                    add_element_h3(msg)
                    msg = list_characteristic_balance[characteristic_balance]
                    console.log(msg)
                    add_element_h4(msg)
                }
                break

            case "pathways":
                msg = etape
                add_element_h2(msg)
                console.log(etape)
                let list_pathways = step_current[etape]
                for (let pathway in list_pathways) {

                    msg = pathway
                    add_element_h3(msg)
                    let list_content =  list_pathways[pathway]

                    for (let content in list_content) {

                        switch(content) {

                            case "content":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                msg = list_content[content]
                                add_element_h5(msg)
                                console.log(list_content[content])
                                break;
                            case "inventory_required":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                msg = list_content[content]
                                add_element_h5(msg)
                                console.log(list_content[content])
                                break;
                            case "is_end_of_the_game":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                msg = list_content[content]
                                add_element_h5(msg)
                                console.log(list_content[content])
                                break;
                            case "formula_balance":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                // msg = list_content[content]

                                let list_formula_balance = list_content[content]
                                for (let formula_balance in list_formula_balance) {
                                    msg = formula_balance
                                    add_element_h5(msg)
                                    console.log(msg)
                                    msg = list_formula_balance[formula_balance]
                                    add_element_h6(msg)
                                    console.log(msg)
                                }
                                // add_element_h5(msg)
                                // console.log(list_content[content])
                                break;
                            case "is_victory_default":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                msg = list_content[content]
                                add_element_h5(msg)
                                console.log(list_content[content])
                                break;

                            case "is_escape_default":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                msg = list_content[content]
                                add_element_h5(msg)
                                console.log(list_content[content])
                                break;

                            case "is_fail_default":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                msg = list_content[content]
                                add_element_h5(msg)
                                console.log(msg)
                                break;

                            case "inventory_balance":
                                msg = content
                                add_element_h4(msg)
                                console.log(msg)
                                // msg = list_content[content]

                                let list_inventory_balance = list_content[content]
                                for (let inventory_balance in list_inventory_balance) {
                                    msg = inventory_balance
                                    add_element_h5(msg)
                                    console.log(msg)
                                    msg = list_inventory_balance[inventory_balance]
                                    add_element_h6(msg)
                                    console.log(msg)
                                }
                                // add_element_h5(msg)
                                // console.log(list_content[content])
                                break;
                            
                            
                                
                        }

                        // msg = list_content[content]
                        // add_element_h5(msg)
                        // console.log(list_content[content])


                        
                    }
                }
        }

    }

}

function add_element_h2(element) {

    let box = document.createElement('h2')
    box.style.backgroundColor = "black"
    box.style.color = "white"
    box.innerHTML = element
    content.appendChild(box)

}

function add_element_h3(element) {

    let box = document.createElement('h3')
    box.innerHTML = element
    content.appendChild(box)

}

function add_element_h4(element) {

    let box = document.createElement('h4')
    box.innerHTML = element
    content.appendChild(box)

}

function add_element_h5(element) {

    let box = document.createElement('h5')
    box.innerHTML = element
    
    content.appendChild(box)

}

function add_element_h6(element) {

    let box = document.createElement('h6')
    box.innerHTML = element
    
    content.appendChild(box)

}

function add_element_li(element) {

    let box = document.createElement('li')
    box.innerHTML = element
    content.appendChild(box)

}
