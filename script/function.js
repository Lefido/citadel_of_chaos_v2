
export { updateToken, setToken, delToken, createUser, loginUser}

function updateToken() {

    let token = localStorage.getItem('tokencitadel');
    console.log("Token actuel :",token)
    return token;

}

function setToken(token) {

    console.log("Enregistrement du token: ", token)
    localStorage.setItem('tokencitadel', token);
    console.log("Enregistrement réussie")

}

function delToken(token) {

    console.log("Suppression du token")
    localStorage.removeItem(token);
}

async function createUser(userData) {


    const response = await fetch('http://chaos-citadel.test/user/create', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(userData),
        });
      
        return response.json(); // parses JSON response into native JavaScript objects



    //////



    
    // fetch('http://chaos-citadel.test/user/create',
    // {
    //   method: 'POST', // or 'PUT'
    //   body: JSON.stringify(userData),
    // })
    // // Turns the response into Json
    // .then(res =>  { return res.json()})
    // .then((data) => {

    //   console.log(data.message)

    // })



   ///


    // if (reponse === "user created") {

    //     return true

    //   } else {

    //     return false
    //   }

}

function loginUser(userData) {

    fetch('http://chaos-citadel.test/user/authenticate',
    {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userData),
    })
    // Turns the response into Json
    .then(res => res.json())

    .then((data) => {

      console.log(data)
      setApiMessage(data.token)
      
    })

}

