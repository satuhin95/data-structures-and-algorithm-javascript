
function spiralOrder(matrix) {
    // const  result =[]
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         result.push(matrix[i][j])
            
    //     }
        
    // }
    // return result

    const result =[];
 
    let startColumn = 0;
    let endColumn = matrix.length -1;
    let startRow = 0;
    let endRow = matrix.length -1;
    let counter = 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn ; i++) {
            result.push(i) = counter;
            counter ++
        }
        startRow ++;
        // right column 
        for (let i = startRow; i <= endRow; i++) {
            result.push(matrix[i]) = counter;
            counter ++
        }
        endColumn --;

        // bottom row 
        for (let i = endColumn; i >= startColumn; i--) {
            result.push(matrix[i]) = counter;
            counter++
            
        }
        endRow --;
        // start column 
        for (let i = endRow; i >=startRow; i--) {
            result.push(matrix[i]) = counter;
            counter++
            
        }
        startColumn++
    }
    return result
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix))