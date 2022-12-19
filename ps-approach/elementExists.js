

let arr1 =['a','b','c'];
let arr2 =['1','2','3','a'];

function isElementExists(arr1, arr2){
    // let check =false;
    // for (let element of arr1) {
    //     if(arr2.includes(element)){
    //         check= true;
    //         // break;
    //         return check
    //     }
    // }

    let check =false;
    const freqCounter = {};
    for (let elm of arr1) {
       freqCounter[elm] = true;
    }
    for (let elm of arr2) {
        if (elm in freqCounter) {
            check = true;
            return check;
        }
     }
     return check;
    

  
    
}
console.log(isElementExists(arr1,arr2));
