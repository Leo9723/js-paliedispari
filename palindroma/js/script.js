function paliword(word) {
    let new_word = word.split('')
        new_word = new_word.reverse('')
        new_word = new_word.join('')
        console.log(new_word)
        if(new_word === word) {
            return true
        }
        else {
            return false
        }
}
                                          
let user_word = prompt('inserisci una parola')

let final_esit = paliword(user_word)


if (final_esit) {
    alert('palindroma')
}

else {
    alert('NON palindroma')
}
