let button = document.getElementById('button')

button.addEventListener('click', function() {
    
    function randomNumberEsit (number) {
        let pc_number = parseInt(Math.floor(Math.random() * 5 + 1))
        final_number = number + pc_number
        console.log(pc_number)
        console.log(final_number)
        return final_number
    }
    
    
    
    let user_choice = document.getElementById('pari-dispari').value
    
    if (user_choice == 'pari') {
        pari = true
    }
    else {
        pari = false
    }
    
    let user_number = parseInt(document.getElementById('user-number').value)
    
    let final_esit = randomNumberEsit (user_number)
    console.log(pari)
    
    let esit = true;
    
    
    if (final_esit % 2 != 0) {
        esit = false
    }
    console.log(esit)
    
    if (esit == true) {
        if (pari === true) {
            document.getElementById("final-score").innerHTML = 'hai vinto'
        }
        else {
            document.getElementById("final-score").innerHTML = 'hai perso'
        }
    }
    
    else if (esit == false) {
        if (pari === false) {
            document.getElementById("final-score").innerHTML = 'hai vinto'
        }
        else {
            document.getElementById("final-score").innerHTML = 'hai perso'
        }
    }

})

