// let s = "-4193 with words"
let s = " with words 4193"
// let s = "4193 with words"
var myAtoi = function(s) {
    let normalize = s.replace(/[^\d\d:\d\d$]/g,'');
    // let normalize = s.replace(/[^0-9.-]+/g,'');
    // let normalize = s.replace(/\D||[-]/g,'');
    return normalize
};

console.log(myAtoi(s))