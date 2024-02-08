function sauvegarde (){
    let nom = document.getElementById("sauvegarde").value;
    let password = document.getElementById("save").value;

    localStorage.setItem("nom", nom);
    localStorage.setItem("password", password);
}

function save (){
    let nom = document.getElementById("sauvegarde").value;
    let password = document.getElementById("sauvegarde").value;

    sessionStorage.setItem("nom", nom);
    sessionStorage.setItem("password", password);
}
/* localStorag et session storage à étudier*/

