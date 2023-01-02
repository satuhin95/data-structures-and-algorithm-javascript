// function createRange(n1,n2){
// let rangeArr=[];
// for (let i = n1; i <= n2; i++) {
//     rangeArr.push(i)
    
// }
// return rangeArr;
// }
// console.log(createRange(10,20))


// function createRange(n1,n2){
//     let rangeArr=[];
//     function helper(helper1,helper2=10){
//         rangeArr.push(helper1)
//         if(helper1===helper2) {
//             return helper2;
//         }
//          helper(helper1 + 1,helper2)
//     }
//     helper(n1,n2)
//     return rangeArr;
    
// }
//     console.log(createRange(10,20))




function createRange(num1, num2=20, rangeArr=[]){
    rangeArr = rangeArr.concat(num1)
    if(num1 === num2) return rangeArr;
    return createRange(num1+ 1,num2, rangeArr)
    
}
    console.log(createRange(10,20))