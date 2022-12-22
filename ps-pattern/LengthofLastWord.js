 let s = "Hello World   "
function lengthOfLastWord(s) {
    let str = s.trim().split(' ')
    // let res = 0;
    // if(str[str.length -1].length != 0){
    //   res =  str[str.length -1].length
    // }else{
    //     res = str[str.length -2].length
    // }


    return str[str.length -1].length
}

console.log(lengthOfLastWord(s))