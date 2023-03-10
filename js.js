function contar (){
    let ini = window.document.querySelector('input#inicio')
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.querySelector('input#passo')
    let res = window.document.querySelector('div#res')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0 || passo == 0){
        res.innerHTML = 'Impossível contar!'
    } else{ 
        res.innerHTML = 'Contando: <br>'        
        
        if (p <= 0){
        window.alert('[ERRO] passo não pode ser 0! Utilizando PASSO 1 como parâmetro!')
        p = 1
        }if (i <= f) {
            for (let c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else {
            for (let c = i; c >= f; c-=p)
            res.innerHTML += `${c} \u{1f449}`
        }
        
       res.innerHTML += `\u{1f3c1}`
    }
     
}






