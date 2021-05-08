
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'Not a prime number';
        }
        else {
            return 'Prime number';
        }
    }
}
console.log(isPrime(13));