
// adding sum from an array 

function sum(arr){
    // system 1
    // return arr.reduce((total , n) => total = total + n,0);
    

    // system 2 
    let total = 0;
    for (let n of arr) {
        total +=n;
    }
    return total;
}
console.log(sum([10,20,30,50,60]))