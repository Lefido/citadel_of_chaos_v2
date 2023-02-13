


///////////////////// Gestion de la partie en cours ///////////////


// export {
//     reset,
//     newToken,
//     getToken,
//     removeToken,
//     getListUser,
//     removeListUser,
//     IdUserGame,
//     listUser,
//     UpdateListUser,
//     updateToken
// }

function reset() {

    removeToken()
    removeListUser()

    localStorage.removeItem("token");
    localStorage.removeItem("listUser")


    console.log("Reset Token et listUser")
}

function updateToken(token, id_img) {

    let detailToken = {
        "user" : token,
        "id_img" : id_img
    }

    detailToken = JSON.stringify(detailToken)

    localStorage.setItem("token", detailToken);
    console.log("Update token :", detailToken)

}

function newToken(token) {

    let userName = token.toLowerCase()

    let detailToken = {
        "user" : userName,
        "id_img" : 0
    }

    detailToken = JSON.stringify(detailToken)

    localStorage.setItem("token", detailToken);
    console.log("Save token :", detailToken)

}

function getToken() {

    let userGame = localStorage.getItem("token");

    userGame = JSON.parse(userGame)

    console.log("Load token",userGame)

    return userGame


}

function removeToken() {

    localStorage.removeItem("token")
    console.log("Del token")

}

function getListUser(pseudo, mail) {

    let listUser = localStorage.getItem("listUser")

    if(listUser === null) {
       
        console.log("Liste vide, on ajoute le 1er user")
        console.log("Pseudo :", pseudo, "Mail :", mail)

        let newlistUser = []

        let userDefault = loadUserDefault(pseudo, mail)

        newlistUser.push(userDefault)

        newlistUser = JSON.stringify(newlistUser)

        localStorage.setItem("listUser", newlistUser )

        console.log("Détails de la listUser", listUser)


    } else {

        listUser = JSON.parse(listUser);

        let existant = false;

        for (let user in listUser) {

            if (listUser[user].pseudo === pseudo) {
               
                existant = true;
            }

        }

        if (existant) {

            console.log("User", pseudo, "existant");

        } else {

            let userDefault = loadUserDefault(pseudo, mail);
            listUser.push(userDefault);
            console.log("Détails de la listUser", listUser);
            listUser = JSON.stringify(listUser);
            localStorage.setItem("listUser", listUser );
        }

    
      

    }

}

function removeListUser() {

    localStorage.removeItem("listUser")
    console.log("Del listUser")

}

function loadUserDefault(pseudo, mail) {

    console.log("Create newUser")

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

function IdUserGame(userGame) {

    let listUser = localStorage.getItem("listUser")

    listUser = JSON.parse(listUser)

    let idUser = 0

    for ( let user in listUser) {

        if (listUser[user].pseudo === userGame) {
            idUser = user
        }
    }

    console.log("ID User :", idUser)

    return idUser

}

function listUser() {

    console.log("List User")

    let listUser = localStorage.getItem("listUser")

    listUser = JSON.parse(listUser)

    console.log(listUser)

    return listUser

}

function UpdateListUser(listUser) {

    let newListUser = listUser
    newListUser = JSON.stringify(newListUser)

    localStorage.setItem("listUser", newListUser)

    console.log("Update ListUser")

}



