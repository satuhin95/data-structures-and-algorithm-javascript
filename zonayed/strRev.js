// method 1  
// function strRev(str){
//     let myStr = str.split('').reverse().join('');
//     return myStr;
// }

// console.log(strRev("Comilla"))


// // method 2  
// function strRev(str){
//    let reverse = '';
//    for (let i of str) {
//     reverse = i + reverse
//    }
//     return reverse;
// }

// console.log(strRev("Comilla"))

// method 3  
function strRev(str){
   return str.split('').reduce((rev, item)=> rev = item + rev ,'')
    
 }
 
 console.log(strRev("Purplepatch"))