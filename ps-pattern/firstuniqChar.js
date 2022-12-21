// first uniq char 

function firstUniQueChar(s){
let = hashMap={};
for (let elm of s) {
    hashMap[elm] = (hashMap[elm] || 0) + 1;

}
for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]===1) {
        return i
    }
    
}
return -1;
}
console.log(firstUniQueChar('leetcode'))