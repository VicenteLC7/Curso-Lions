let notas = [1, 5, 8, 9, 18, 20, 21, 24, 25, 30];
let p = 0
let somar = 0
for (let i = 0; i < notas.length; i++) {
    if ((notas[i] % 2) === 0) {
        p++;
        somar = somar+notas[i]
    }
}
console.log(somar)

