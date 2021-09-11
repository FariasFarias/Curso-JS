let valores = [8, 1, 7, 4 , 2, 9]

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let num = 8
let pos = valores.indexOf(num)
console.log(`O valor ${num} está na posição ${pos}`)
/*
for (let pos = 0; pos < valores.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/