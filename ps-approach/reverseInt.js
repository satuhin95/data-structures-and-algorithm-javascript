

// reverse integer 

function reverseInt(num){
    let revNum = num.toString().split('').reverse().join('');
    if(revNum.endsWith('-')){
        revNum = '-' + revNum.slice(0, revNum.length - 1 )
    }

    return parseInt(revNum);
}

console.log(reverseInt(-60))
console.log(reverseInt(159))