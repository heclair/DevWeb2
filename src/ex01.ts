//EX 001

const formatar = (entrada: string):string =>`<div>${entrada}</div>`; 

console.log(formatar("ana"));
console.log(formatar("12"));

// EX 002

const nomes = ["Ana","Pedro","Lucas","Maria"];

const cada = nomes.forEach((nomes)=>console.log(`<div>${nomes}</div>`))

//EX 003

const carros = ["Gol","Corsa","Uno","Fiesta"];
const motos = ["CG", "XRE", "Biz"];
const veiculos = carros.forEach((carros)=>console.log(`<div>${carros}</div>`));
const motocicleta = motos.forEach((motos)=>console.log(`<div>${motos}</div>`));