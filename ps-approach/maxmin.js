
// find max number 
// let arr = [50,10,25,8,60,3]
// function max(num){
//     let max_number = num[0];
//     for (let i of num) {
//         if (i>max_number) {
//             max_number = i;
//         }
//     }
//     return max_number
// }
// console.log(max(arr))

// find min number 
let arr = [50,10,25,8,60,3]
function min(num){
    // system 1
    let min_number = num[0];
    for (let i of num) {
        if (i<min_number) {
            min_number = i;
        }
    }
    return min_number

   
}
console.log(min(arr))

// console.log(Math.min(...arr))
// console.log(Math.max(...arr))
