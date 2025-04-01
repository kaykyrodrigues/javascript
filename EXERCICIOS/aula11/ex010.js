var agora = new Date()
var hora = agora.getHours()
// O uso do "new Date()" e do "getHours()" permite com que o horário em tempo real seja utilizado. Não apenas ele, como a data, segundos etc...
console.log(`O horário atual é de ${hora} horas`)
if (hora <= 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
    } else {
    console.log('Boa noite')
}   