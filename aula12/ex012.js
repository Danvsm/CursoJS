var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora`)
if (hora < 12) {
    console.long('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log(`Boa Noite!`)
}