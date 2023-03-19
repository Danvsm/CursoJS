function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]: Verifique os dados e tenta novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var body = document.querySelector('body')
        img.setAttribute('id', 'foto') 
            if (fsex[0].checked) {
                body.style.background = 'black'
                genero = 'Homem'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'imgs/kidM.png') 
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'imgs/teenM.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'imgs/homem.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'imgs/idoso.png')
                }
                    
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                body.style.background = 'pink'
                if ( idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'imgs/kidF.png')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'imgs/teenF.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'imgs/mulher.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'imgs/idosa.png')
                }
        }
        res.style.textAling = 'center'
        res.innerHTML = `<h4>Detectamos  ${genero} com ${idade} anos<h4>`
        res.appendChild(img)
        
    }
    
}
