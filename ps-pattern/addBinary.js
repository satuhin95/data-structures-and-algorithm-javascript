let a = "1010"
let b = "1011"
function addBinary(a, b) {
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    // return dec.toString(2);
    return dec
};

console.log(addBinary(a,b))