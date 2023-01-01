
function pyramid(n){
    let midpoint = Math.floor((2 * n- 1) / 2);
    for (let row = 0; row < n; row++) {
        let step = ''
        for (let column = 0; column < 2 * n -1; column++) {
        if (midpoint- row <= column &&  midpoint + row >= column) {
            step += '#'
        }else{
            step+= "-"
        }
            
        }
        
        console.log(step)
    }
}
pyramid(5)