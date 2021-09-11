// selecionado os elementos

//input: number
var numf = document.querySelector("#num1a100")

//input: select
var lista = document.querySelector("#lista")

//divres
var res = document.querySelector("#res")

//array de lista
var arraylista = []


//verificar se o número é entre 1 e 100 - TUDO OK, FUNCIONADO
function éNumero (n){
    if(n >=1 && n <= 100){
        return true
    } else {
        return false
    }

}

//verificar se o número está na arraylista
function naLista(n1, lis){
    if(lis.indexOf(n1) != -1){
        return true
    } else {
        return false
    }
}

//adicionar na lista e vetor
function add(n, lis){
    let item = document.createElement("option")
    item.text = `O valor ${n} foi adicionado`
    item.value = `${n}`
    lista.appendChild(item)
    lis.push(n)
}



//função do botão adicionar
function adicionar(){
   // converter numf para número
   let num = Number(numf.value)
   res.innerHTML = ''

   //verificação de valores
   if(éNumero(num) && !naLista(num, arraylista)){
       add(num, arraylista)
       

   } else {
       alert("Não é número de 1 a 100 ou não está na lista")
   }
   numf.value = ''
   numf.focus()
}



//finalizar tarefas e realizar cálculos
function finalizar(){
    if (arraylista.length == 0){
        alert("Não há dados. Adicione valores antes de finalizar!")
    } else {
        let total = arraylista.length
        let maior = arraylista[0]
        let menor = arraylista[0]
        let soma = 0
        let média = 0
        for (let pos in arraylista){
            soma += arraylista[pos]
            if (arraylista[pos] > maior){
                maior = arraylista[pos]
            }
            if(arraylista[pos] < menor){
                menor = arraylista[pos]
            }
        }
        média = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos <strong>${total} números cadastrados</strong> </p>`
        res.innerHTML += `<p> O maior número cadastrado foi ${maior}</p>.`
        res.innerHTML += `<p> O menor número informado foi ${menor}</p>.`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p> A média dos valores cadrastrados é ${média}</p>`

    }

    

}

