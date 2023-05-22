let button = document.getElementById('btn')
button.addEventListener('click', function(){

    let user = Math.floor(Math.random() * 6) + 1;
    let computer = Math.floor(Math.random() * 6) + 1;

    if(user > computer){
        document.getElementById("winner").innerHTML = `Il vincitore è User!`
    }
    else if(user < computer){
        document.getElementById("winner").innerHTML = `Il vincitore è Computer!` 
    }
    else{
        document.getElementById("winner").innerHTML = `Pareggio!`
    }

    document.getElementById("user").innerHTML = user;
    document.getElementById("computer").innerHTML = computer;

})

