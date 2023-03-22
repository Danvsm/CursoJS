function tabuada() {
    
    let num = document.getElementById('num')
    let  valor = 0
    var res = document.getElementById('res')
    res.innerHTML = ''
    
    if (num.value.length == 0) {
        window.alert('Digite um numero!')
    } else { 
        let numb = Number(num.value)
        while (valor < 10) {
            valor++
            res.innerHTML += `${numb} x ${valor} = ${numb * valor} <br>`
        }
    }
}