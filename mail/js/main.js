"use strict"
let access = prompt("Qual'è la tua mail?")

let email = ["first@mail.com", "second@mail.com", "third@mail.com", 
            "fourth@mail.com", "fifth@mail.com", "sixth@mail.com",
            "seventh@mail.com", "eighth@mail.com","nineth@mail.com", "tenth@mail.com"]

let message = ''

let i = 0;

if(access != email){
    message = "Spiacenti, l'email fornita non è corretta"
    console.log(message)
}
else{
    message = "Complimenti! Hai effettuato l'accesso"
    console.log(message)
}

