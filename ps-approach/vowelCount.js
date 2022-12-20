

// vowel count 

function vowelsCount(str){
    let count = 0;
    const collectedVowels = ['a','e','i','o','u'];
    for (let char of str.toLowerCase()) {
        if(collectedVowels.includes(char)){
            count ++
        }

    }
    return count;
}

console.log(vowelsCount('whya'))