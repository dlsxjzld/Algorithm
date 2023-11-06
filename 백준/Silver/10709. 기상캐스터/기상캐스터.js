const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [h, w] = input[0].split(" ").map(Number);
input.splice(0, 1);

const graph = input.map((row) => row.split(""));
const result = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => -1)
);

graph.forEach((row, ridx) =>
    row.forEach((value, cidx) => {
        if (value === "c") {
            result[ridx][cidx] = 0;
        } else if (value === ".") {
            if (cidx - 1 >= 0 && result[ridx][cidx - 1] !== -1) {
                result[ridx][cidx] = result[ridx][cidx - 1] + 1;
            }
        }
    })
);

console.log(result.map((row) => row.join(" ")).join('\n'));
