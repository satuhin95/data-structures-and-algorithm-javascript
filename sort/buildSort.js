

// bubble sort 
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let shaw = false;
        for (let j = 0; j < arr.length -i-1; j++) {
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp
            }
            shaw = true;
        }
        if(!shaw) break;
        
    }
    return arr;
}
let arr = [4,51,10,8,5,4,-10]
console.log(bubbleSort(arr))