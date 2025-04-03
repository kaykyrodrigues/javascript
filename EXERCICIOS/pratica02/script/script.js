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
                img.setAttribute('src', 'hbebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'hjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'hadulto.jpg')
            }

        } else {
            genero = 'mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}