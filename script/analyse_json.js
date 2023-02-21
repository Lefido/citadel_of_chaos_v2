


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
    detailsEtape(numEtape)
})

nextEtape.addEventListener('click',()=> {
    numEtape++
    choiceEtape.value = numEtape
    detailsEtape(numEtape)
})

choiceEtape.addEventListener('keyup', (e)=> {
    console.log(e)

    if(e.which === 13) {
        console.log("J'ai appuyé sur la touche entrée")
        detailsEtape(choiceEtape.value)

    }

    if(e.which === 13) {
        console.log("J'ai appuyé sur la touche entrée")

        numEtape = choiceEtape.value
        detailsEtape(numEtape)

    }

})

validation.addEventListener('click',()=> {
    numEtape = choiceEtape.value
    detailsEtape(numEtape)
})


detailsEtape(numEtape);

function detailsEtape(num_Etape) {

    console.clear()

    displayEtape.innerHTML = "PATHWAY : " + num_Etape

    content.innerHTML = ""

    let step_current = list_etape[num_Etape];
    console.log(step_current);

    /// Lecture Pathway

    let msgElement = "Pathway :" +num_Etape
    console.log(msgElement);
    add_element_h2(msgElement)

    /// Lecture Narrative

    msgElement = "Step_type : " + step_current.step_type
    console.log(msgElement);
    add_element_h3(msgElement)

    /// Lecture Content

    msgElement = "Content : " + step_current.content
    console.log(msgElement);
    add_element_h3(msgElement)

    /// Lecture characteristic_balance

    if (step_current.characteristic_balance !== undefined) {

        msgElement = "characteristic_balance : "

        console.log(msgElement);
        add_element_h3(msgElement)

        let list_characteristic_balance = step_current.characteristic_balance

        for (let characteristic_balance in list_characteristic_balance) {

            msgElement = characteristic_balance + " = " +list_characteristic_balance[characteristic_balance]

            console.log(characteristic_balance,list_characteristic_balance[characteristic_balance] )
            add_element_li(msgElement)

        }
        
    }

    /// Lecture inventory_balance 

    if (step_current.inventory_balance !== undefined) {

        msgElement = "inventory_balance"
        console.log(msgElement)
        add_element_h3(msgElement)

        let list_inventory_balance = step_current.inventory_balance

        for (let inventory_balance in list_inventory_balance) {

            msgElement = inventory_balance + " = " + list_inventory_balance[inventory_balance]
            console.log(msgElement)
            add_element_li(msgElement)

        }

        console.log(step_current.inventory_balance)

    }

    /// Lecture is_escapable

    if (step_current.is_escapable !== undefined) {

        msgElement = "is_escapable : " + step_current.is_escapable
        console.log(msgElement);
        add_element_h3(msgElement)

    }

    // Lecture max_rounds

    if (step_current.max_rounds !== undefined) {

        msgElement = "max_rounds : " + step_current.max_rounds
        console.log(msgElement);
        add_element_h3(msgElement)

    }


    /// Lecture ennemies

    let list_ennemies = step_current.ennemies

    if (list_ennemies !== undefined) {

        msgElement = "Enemie : " + list_ennemies.length
        
        console.log(msgElement)
        
        add_element_h3(msgElement)

        for (let ennemies in list_ennemies) {

            let list_details_enemies = list_ennemies[ennemies]

            for (let detail_enemie in list_details_enemies) {
                msgElement = detail_enemie + " : " + list_details_enemies[detail_enemie]
                console.log(msgElement)
                add_element_li(msgElement)
            }
        }

    }


    /// Lecture next Pathway

    msgElement = "Next Pathways :"
    console.log(msgElement);
    add_element_h4(msgElement)

    for (let pathway in step_current.pathways) {

        /// Lecture Step_Pathways

        msgElement = "Step_Pathways : " + pathway
        console.log(msgElement);
        add_element_h5(msgElement)

        /// Lecture Pathway Content

        msgElement = "Content : " + step_current.pathways[pathway].content
        console.log(msgElement);
        add_element_h6(msgElement)

        /// Lecture is_max_round_default

        if (step_current.pathways[pathway].is_max_round_default !== undefined) {

            msgElement = "is_max_round_default : " + step_current.pathways[pathway].is_max_round_default
            console.log(msgElement);
            add_element_li(msgElement)
            
        }

        /// Lecture is_victory_default

        let is_victory_default = step_current.pathways[pathway].is_victory_default

        if (is_victory_default !== undefined) {
            
            msgElement = "is_victory_default: " +  is_victory_default
            console.log(msgElement);
            add_element_li(msgElement)

        }



        /// Lecture is_escape_default 

        let is_escape_default = step_current.pathways[pathway].is_escape_default

        if (is_escape_default !== undefined) {
            
            msgElement = "is_escape_default: " +  is_escape_default
            console.log(msgElement);
            add_element_li(msgElement)

        }

        /// Lecture is_fail_default

        let is_fail_default = step_current.pathways[pathway].is_fail_default

        if (is_fail_default !== undefined) {
            
            msgElement = "is_fail_default: " +  is_fail_default
            console.log(msgElement);
            add_element_li(msgElement)

        }

        /// Lecture inventory_required

        let list_inventory_required =
        step_current.pathways[pathway].inventory_required;

        if (step_current.pathways[pathway].inventory_required !== undefined) {

            msgElement = "inventory_required - Next pathway"
            console.log(msgElement);
            add_element_h6(msgElement)

            for (let inventory_required in list_inventory_required) {

                msgElement = list_inventory_required[inventory_required]
                console.log(msgElement);
                add_element_li(msgElement)
            }

        }

        

        /// Lecture inventory_balance - button action

        if (step_current.pathways[pathway].inventory_balance !== undefined) {

            let list_inventory_balance =
            step_current.pathways[pathway].inventory_balance;
    
            msgElement = "inventory_balance : button action"
            console.log(msgElement);
            add_element_h6(msgElement)
    
            for (let inventory_balance in list_inventory_balance) {
    
                msgElement = inventory_balance + " = " + list_inventory_balance[inventory_balance]
                console.log(msgElement);
                add_element_li(msgElement)
            }


        }
       
        /// Lecture formula_balance

        let list_formula_balance = step_current.pathways[pathway].formula_balance;
        for (let formula_balance in list_formula_balance) {

            msgElement = "formula_balance - button"
            console.log(msgElement);
            add_element_h6(msgElement)

            msgElement = formula_balance + " = " + list_formula_balance[formula_balance] 
            console.log(msgElement);
            add_element_li(msgElement)
            
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
