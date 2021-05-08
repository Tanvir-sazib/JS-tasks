//Calculate Factorial of a number using for loop

function factorial(number) {
    let factorialTotal = 1;
    for (let i = 1; i <= number; i++) {
        factorialTotal = factorialTotal * i;
    }
    return factorialTotal;
}

console.log(factorial(4));