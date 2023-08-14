const nome:string[] = ["Ana","Carlos", "Débora", "Lucas"];
for(let i=0; i<nome.length;i++){
    console;console.log((nome [i]));
}

nome.forEach(function(nome){
    console.log(nome);
});

nome.forEach(nome => console.log(nome));

const nros = [3,2,4,5];
const dobro = [];
for (let i = 0; i<nros.length; i++){
    dobro[i] = nros[i]*2;
}

console.log(dobro);

const triplo = nros.map(function(nro){
    return nro*3;
});
console.log(triplo);

let s = 0;
for (let i=0; i<nros.length; i++){
    s = s+nros[i];
}
console.log("Somatório: ", s);

/*s= nros.reduce(function(soma,nro){
    return soma + nros;
});
console.log()*/