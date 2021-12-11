function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
if (hora>=5 && hora<13) {
    img.src = 'manha.png'
    document.body.style.background = '#bdb3e7'
} else if (hora>=13 && hora<19) {
    img.src = 'tarde.png'
    document.body.style.background = '#fec462'
} else {
    img.src = 'noite.png'
    document.body.style.background = '#43617b'
}
}