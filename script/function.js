


export { updateToken,
    setToken,
    delToken,
    routeur,
    createUser,
    loginUser,
    getUser
}

import msgBox from "./msgbox.js";



function updateToken() {

    let token = localStorage.getItem('tokencitadel');
    console.log("Extraction du token en format text du localStorage :",token)
    return token;

}

function setToken(token) {

    
    localStorage.setItem('tokencitadel', token);
    console.log("Token enregistré au format text dans le localStorage: ", token)

}

function delToken() {

    console.log("Suppression du token")
    localStorage.removeItem("tokencitadel");
}

function routeur(route) {

    window.location.href= route

}

function createUser(userData) {

    fetch('http://chaos-citadel.test/user/create',
    {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userData),
    })
    // Turns the response into Json
    .then(res =>  { return res.json()})
    .then((data) => {

      console.log(data.message)

      if (data.message === "user created") {
        
        msgBox("header", "Création de votre compte réussie !","Retour à la page d'accueil pour vous connecter" )

        setTimeout(function() {

            routeur('./index.html')
            // window.location.href= 
        }, 3500)
    
    } else {

        msgBox("header", "Erreur !","Nom d'utilisateur existant" )

    }

})


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

        let result;

      for(let reponse in data) {

       result = reponse

      }

      if (result === "token") {


        setToken(JSON.stringify(data))

        msgBox("header", "Youpi !", "Connexion réussie, chargement de votre position")

        setTimeout(() => {
    
            console.log("Connexion réussie");

            routeur('./home.html')
            
        }, 2000);

      } else {

        console.log("Erreur utilisateur ou mot de passe");
        msgBox("header", "Erreur !", "Utilisateur ou mot de passe");

        
      }
      
    })

}

function getUser(userData) {
  
      // Fetches the user/create URL
      fetch('http://chaos-citadel.test/user/get_info',
      {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(userData),
      })
      // Turns the response into Json
      .then(res => res.json())
  
      .then((data) => {
  
        console.log("Get user", data)
        
      })


}

