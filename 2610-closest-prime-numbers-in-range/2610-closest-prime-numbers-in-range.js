// optimized apporach
var closestPrimes = function (left, right) {
    const isPrime = Array(right + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= right; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= right; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = left; i <= right; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    let closestPair = [-1, -1];
    let minDiff = Infinity;
    for (let i = 0; i < primes.length - 1; i++) {
        let diff = primes[i + 1] - primes[i];
        if (diff < minDiff) {
            minDiff = diff;
            closestPair = [primes[i], primes[i + 1]];
        }
    }

    return closestPair;
};