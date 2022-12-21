let strs = ["eat","tea","tan","ate","nat","bat"]
function groupAnagram(strs){
    let hashMap ={};
    for (let elm of strs) {
        let sorted = elm.split('').sort().join('');
        if (hashMap[sorted]) {
            hashMap[sorted].push(elm)
        }else{
            hashMap[sorted] = [elm]
        }
    }
    return Object.values(hashMap);
}
console.log(groupAnagram(strs))