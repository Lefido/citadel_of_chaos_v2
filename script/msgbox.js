
// export {msgBox}

export default function msgBox(nameNoeud ,titleMsg, contentMsg) {

    let balise = document.querySelector(nameNoeud)
    balise.style.position = "relative"    

    let box = document.createElement('div');
    box.style.position = "absolute";
    // box.style.backgroundColor = "white";
    // box.style.width = "200px";
    box.style.borderRadius = "10px";
    box.style.padding = "10px 30px";
    box.style.textAlign = "center";
    box.classList.add('zoom-in')
    box.classList.add('parchemin-3')

    let titleBox = document.createElement("h3");
    titleBox.innerHTML = titleMsg;
    titleBox.style.borderBottom = "1px solid gray"
    titleBox.style.padding = "5px 0 0"
    
    let msgBox = document.createElement("p");
    msgBox.innerHTML = contentMsg;
    msgBox.style.marginTop = "10px"
    msgBox.style.padding = "5px 0 10px"

    box.appendChild(titleBox);
    box.appendChild(msgBox);
    
    // setTimeout(function() {box.remove()}, 2000)
    
    setTimeout(() => {
        
        box.classList.add("extinction")
    
        setTimeout(() => {
            box.remove()
        }, 700);
    
    }, 2300);
    
    balise.appendChild(box)
    
    }
    