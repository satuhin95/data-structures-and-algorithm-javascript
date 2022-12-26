function isPalindrome(s) {
    let str2='';
    let normalize = s.toLowerCase();
    let str = normalize.replace(/[\W_]/g,'')
    for (let i = 0; i < str.length; i++) {
        str2 = str[i] + str2;
        
    }
    if(str === str2){
        return true
    }else{
        return false
    }

};
// let s = "A man, a plan, a canal: Panama"
// console.log(isPalindrome(s))
let s = "ab_a"
console.log(isPalindrome(s))