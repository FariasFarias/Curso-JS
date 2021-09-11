function gerar(){
    var num = document.getElementById('num')
    var tabu = document.getElementById('tabu')

    if (num.value.length == 0){
        window.alert('Por favor, insira um núumero')
    } else{
        var n = Number(num.value)
        var c = 1
        tabu.innerHTML = ''
        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabu.appendChild(item)
            c++
        }
    }
}