function carregar() {
    var msg = document.getElementById('js')
    var data = new Date()
   // var hora = data.getHours()
    var hora = 5 
    if (hora >= 0 && hora < 12) {
        document.header.style.background = '#s2cd9f'
        msg.innerHTML = `Bom Dia ! Agora são ${hora} horas`
    } else if (hora >= 12 && hora <= 18) {
        document.header.style.background = '#b9846f'
        msg.innerHTML = `Boa Tarde ! Agora são ${hora} horas`
    } else {
        document.header.style.background = '#515154'
        msg.innerHTML = `Boa Noite ! Agora são ${hora} horas`
    }

}