
function countPrimes(n) {
    // system 1 
    // if(n === 0 || n ===1) return 0;
    // let count = 0;
    // for (let i = 2; i < n; i++) {
    //     let prime = true
    //     for (let j = 2; j < i; j++) {
    //         if (i % j === 0) {
    //             prime = false
    //             break;
    //         } 
    //     }
    //     if (prime && i > 1) {
    //         count ++
    //     }
        
    // }
    // return count;

    // system 2 
    if(n === 0 || n ===1) return 0;
    let count = 0;
    let primes = [];
    let result = [];
    for (let i = 0; i < n; i++) {
        primes[i] = true
       
    }
    primes[0] = false
    primes[1] = false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = 2; i * j <= n; j++) {
            primes[i * j] = false
        }
    
}
    for (let k = 0; k < primes.length; k++) {
        if (primes[k]) {
            // result.push(k)
            count++
        }  
    }

    return count;

};
// countPrimes(10)
console.log(countPrimes(3))