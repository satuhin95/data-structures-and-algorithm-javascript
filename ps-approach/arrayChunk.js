// array chunk 


// function chunk(arr,size){
//     const chunked = [];
//     if(arr.length <= size) return arr;
//     for (let elm of arr) {
//         const last = chunked[chunked.length - 1]
//         if(last && last.length < size){
//             last.push(elm)
//         }else{
//             chunked.push([elm])
//         }
//     }
//     return chunked;
    
// }


function chunk(arr,size){
    const chunked = [];
    let index = 0;
    while (index < arr.length) {
       const temp =  arr.slice(index, index + size)
       chunked.push(temp)
        index += size
    }
    return chunked;
    
}

console.log(chunk([1,2,3,4,5,6,7,8],3))