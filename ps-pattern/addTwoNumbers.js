let l1 = [2,4,3];
let l2 = [5,6,4]
function addTwoNumbers(l1, l2) {
    let normalize1 = ''
    let normalize2 = ''
 
    let element = '';
    for (let i = l1.length -1; i >=0 ; i--) {
         normalize1 += l1[i];
        
    }
    for (let i = l2.length - 1; i >=0 ; i--) {
        normalize2 += l2[i];
        
    }
   let result = parseInt(normalize2) + parseInt(normalize1) + '';

    for (let i = result.length - 1; i >= 0; i--) {
         element += result[i] ;
        
    }


    return parseInt(element)
};

console.log(addTwoNumbers(l1, l2))