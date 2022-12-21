// is same 

function isSame(arr1, arr2){
    // let check = false;
    // for (let index = 0; index < arr1.length; index++) {
    //     if(arr2.includes(arr1[index])){
    //         check = true;
    //         return check
    //     }
        
    // }
    // return check

    // if(arr1.length !== arr2.length) return false;
    // for (let i = 0; i < arr1.length; i++) {
    //     let index = arr2.indexOf(arr1[i]);
    //     if (index === -1) {
    //         return false
    //     } else {
    //         arr2.splice(index, 1)
    //     }
        
    // }
    // return true;


    if(arr1.length !== arr2.length) return false;
    let hashTable1={}
    let hashTable2={}


    for (let num of arr1) {
        hashTable1[num] = (hashTable1[num] || 0) + 1
    }
    for (let num of arr2) {
        hashTable2[num] = (hashTable2[num] || 0) + 1
    }
    for (let key in hashTable1) {
       if(!key in hashTable2 || hashTable1[key] !== hashTable2[key]){
            return false
       }
    }

    return true


}
console.log(isSame([1,2,3,7,5],[1,2,3,7,5]))