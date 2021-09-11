function contar(){
    let entrada = document.getElementsByClassName('entradanum')
    //entrada[0] é início
    //entrada[1] é Fim
    //entrada[2] é Passo

    let res = document.getElementById('res')
    
    if(entrada[0].value.length == 0 || entrada[1].value.length == 0 || entrada[2].value.length == 0){
        alert('Insira os dados corretamente para fazer a contagem!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(entrada[0].value)
        let f = Number(entrada[1].value)
        let p = Number(entrada[2].value)

        //se p for zero, então será um
        if (p <= 0){
            alert('O passo não pode ser zero, considerando o passo començado do 1!')
            p = 1
            entrada[2].value = p
        }
        
        // contagem crescente
        if(i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449} `
            }

        // contagem decrescente
        } else {
            for (var c = i; f <= c; c -= p){
                res.innerHTML += ` ${c} \u{1f448} `
            }
        }
    }
}



// limpando valores
function limpar(){
    let entrada = document.getElementsByClassName('entradanum')
    //entrada[0] é início
    //entrada[1] é Fim
    //entrada[2] é Passo
    let res = document.getElementById('res')
    

    // limpar valores das caixa de texto
    if (entrada[0].value.length >= 1 || entrada[1].value.length >= 1 || entrada[2].value.length >=1) {
       entrada[0].value = ''
       entrada[1].value = ''
       entrada[2].value = ''
       res.innerHTML = 'Contagem aqui: '
    }
}