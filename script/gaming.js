
export { 
    searchIdUser,
    saveUser,
    loadUser,
    delUser,
    saveListUSer,
    loadListUser,
    delListUser,
    loadUserDefault,
    saveAvatar,
    loadAvatar,
    delAvatar
}

///////////////////// Gestion de la partie en cours ///////////////


function searchIdUser(userGame) {

    let listUser = JSON.parse(loadListUser())

    let id = 0

    for (let user in listUser) {

        if (listUser[user].pseudo === userGame) {
            id = user
        }

    }

    console.log("Id:", id, userGame, )

    return id

}

function saveUser(usergame) {

    console.log("Save user:", usergame)
    localStorage.setItem("userGame", usergame);
}
  
function loadUser() {

let user = localStorage.getItem("userGame");

return user;

}
  
function delUser() {
localStorage.removeItem("userGame")
console.log("Del userGame")
}

function saveListUSer(listUser) {

    console.log("Save listUser")
    localStorage.setItem("listUser", listUser);

}

function loadListUser() {

    let listUser = localStorage.getItem("listUser")

    if(listUser === null) {

        console.log("listUser vide")
        return []

    } else {

        console.log("Load listUser")

        return listUser

    }



}

function delListUser() {

    console.log("Del listUser")
    localStorage.removeItem("listUser")

    delUser()
}

function loadUserDefault(pseudo, mail) {

    console.log("Create newUser")

    let userDefault = {
        "pseudo": pseudo,
        "mail": mail,
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

function saveAvatar(user, numAvatar) {

    console.log("Save Avatar", user);
    localStorage.setItem("avatar_" + user, numAvatar);
   
}

function loadAvatar(user) {

    let numAvatar = localStorage.getItem("avatar_" + user);
    console.log("load avatar", numAvatar)
    return numAvatar;

}

function delAvatar(user) {

    console.log("Del numAvatar")
    localStorage.removeItem("avatar_" + user)
}
  
  //////////////////////////////////////////////////////////////////
  