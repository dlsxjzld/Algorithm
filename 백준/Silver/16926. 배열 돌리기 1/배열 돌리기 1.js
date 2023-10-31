
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [n, m, r] = input[0].split(" ").map((v) => Number(v));
input.splice(0, 1);
const array = input.map((v) => v.split(" ").map((num) => Number(num)));

// console.log(array);
let x = 0;
let y = 0;
let cnt = Math.floor(Math.min(n, m) / 2);

for (let ridx = 0; ridx < r; ridx++) {
    for (let cidx = 0; cidx < cnt; cidx++) {
        x = cidx;
        y = cidx;
        let prevValue = array[x][y];
        // 좌
        for (let idx = cidx + 1; idx < n - cidx; idx++) {
            x = idx;
            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }
        // 하
        for (let idx = cidx + 1; idx < m - cidx; idx++) {
            y = idx;
            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }
        // 우
        for (let idx = cidx + 1; idx < n - cidx; idx++) {
            x = n - idx - 1;
            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }
        // 상
        for (let idx = cidx + 1; idx < m - cidx; idx++) {
            y = m - idx - 1;
            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }
    }
}

// console.log(array);
const answer = array
    .map((v) => v.map((num) => num.toString()).join(" "))
    .join("\n");

console.log(answer);
