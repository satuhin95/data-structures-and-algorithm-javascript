 function plusOne(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
        if(digits[i] !== 9){
            digits[i]++;
        }
        else if(i === 0){
            digits[i] = 0;
            digits.unshift(1);
        }
        else{
            digits[i] = 0;
            continue;
        }
        return digits;
    }
}
console.log(plusOne(123))