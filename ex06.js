const readline = require("readline-sync")

let objetivo = 40
let horasEstudadas = rediline.questionflot('informe quantas horas estudadas:')
let diferenca = horasEstudadas - objetivo

console.log("====== Resultado ======")
if (horasEstudadas >= objetivo) {
    console.log (" você conseguiu estudar")
    console.log(`você estudou mais que o esperado! ${diferenca} horas a mais.` )
}else{
    console.log(`você não conseguiu seu hub" faltaram ${diferenca} passos`)
}
