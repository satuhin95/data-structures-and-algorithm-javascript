// function fibonacci(n){
//     if(n===0) return 0
//     const result= [0,1]
//     for (let i = 2; i <= n; i++) {
//         result.push(result[i- 1] + result[i - 2])
        
//     }
//     return result[result.length - 1]
// }
// console.log(fibonacci(10))

function fibonacci(n){
    if(n===0) return 0
    if(n <= 2) return 1;
    return fibonacci(n-1) + fibonacci(n -2)
}
console.log(fibonacci(10))