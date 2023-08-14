//EX 004

function item(entrada: string): string {
  return `\t<li>${entrada}</li>\n`;
}
function listar(elementos: string[]): string {
  let soma = "";
  for (let i = 0; i < elementos.length; i++) {
    soma += item(elementos[i]);
  }
  return `<ul>\n${soma}</ul>\n`;
}
const frutas = ["Manga", "Laranja", "Maça", "Uva"];
const resultado = listar(frutas);
console.log(resultado);
