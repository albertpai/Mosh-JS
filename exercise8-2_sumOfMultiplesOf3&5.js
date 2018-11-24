// Return the sum of all the multiples of 3 and 5 between 0 and 10.
// Use Array.from and higher-order functions.

console.log(listMultiples(10));

function listMultiples(limit) {
    let arr = Array.from(Array(limit + 1), (_, i) => i);
    let sum = arr
        .filter((elm) => elm % 3 === 0 || elm % 5 === 0)      
        .reduce((acc, cur) => acc + cur, 0)

    return sum;
}