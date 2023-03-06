function repChar(str){
    let charMap = {};
    for (let char of str) {
        if(charMap[char]){
            return true;
        }else{
            charMap[char] = 1
        }
    }
    return false
}
console.log(repChar('Dhak'))