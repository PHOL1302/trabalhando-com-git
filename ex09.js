const readline = require("readline-sync")

let fret = 100
let valor = readline.questionFloat('qual é o valor da compra: ')
let  diferenca = (fret - valor)
console.log("===== nota fiscal ====")

if(valor > fret){
    console.log("parabéns pobrinho vc ganhou o fret!!! ")
}else {
    console.log(`você não ganhou fret seu pobre!!! você precisa de:${diferenca} reais a mais de compra `)
}
