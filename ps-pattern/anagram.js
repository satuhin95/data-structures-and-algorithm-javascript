// anagram 
function anagram(s, t){

    const normalizeStr1 = s.replace(/[^\w]/g, '').toLowerCase()
    const normalizeStr2 = t.replace(/[^\w]/g, '').toLowerCase()
    const freq1= {}
    const freq2= {}
    
    for (let elm of normalizeStr1) {
        freq1[elm] =(freq1[elm] || 0) + 1;
    }
    for (let elm of normalizeStr2) {
        freq2[elm] =(freq2[elm] || 0) + 1;
    }
    if(Object.keys(freq1).length !== Object.keys(freq2).length){
        return false;
    } 
    for (let key in freq1) {
        if (freq1[key] !== freq2[key] || !key in freq2) {
            return false;
        }
    }
    return true;
}


console.log(anagram('rail! safety','fairy  tales'));