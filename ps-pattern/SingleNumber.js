function singleNumber(nums) {
    let hashMap ={};
    for (let elm of nums) {
        hashMap[elm] = (hashMap[elm] || 0) + 1
    }
    for (let key in hashMap) {
        if(hashMap[key] == 1){
            return key
        }
    }
    
    return false

}

console.log(singleNumber([4,1,2,1,2]))

