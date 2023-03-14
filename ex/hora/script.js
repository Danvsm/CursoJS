function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = "../hora/imgs/manhã.png"
        document.body.style.background = '#FEFDFB'
    } else if (hora >= 12 && hora < 18) {
        img.src = "../hora/imgs/tarde.png"
        document.body.style.background = '#F2BB3D'
        
    } else {
        img.src = "../hora/imgs/noite.png"
        document.body.style.background = '#738B97'

    }


}

