function countToZero(n){
    if(n===0) return;
    console.log(n)
    countToZero(--n)
}
countToZero(10)