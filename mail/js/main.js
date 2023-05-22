"use strict"
let access = prompt("Qual'è la tua mail?")

let email = ["pluto@gmail.com", "pluto@tiscali.it", "pluto@libero.it"]

let message = document.getElementById("accesso")

let i = 0;

let output = false;

for(i=0; i < email.length; i++){
    if(access == email[i]){
        output = true;
    }
}

if(output == true){
    message.innerHTML = "Complimenti! Hai effettuato l'accesso"
}
else{
    message.innerHTML = "Spiacenti! L'email inserita non è corretta"
    window.alert("Spiacenti! L'email inserita non è corretta")
}



