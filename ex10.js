const readline = require("readline-sync")

let maxPagina =  300
let paginasLidas = readline.questionFloat('quantas paginas foram lidas: ')
let percentual = (paginasLidas/maxPagina) * 100

console.log(" --B-------I------B----L-------I-------O-------T----E------C------A--")
console.log(`O usuario leu ${percentual}% do livro`)