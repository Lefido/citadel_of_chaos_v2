export {
  updateToken,
  setToken,
  delToken,
  routeur,
  createUser,
  loginUser,
  getUser,
  reGex,
};

import msgBox from "./msgbox.js";

function updateToken() {
  let token = localStorage.getItem("tokencitadel");

  if (token === null) {
    console.log("Aucun token trouvé !");
  } else {
    console.log("Token trouvé :", token);
    return token;
  }
}

function setToken(token) {
  localStorage.setItem("tokencitadel", token);
  console.log("Enregistrement token dans localStorage: ", token);
}

function delToken() {
  console.log("Suppression du token");
  localStorage.removeItem("tokencitadel");
}

function routeur(route) {
  window.location.href = route;
}

function createUser(userData) {
  fetch("http://chaos-citadel.test/user/create", {
    method: "POST", // or 'PUT'
    body: JSON.stringify(userData),
  })
    // Turns the response into Json
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.message);

      if (data.message === "user created") {
        msgBox(
          "header",
          "Création de votre compte réussie !",
          "Retour à la page d'accueil pour vous connecter"
        );

        setTimeout(function () {
          routeur("./index.html");
          window.location.href= './index.html'
        }, 3500);
      } else {
        msgBox("header", "Erreur !", "Nom d'utilisateur existant");
      }
    });
}

function loginUser(userData) {
  fetch("http://chaos-citadel.test/user/authenticate", {
    method: "POST", // or 'PUT'
    body: JSON.stringify(userData),
  })
    // Turns the response into Json
    .then((res) => res.json())

    .then((data) => {
      let result;

      for (let reponse in data) {
        result = reponse;
      }

      if (result === "token") {
        console.log(data.token);

        setToken(data.token);

        msgBox(
          "header",
          "Youpi !",
          "Connexion réussie, chargement de votre position"
        );

        setTimeout(() => {
          console.log("Connexion réussie");

          routeur("./home.html");
        }, 3000);
      } else {
        console.log("Erreur utilisateur ou mot de passe");
        msgBox("header", "Erreur !", "Utilisateur ou mot de passe", 1500);
      }
    });
}



function getUser(monToken) {

  console.log("Token envoyé a l'API", monToken);

  var myHeaders = new Headers();

  myHeaders.append("Authentication", monToken);
  
  var requestOptions = {
    method: 'GET',
    Headers: myHeaders,
    cors: "no-cors"
  };

  console.log(myHeaders.get('Authentication'))

  fetch("http://chaos-citadel.test/user/get_info", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

function reGex(getPassword) {
  var pwd = getPassword;
  var listRe = [
    {
      re: /[a-zA-Z]/g,
      count: 4,
      msg: "Votre mot de passe doit avoir au moins 4 lettres",
    },
    {
      re: /\d/g,
      count: 3,
      msg: "Votre mot de passe doit avoir au moins 3 chiffres",
    },
    {
      re: /[^A-Za-z0-9]/g,
      count: 1,
      msg: "Votre mot de passe doit posséder au moins 1 caractère spécial",
    },
  ];

  for (var i = 0; i < listRe.length; i++) {
    var item = listRe[i];
    var match = pwd.match(item.re);
    if (null === match || match.length < item.count) {
      msgBox("header", "Oups !!", item.msg);
      // alert(item.msg);
      return false;
    }
  }
}
