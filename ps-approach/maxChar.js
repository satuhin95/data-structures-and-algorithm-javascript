
// find max char 
function maxChar(str){
    let hashMap ={};
    let max =0;
    let maxChar = '';
    for (let char of str) {
        hashMap[char] = (hashMap[char] || 0) + 1;
    }
    for (let char in hashMap) {
        if (hashMap[char] > max) {
            max= hashMap[char]
            maxChar = char
            
        }
    }

    return maxChar ;
}

console.log(maxChar('saifuddin'))