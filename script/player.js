

let avatar_choice = document.querySelector('.avatar-choice')

for(let i = 0 ; i < 6; i++) {

    load_img(i)
    
}

const list_personnage = document.querySelectorAll('.personnage')



list_personnage.forEach( (personnage, index) => {
    personnage.addEventListener('click', function() {
        console.log("J'ai cliqué sur le personnage", index)
        perso_actif()
        personnage.classList.add("perso-actif")
    })
})


function perso_actif() {
    const pero_actif = document.querySelectorAll('.perso-actif')
    pero_actif.forEach((personnage) => {
        personnage.classList.remove("perso-actif")
    })
}



function load_img(i) {

    let img = document.createElement('img') 
    img.src = "./assets/personnage/av_" + i + ".png"
    img.alt = "Image avatar " + i
    img.dataset.id = i
    img.classList.add("personnage")
    avatar_choice.appendChild(img)

}


