


///////////////////// Gestion du gamming ///////////////

export {reset, newUserBdd, idUser, setTokenUser, getTokenUser, removeToken, getListUserBdd, setListUserBdd}

// localStorage.setItem("token", detailToken);
// localStorage.getItem("token");

function reset() {

    console.log("Suppression BddUser")
    localStorage.removeItem('bddUser')
    removeToken()


}

function setListUserBdd(bddUser) {

    console.log("Save Param User")

    let updateBddUser = bddUser

    updateBddUser = JSON.stringify(updateBddUser)

    localStorage.setItem('bddUser', updateBddUser)

}

function getListUserBdd() {

    let listUserBdd = localStorage.getItem('bddUser')

    listUserBdd = JSON.parse(listUserBdd)

    return listUserBdd

}

function newUserBdd(user, mail) {


     console.log("Lecture Bdd User")

    let bddUser = localStorage.getItem('bddUser')

    if (bddUser === null) {

        console.log("BddUser inexistante")

        bddUser = []

        console.log("Création BddUser")


        let newUser = loadUserDefault(user, mail)

        bddUser.push(newUser)

        console.log("Ajout user", user, "a bddUser")

        bddUser = JSON.stringify(bddUser)

        console.log("Création BddUser")

        localStorage.setItem('bddUser', bddUser)



    } else {

        console.log('Ouverture bddUSer')

        bddUser = localStorage.getItem('bddUser')

        bddUser = JSON.parse(bddUser)

        let newUser = loadUserDefault(user, mail)

        bddUser.push(newUser)

        console.log("Ajout user", user, "a bddUser")

        bddUser = JSON.stringify(bddUser)

        localStorage.setItem('bddUser', bddUser)

    }


}

function idUser(user) {

    let bddUser = localStorage.getItem('bddUser')

    console.log('Recherche user dans BddUser')

    bddUser = JSON.parse(bddUser)

    let id = 0

    for (let userBdd in bddUser) {

        if (bddUser[userBdd].pseudo === user) {
            id = userBdd
        }

    }

    console.log("Id user",user, id)

    return id


}

function loadUserDefault(pseudo, mail) {

    console.log("Create newUser : ", pseudo)

    let userDefault = {
        "pseudo": pseudo,
        "mail": mail,
        "num_perso": 0,
        "current_step": 0,
        "ability_max": 0,
        "ability_current": 0,
        "life_max": 0,
        "life_current": 0,
        "chance_max": 0,
        "chance_current": 0,
        "magic_max": 0,
        "magic_current": 0
      }


      return userDefault

}

function setTokenUser(idUser) {

    console.log('Set token :', idUser)
    localStorage.setItem('tokenUser', idUser)

}

function getTokenUser() {

    let token = localStorage.getItem('tokenUser')
    console.log('Get token :', token)
    return token

}

function removeToken() {

    localStorage.removeItem('tokenUser')
    console.log('Remove token')

}





