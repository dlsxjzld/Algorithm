const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N,L] = input[0].split(' ').map(Number)

let found = false;

for (let i = L; i <= 100; i++) {
    let x = N - (i * (i + 1) / 2);
    
    if (x % i === 0) {
        x = Math.floor(x / i);
        if (x >= -1) {
            let result = [];
            for (let j = 1; j <= i; j++) {
                result.push(x + j);
            }
            console.log(result.join(' '));
            found = true;
            break;
        }
    }
}

if (!found) {
    console.log(-1);
}