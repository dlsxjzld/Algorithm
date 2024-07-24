const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const N = Number(input[0]);
const A = input.slice(1).map(Number);
const sortedA = A.slice().sort((a, b) => a-b);
const P = Array(N).fill(-1);
A.forEach((v, i) => {
    P[i] = sortedA.findIndex((elem, idx) => {
        if (elem === v && !(P.includes(idx))) return true;
    });
});
console.log(P.join(" "));