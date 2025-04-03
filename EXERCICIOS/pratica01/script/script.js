function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var corpo = window.document.body
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `O horário atual é de ${hora} horas`

    if (hora >= 0 && hora < 12 ) {
        //BOM DIA!
        img.src = 'imagens/dia.jpg'
        corpo.style.background = 'yellow'
    } else if ( hora > 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        corpo.style.background = 'orange'
    } else { 
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        corpo.style.background = 'black'
    }
        
}