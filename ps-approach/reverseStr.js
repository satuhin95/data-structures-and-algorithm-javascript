
// reverse 

function strReverse(str){
    // system 1 
    // return str.split('').reverse().join('')



    // system 2
    // let myStr = '';
    // for (let index =  str.length -1; index >=0; index--) {
    //     myStr += str[index]
        
    // }
    // return myStr


     // system 3
     let myStr = '';
     for (let item of str) {
        myStr = item + myStr;
     }

     return myStr

}

console.log(strReverse('saifuddin'))