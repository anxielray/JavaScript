function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the number of Fibonacci terms: ", n => {
    console.log("Fibonacci sequence:", fibonacci(parseInt(n)));
    readline.close();
});

