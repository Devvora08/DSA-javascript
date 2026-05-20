// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6

function wealth(matrix) {
    let maxW = -100;

    for(let i = 0; i < matrix.length; i++) {
        let current = 0;
        for(let j = 0; j < matrix[i].length; j++) {
            current += matrix[i][j];
        }
        maxW = Math.max(maxW, current);
    }   

    return maxW;
}

let matrix = [[1,2,3, 20],[3,2,101]];
console.log(wealth(matrix));