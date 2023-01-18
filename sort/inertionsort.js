
function insertionSort(arr){
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i -1; j>=0 && arr[j]> currentVal; j--) {
            arr[j + 1] = arr[j]
            
        }
        arr[j + 1] = currentVal
        
    }
    return arr
}

console.log(insertionSort([44,6,18,49,32,6,45,15,13,27]))