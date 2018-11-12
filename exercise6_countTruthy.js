// Count the number of truthy values in an array.

const array = [1, 0, NaN, 'a', false, true, undefined, -3.14, Infinity, -Infinity];

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

console.log(countTruthy(array));