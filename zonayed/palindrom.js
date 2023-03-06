// // method 1 
// function palindrom(str){
//     let mystr = str
//     let newStr = str.split('').reverse().join('');
//     if( mystr === newStr){
//         return true
//     }
//     return false
// }
// console.log(palindrom('madam'))

// method 1 
function palindrom(str){
    let mystr = str.split('');
    for (let i = 0; i < mystr.length; i++) {
        if(mystr[i] !== mystr[mystr.length - 1 - i]){
            return false
        }
        
    }
   
    return true
}
console.log(palindrom('madam'))