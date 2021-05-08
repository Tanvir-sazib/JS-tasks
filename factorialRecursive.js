// Calculate Factorial in a Recursive function
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
let result = factorial(6);
console.log(result);