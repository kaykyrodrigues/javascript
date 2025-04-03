function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fnasc = document.getElementById('txtnasc')
    var res = document.getElementById('res')

    if (fnasc.value.lenght == 0 || fnasc.value > ano ) {
        window.alert('ERRO! O ano digitado excede o limite atual.')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fnasc. value)
        res.innerHTML = `A sua idade é de ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // A var "img" foi criada como se fosse uma tag "img" utilizando esses elementos escritos.
        if (sex[0].checked) {
            //O checked significa "checado", ou seja, "se está confere"
            genero = 'homem'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagens/hbebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/hjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/hadulto.jpg')
            } else if (idade < 100) {
                //idoso
                img.setAttribute('src', 'imagens/hidoso.jpg')
            }

        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagens/mbebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mjovem.jpg')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'imagens/madulta.jpg')
            } else if (idade < 100) {
                //idosa
                img.setAttribute('src', 'imagens/midosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}