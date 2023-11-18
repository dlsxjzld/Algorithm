const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let T = input.slice(0, 1);

for (let testCase = 0; testCase < T; testCase += 1) {
    const p = input[testCase * 3 + 1].split("");

    const arr = input[testCase * 3 + 3].slice(1, -1).split(",");
    if (arr[0] === "") arr.shift();

    let errorFlag = false;
    let isReverse = false;

    for (let idx = 0; idx < p.length; idx += 1) {
        const action = p[idx];
        if (action === "R") {
            isReverse = !isReverse;
        } else if (action === "D") {
            if (arr.length === 0) {
                errorFlag = true;
                break;
            }
            if (isReverse) {
                arr.pop();
            } else {
                arr.shift();
            }
        }
    }
    console.log(
        errorFlag
            ? "error"
            : isReverse
            ? ('['+arr.map(Number).reverse().join(',')+']').trim()
            : ('['+arr.map(Number).join(',')+']').trim()
    );
}
