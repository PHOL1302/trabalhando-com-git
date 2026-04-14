const readline = require("readline-sync")

let idade = readline.questionFloat('informe sua Idade : ')

console.log('======= Passagem para o bailão =======')
if(idade >= 18){
    console.log("você vai cahpar o globo")
}else{
    console.log(" toma rumo seu desviado")
}
