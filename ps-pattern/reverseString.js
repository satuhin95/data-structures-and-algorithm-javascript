

function reverseString(s) {
    // system 1 
    // var arr = [];
    // for(let i = s.length - 1 ; i>=0; i--){
    //     arr.push(s[i]);
    // }
    // return arr;

    // system 2 
    // return s.reverse();

    // system 3 

    for (let i = 0; i < s.length /2 ; i++) {
            let temp = s[i] 
            s[i] = s[s.length - 1 - i]
            s[s.length - 1 - i] = temp
        
        }
        return s;
    

};

console.log(reverseString(["h","e","l","l","o"]))