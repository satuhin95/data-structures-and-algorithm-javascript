function numberRev(num){
    let revNum = num.toString().split('').reverse().join('');
    return parseInt(revNum) * Math.sign(num);
}

console.log(numberRev(-312))