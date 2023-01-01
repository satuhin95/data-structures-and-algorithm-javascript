
//step pattern 

 function stepPattern(n){
    for (let row = 0; row < n; row++) {
            let step ='';
        for (let column = 0; column < n ; column++) {
            if(column <= row){
                step += '#'
            }
            
        }
        console.log(step)
        
    }
 }
stepPattern(3)