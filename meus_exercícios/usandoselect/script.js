var enterdata = document.querySelector("#enterdata")



function guardar(){
    if(enterdata.value.length == 0){
        alert('Primeiro, insira dados para guardar!')
    } else {
        var lista = document.querySelector("#lista")
        item = document.createElement('option')
        item.text = enterdata.value
        lista.appendChild(item)
    }
}