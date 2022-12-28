// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(counterWords) {
    const counter = [];
    for (const name of counterWords) {
        if (counter[name]) {
            counter[name]++;
        }
        else {
            counter[name] = 1;
        } 
    }
    return counter;
}
console.log(repeatCounter(counterWords));