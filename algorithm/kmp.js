
function buildPrefixTable(s){
    const table =[0];
    let i =1;
    let j =0;
    while (i <s.length) {
        if (s[i] === s[j]) {
            j++;
            table[i] = j;
            i++
        }else if(j>0){
            j= table[j-1];
        }else{
            table[i] = 0
            i++
        }
    }
    return table
}
function strStr(string,subString){
    if(subString ==='') return 0;
    const preFeixTable = buildPrefixTable(subString);
    let i= 0
    let j= 0
    while (i < string.length && j < subString.length) {
        if (string[i]===subString[j]) {
            i++;
            j++;
        }else if(j > 0){
            j = preFeixTable[j - 1]
        }else{
            i++
        }
    }
    // return preFeixTable
    return j === subString.length ? i - j : -1
}
 let string = "sadbutsad", subString = "sad"
console.log(strStr(string ,subString))
// console.log(buildPrefixTable(subString))