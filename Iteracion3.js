const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log('La suma total es ' + sumAll(numbers));