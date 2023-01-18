function marge(arr1, arr2){
    const results = [];
    let i = 0;
    let j = 0;
    while (i <arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i<arr1[i]){
        results.push(arr1[i])
            i++;
    }
    while(j<arr2[j]){
        results.push(arr2[j])
            j++;
    }
    return results
}
function margeSort(arr){
    let mid = Math.floor(arr.length / 2);
    if(arr.length <=1) return arr;
    let left = margeSort(arr.slice(0,mid))
    let right = margeSort(arr.slice(mid))
   return marge(left,right);
}
console.log(margeSort([4,1,5,10,8,9,6,20]))
