//EX 001

const formatar = (entrada: string):string =>`<div>${entrada}</div>`; 

console.log(formatar("ana"));
console.log(formatar("12"));

// EX 002

const nomes = ["Ana","Pedro","Lucas","Maria"];

const cada = nomes.forEach((nomes)=>console.log(`<div>${nomes}</div>`))