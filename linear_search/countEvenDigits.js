// count even number of digits till n (including n)

function countEven(n) {
    let counter = 0;
    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0) counter++;
    }   

    return counter;
}

console.log(countEven(1));