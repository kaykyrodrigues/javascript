function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtfi')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert('ERRO! Não deixe espaços em branco.')
    } else {
        res.innerHTML = 'Contando: </br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p == 0) {
            window.alert('Passo invalido!')
        }
        } if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
                }
                res.innerHTML += `\u{1F3C1}`
            }  else {
                for (c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F448}`
                }
        }     
}    
/* for (c = f; c >= i; c += p) {
    res.innerHTML += `${c} \u{1F448}`
}*/