const output = fizzBuzz(false);
function fizzBuzz(input) {
    let d3 = input % 3;
    let d5 = input % 5;
    if (typeof input !== 'number')
        return NaN;
    if (d3 === 0 && d5 === 0)
        return 'FizzBuzz';
    if (d3 === 0)
        return 'Fizz';
    if (d5 ===0)
        return 'Buzz';
    if (d3 !== 0 && d5 !== 0)
        return input;
}

console.log(30);