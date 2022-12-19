
function  fizzBuzz(num){
    let result ='';
    for (let index = 1; index <= num; index++) {
        if (index % 3 ===0 && index % 5 ===0) {
            result+=' FizzBuzz \n';
        } else if(index % 3 ===0 ){
            result += ' Fizz \n'
        }else if(index % 5 ===0){
            result += ' Buzz \n'
        }else{
            result +=  index + '\n'
        }
        
    }
    return result
}
console.log(fizzBuzz(21));

