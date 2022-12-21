// sub array 

function subArrySum(arr, k){
    let hashmap = {
        0:1
    };
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if ([sum - k] in hashmap) {
            result += hashmap[sum - k]
        }
        hashmap[sum] = (hashmap[sum] || 0) + 1;
        
    }
    return result
}

console.log(subArrySum([1,2,3],3))