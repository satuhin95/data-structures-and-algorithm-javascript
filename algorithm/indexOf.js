
// index of 
function indexOfFun(arr,element){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===element){
            return  i;
        }   
    }
    return -1;
}

console.log(indexOfFun([1,2,4,5,7,8],10))