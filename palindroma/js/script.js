function paliword(word) {
    let new_word = word.split('')
        new_word = new_word.reverse('')
        new_word = new_word.join('')
        console.log(new_word)
        return new_word
}

let user_word = prompt('inserisci una parola')

let final_esit = paliword(user_word)

let esit = true

if (user_word == final_esit) {
    esit == true
}

else {
    esit == false
}

console.log(esit)

if (esit == true) {
    alert('la parola inserita è palindroma')
}
else {
    alert('la parola inserita NON è palindroma')
}

console.log(final_esit)

console.log(user_word)
