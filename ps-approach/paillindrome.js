
// paillindrom 

// function pailndrome(str){
//     // const rep = /[\W]/g
//     // const normalize = str.toLowerCase().replace(rep,'');
//     // const revStr = normalize.split('').reverse().join('')


//     // return revStr === normalize;
   
// }


// console.log(pailndrome('race car'));


var isPalindrome = function(x) {
    let num = x;
    let convetStr = x.toString();
    let newNum ;
    for(let item of convetStr){
        newNum = item + newNum;
    }
    let num2 = parseInt(newNum)
    return num2 === num;
};
console.log(isPalindrome(121))