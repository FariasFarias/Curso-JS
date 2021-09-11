 var agora = new Date()
 var hora = agora.getHours()
 console.log(`agora são exatamente ${hora} horas.`)

 //dia é de 6 à 12 horas
 if (hora > 6 && hora < 12){
     console.log("BOM DIA!")
     // tarde é de 12 à 18 horas
 } else if(hora > 12 && hora < 18){
     console.log("BOA TARDE")
     //noite é maior que 18 horas
 } else if (hora >= 18 ) {
     console.log('BOA NOITE')
     // horas restantes até 24
 } else {
     console.log("BOA MADRUGADA")
 } 