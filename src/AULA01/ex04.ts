//EX 004

function item(entrada: string): string {
  return `\t<li>${entrada}</li>\n`;
}
function listar(elementos: string[]): string {
  const lista2 = elementos.reduce(
    (acumulador, elemento) => acumulador + item(elemento),
    ""
  );
  return `<ul>\n${lista2}</ul>\n`;
}
const frutas = ["Manga", "Laranja", "Maça", "Uva"];
const resultado = listar(frutas);
//console.log(resultado); TIRAR COMENTÁRIO P/ USAR A FUNÇÃO

export default listar