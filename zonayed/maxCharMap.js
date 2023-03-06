// method 2 
function charMap(str){
    let charMaps = {};
    for (const char of str) {
         charMaps[char] = (charMaps[char] || 0) + 1
    }
    return charMaps
}

function maxChar(str){
    let map = charMap(str);
    let max = 0;
    let character;
    for (let char in map) {
        if (map[char] > max) {
           max = map[char]
          character = char;
        }
    }
    return character
}
console.log(maxChar('Comiaaaa'))