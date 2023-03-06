function step(n){
    for (let i = 1; i <=n; i++) {
        let strir = '';
        for (let j = 1; j <= n; j++) {
            if (j<=i) {
                strir +="#"
            }else{
                strir += "-"
            }
            
        }
        console.log(strir)
        
    }
    
}
step(10)