var contador = 1
var leader = ''

do {
    var resposta = prompt('Quem é o lider da quinta geração?')
    contador++
    if (resposta != leader) {
        console.log('Sua resposta está errada')
    } else {
        console.log('Você acertou!')
    }
} while (leader != 'BABYMONSTER')