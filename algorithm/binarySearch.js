function binarySearch(arr, element){
  let start = 0 , end = arr.length - 1;
  while (start<= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) {
        return true
    } else if(arr[mid] < element){
        start = mid + 1;
    }else{
        end = mid - 1
    }
  }
  return false;
}

console.log(binarySearch([1,2,3,4,5,6,7],10))