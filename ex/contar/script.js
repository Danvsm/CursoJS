function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)
    
    if (inicio < fim) {
        
        do{
            res.innerHTML += ` ${inicio} 👉`
            inicio += passo
            
        }while (inicio < fim)
        res.innerHTML += ` ${fim}🏁`
    } else if (inicio > fim ){
        do {
            res.innerHTML += ` ${inicio} 👉`
            inicio -= passo
            if (inicio == fim) {
                res.innerHTML += ` ${fim}🏁`
            }
        } while (inicio > fim)

    } else if (inicio == 0 || fim  == 0 || passo == 0) {
        res.innerHTML = 'Impossivel de contar'
        
    }
}