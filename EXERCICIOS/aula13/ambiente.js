console.log('Lê-se essa estrutura de repetição da seguinte forma: "Enquanto o contador for menor ou igual a cinco, escreva o número de passos dele"')
var contador = 1
while (contador <= 5) {
    console.log(`Você está no passo ${contador}`)
    contador++
}

console.log('Essa outra repetição é lida assim: "Faça a escrita enumerada do passo dado enquanto ele for menor ou igual a 5"')
var contador = 1
do {
    console.log(`Você está no passo ${contador}`)
    contador++
} while (contador <= 5)
