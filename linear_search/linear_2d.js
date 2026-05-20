// implement linear search 2d way

function linear(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(target == matrix[i][j]) return [i,j];
        }
    }

    return -1;
}

let matrix = [[1,2,3], [4,5,6], [10,11,12]];
console.log(linear(matrix, 10));