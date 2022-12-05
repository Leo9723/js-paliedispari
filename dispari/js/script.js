

function randomNumberEsit (number) {
    let pc_number = parseInt(Math.floor(Math.random() * 5 + 1))
    final_number = number + pc_number
    console.log(pc_number)
    console.log(final_number)
    return final_number
}


let user_choice = prompt('scegli tra pari e dispari')

if (user_choice == 'pari') {
    pari = true
}
else {
    pari = false
}

let user_number = parseInt(prompt('inserisci un numero da 1 a 5'))

let final_esit = randomNumberEsit (user_number)
console.log(pari)

let esit = true;


if (final_esit % 2 != 0) {
    esit = false
}
console.log(esit)

if (esit == true) {
    if (pari === true) {
        alert('hai vinto')
    }
    else {
        alert('hai perso')
    }
}

else if (esit == false) {
    if (pari === false) {
        alert('hai vinto')
    }
    else {
        alert('hai perso')
    }
}

