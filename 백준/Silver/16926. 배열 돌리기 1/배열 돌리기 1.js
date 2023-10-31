const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [n, m, r] = input[0].split(" ").map((v) => Number(v));
input.splice(0, 1);
const array = input.map((v) => v.split(" ").map(Number));

let x = 0;
let y = 0;
let cnt = Math.floor(Math.min(n, m) / 2);

for (let ridx = 0; ridx < r; ridx++) {
    for (let cidx = 0; cidx < cnt; cidx++) {
        // cidx == depth
        x = cidx;
        y = cidx;
        let prevValue = array[x][y]; // [0][0] , [1][1] ....

        // 좌 ( y === 0 으로 고정 ) x 증가
        for (let idx = cidx + 1; idx < n - cidx; idx++) {
            x = idx;

            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }

        // 하 ( x === n-1 으로 고정 ) y 증가
        for (let idx = cidx + 1; idx < m - cidx; idx++) {
            y = idx;

            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }

        // 우 ( y === m-1 으로 고정 ) x 감소
        for (let idx = cidx + 1; idx < n - cidx; idx++) {
            x = n - idx - 1;

            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }

        // 상 ( x === 0 으로 고정 ) y 감소
        for (let idx = cidx + 1; idx < m - cidx; idx++) {
            y = m - idx - 1;

            let temp = array[x][y];
            array[x][y] = prevValue;
            prevValue = temp;
        }
    }
}

const answer = array
    .map((v) => v.map((num) => num.toString()).join(" "))
    .join("\n");

console.log(answer);
