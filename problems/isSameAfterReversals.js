function isSameAfterReversals(num) {
    let str = num;
    let normalize = num.toString();
    let reverse = '' 
    let reverse2 = ''
    for (let i = 0; i < normalize.length; i++) {
        reverse = normalize[i] + reverse
        
    }
    let result = parseInt(reverse)
    let result2 = result.toString();
    for (let i = 0; i < result2.length; i++) {
        reverse2 = result2[i] + reverse2
        
    }
    // return  result
    return  parseInt(reverse2) === str
};
let num = 1800

console.log(isSameAfterReversals(num))