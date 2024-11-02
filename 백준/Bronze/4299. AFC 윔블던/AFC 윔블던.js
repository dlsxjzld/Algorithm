const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
const s = parseInt(input[0]);
const m = parseInt(input[1]);

if (s + m < 0 || s - m < 0 || (s + m) % 2 !== 0) {
    console.log(-1);
} else {
    const a = (s + m) / 2;
    const b = s - a;
    console.log(Math.max(a, b), Math.min(a, b));
}