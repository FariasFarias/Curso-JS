var idade = 22
console.log(`Vocé tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 67) {
        console.log('Voto opcional!!')
} else {
       console.log("Voto obrigatório") 
}