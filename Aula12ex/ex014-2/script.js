var agora = new Date()
var hora = agora.getHours()

var horadia = document.querySelector("#horadia")
var img = document.querySelector("#img")

//boa madrugada
if (hora <= 5) {
    horadia.innerHTML = `Agora são ${hora} horas`
    img.src = "fotomadrugada.png"
    document.body.style.background = "#fd8902"
} 
//boa manha
else if(hora <= 12) {
    horadia.innerHTML = `Agora são ${hora} horas` 
    img.src = "fotomanha.png"
    document.body.style.background = "#fef1f2"
} 
//boa tarde
else if ( hora <= 18 ){
    horadia.innerHTML = `Agora são ${hora} horas`
    img.src = "fototarde.png"
    document.body.style.background = "#c0bec1"
} 
// boa noite
else if ( hora <= 23){

    horadia.innerHTML = `Agora são ${hora} horas`
    img.src = "fotonoite.png"
    document.body.style.background = "#4f3e62"
}