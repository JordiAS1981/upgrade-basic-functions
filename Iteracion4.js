const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
    if (numbers.length ===0) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log('El promedio es ' + average(numbers));