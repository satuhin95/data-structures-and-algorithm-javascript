
function countCharacter(inputStr){
    let hashMap ={};
    let myStr = inputStr.toLowerCase();
    for (let index = 0; index < myStr.length; index++) {

        // solving system 1
        // let char = myStr[index];
        // if(char ===' ') continue;

        // if(char in hashMap){
        //     hashMap[char] = hashMap[char] + 1;
        // }else{
        //     hashMap[char] = 1;
        // }

        // solving system 2
        // let char = myStr[index];
        // if(char ===' ') continue;
        //  char in hashMap ? hashMap[char] = hashMap[char] + 1 : hashMap[char] = 1;

        // solving system 3
        let char = myStr[index];
        if(char ===' ') continue;
        hashMap[char] =  (hashMap[char] || 0 ) + 1;
    }
    console.log(hashMap)
}

countCharacter('He llo');