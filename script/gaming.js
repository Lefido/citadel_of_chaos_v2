
export { saveUser, loadUser, delUser, saveListUSer, loadListUser, delListUser, loadUserDefault}

///////////////////// Gestion de la partie en cours ///////////////

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
  
  //////////////////////////////////////////////////////////////////
  