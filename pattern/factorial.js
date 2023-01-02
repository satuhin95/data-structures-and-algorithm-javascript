function clumsy(n) {
    if(n===0) return 1;
    return n * clumsy(n-1)
};

console.log(clumsy(5))