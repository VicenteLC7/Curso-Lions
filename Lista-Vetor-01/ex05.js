let notas = [1, 5, 8, 9, 8, 18];
let soma = 0;
let maior = notas[0];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maior) {
        maior = notas[i];
    }
}
console.log(maior)

