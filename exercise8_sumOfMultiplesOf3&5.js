// Return the sum of all the multiples of 3 and 5 between 0 and 10.

console.log(sumMultiples(30));

function sumMultiples(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum = sum + i;

    return sum;
}