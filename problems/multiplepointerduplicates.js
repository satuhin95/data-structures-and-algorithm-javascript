// multiple pointe rduplicates 
function multiplepointerduplicates(arr){
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === arr[i + 1]) {
            return true
        }
        i++
    }
    return false;
}

// let data = [1,1,1,1,1,2]
// console.log(multiplepointerduplicates(data))
// let data = [-2,-1,1,2]
// console.log(multiplepointerduplicates(data))
let data = [-2,-1,1,2,3,3]
console.log(multiplepointerduplicates(data))