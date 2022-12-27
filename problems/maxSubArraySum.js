
function maxSubArraySum(arr,n){
    // system 1 
    // if(arr.length < n) return null;
    // let max = -Infinity;
    // for (let i = 0; i < arr.length - n + 1; i++) {
    //     let tempSum = 0;
    //     for (let j = 0; j < n; j++) {
    //         tempSum += arr[i + j]
            
    //     }
    //     max = Math.max(tempSum , max)
        
    // }
    // return max;

    // system 2 
    if(arr.length < n) return null;
    let max = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        max += arr[i]
        
    }
    tempSum = max;
    for (let j = n; j < arr.length; j++) {
        tempSum = tempSum - arr[j- n] + arr[j];
        max = Math.max(tempSum , max)
    }

    return max;



}

console.log(maxSubArraySum([1,2,5,2,8,1,5],2))