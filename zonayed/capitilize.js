// method 1 
function capitilize(str){
    let words = [];
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ')
}
console.log(capitilize('comilla victoria govt college'))