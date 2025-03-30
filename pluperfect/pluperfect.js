function isPluperfect(n) {
    let sum = n.toString()
        .split('')
        .reduce((acc, digit) => acc + Math.pow(parseInt(digit), n.toString().length), 0);
    return sum === n;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number to check if it's pluperfect: ", num => {
    num = parseInt(num);
    console.log(`${num} is ${isPluperfect(num) ? 'a' : 'not a'} pluperfect number.`);
    readline.close();
});

