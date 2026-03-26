let notas = [0, 1, 5, 8, 9, 8, 18];
let soma = 0;
let menor = notas[1];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < menor) {
        menor = notas[i];
    }
}
console.log(menor)

