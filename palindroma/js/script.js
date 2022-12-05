let esit = false

function paliword(word) {
    let new_word = word.split('')
        new_word = new_word.reverse('')
        new_word = new_word.join('')
    console.log(new_word)
    
    if (word == new_word) {
        esit = true
    }
    console.log(esit)
}

console.log(esit)

let user_word = prompt('inserisci una parola')

paliword(user_word)

if (esit = true) {
    alert('la parola inserita è palindroma')
}
else {
    alert('la parola inserita NON è palindroma')
}
