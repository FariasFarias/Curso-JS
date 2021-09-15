//sintaxe da função
/*function nome (parametro){
    return parametro * parametro
}

// chamada para o método
console.log(nome(5))
*/

/*Se uma função muda o valor de um argumento, esta 
mudança não é refletida globalmente ou na chamada 
da função. Contudo, referência de objetos são valores 
também, e eles são especiais: se a função muda as 
propriedades do objeto referenciado, estas mudanças 
são visíveis fora da função, como é mostrado no 
exemplo a seguir:*/

//funçãos podem alterar objetos no escopo global

//declarei minha função
function minhaFuncao(objeto){
    objeto.marca = "Toyota"
}

// Declaro um a variável "meucarro"
//crie e inicializa um novo Objeto
//atribua referência para "meucarro"

var meucarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
}

//mostra "Honde"
console.log(`A marca do carro atual é "${meucarro.marca}"`)

//Passe a referência do objeto para a função
minhaFuncao(meucarro)

/*Exibe "Toyota" como valor para a propriedade "marca"
do objeto, mudado pela função*/

console.log(`Meu carro agora é "${meucarro.marca}"`)