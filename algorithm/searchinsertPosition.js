

function searchInsert(arr,search){
    let start = 0;
    let end = arr.length -1 ;
    while (start<= end) {
        let mid = Math.floor((start + end ) /2);

        if (arr[mid] === search) {
            return mid;
        } else if(arr[mid]<search){
            start = mid + 1 
        }else{
            end = mid - 1
        }
    }

    return start
}

console.log(searchInsert([1,3,4,5],2))