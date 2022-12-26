
// multiplepointersumzero 

function multiplepointersumzero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        if (sum > 0) {
            right--;
        }
        if (sum < 0) {
            left--;
        }
    }
    return undefined;
}
// let data =[-3,-2,-1,0,1,2,3];
// console.log(multiplepointersumzero(data))
// let data =[-2,0,2,3];
// console.log(multiplepointersumzero(data))
let data =[1,2,3];
console.log(multiplepointersumzero(data))