const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let initialValue = input[0];
let target = input[1];
let result = 0;

while (true) {
    if (initialValue === target) {
        break;
    } else if (Number(target) < Number(initialValue)) { // 목표값이 더 크면
        return console.log(-1);
    }

    if (target % 2 === 0) { // 2로 나눈 나머지가 0이면 
        target = String(target / 2);
    } else if (target % 2 === 1) { // 2로 나눈 나머지가 1이면
        if (target[target.length - 1] === "1") { // 마지막 자리가 1이면
            target = target.slice(0, target.length - 1);
        } else { // 마지막 자리가 1이 아니면
            return console.log(-1);
        }
    }

    result++;
}

console.log(result + 1);