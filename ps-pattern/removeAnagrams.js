let  words = ["abba","baba","bbaa","cd","cd"];
let words2 = ["a","b","c","d","e"]
function removeAnagrams(words) {
    let hashMap ={};
    for (let elm of words) {
        let sorted = elm.split('').sort().join('');
        // hashMap[sorted] = (hashMap[sorted] || 0) + 1
        // hashMap[elm] = (hashMap[elm] || 0) + 1
        if(hashMap[elm]){
            hashMap[elm].push(elm)
        }else{
            hashMap[elm] = [elm]
        }
    }
    return hashMap
}
console.log(removeAnagrams(words))