// method 1 
// function charMap(str){
//     let charMaps = {};
//     for (const char of str) {
//         if (charMaps[char]) {
//             charMaps[char]++
//         }else{

//             charMaps[char] = 1;
//         }
//     }
//     return charMaps
// }
// console.log(charMap('Comilla'))


// method 2 
function charMap(str){
    let charMaps = {};
    for (const char of str) {
         charMaps[char] = (charMaps[char] || 0) + 1
    }
    return charMaps
}
console.log(charMap('Comilla'))