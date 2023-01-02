

// reverse integer 
const isSigned32bitInteger = (integer) => {
    return (integer > Math.pow(2, 31) * -1) && (integer < Math.pow(2,31) - 1);
};

function reverseInt(num){
    let result= 0;
    let revNum = num.toString().split('').reverse().join('');
    if(revNum.endsWith('-')){
        revNum = '-' + revNum.slice(0, revNum.length - 1 )
    }

    result= parseInt(revNum);
    return isSigned32bitInteger(result) ? result : 0;

}

console.log(reverseInt(-60))
console.log(reverseInt(159))