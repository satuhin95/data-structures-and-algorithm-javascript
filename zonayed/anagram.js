// method 1 
// function charMap(str){
//     let strMap = {}
//     for (let char of str.replace(/[^\w]/g,'')) {
//         strMap[char] = (strMap[char] || 0 ) + 1
//     }
//    return  strMap
// }
//  function anagram(str1, str2){
//     let charMap1 = charMap(str1)
//     let charMap2 = charMap(str2)
//     if(Object.keys(charMap1).length !== Object.keys(charMap2).length) return false;
//     for (let char in charMap1) {
//         if (charMap1[char] !== charMap2[char]) {
//             return false
//         }
//     }
//     return true
//  }
// console.log(anagram("rail safety",'fairy tales'))

// method 2 
function charMap(str){
   return  str.replace(/[^\w]/g,'').toLowerCase().split("").sort().join("")
}
 function anagram(str1, str2){
    let charMap1 = charMap(str1)
    let charMap2 = charMap(str2)
  
    return charMap1 === charMap2
 }
console.log(anagram("rail safety",'fairy tales'))

