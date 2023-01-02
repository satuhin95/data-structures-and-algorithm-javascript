function reverseWords(s) {
    let normalize = s.split(" ")
    let string = ''
    for (const item of normalize) {
        string= (string + item.split("").reverse().join('') || '') + ' '
    }
    let result = string.trim()
    return result
};
let s = "Let's take LeetCode contest"
console.log(reverseWords(s))