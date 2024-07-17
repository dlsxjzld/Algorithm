const fs = require("fs");

const input = Number(
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `4`
);

let answer = " ".repeat(input * 2 - 1).split("");
let start = Math.floor((input * 2 - 1) / 2);
let end = start;

for (let i = 1; i <= input; i++) {
  answer[start] = "*";
  answer[end] = "*";

  start--;
  end++;

  if (i === input) {
    answer.fill("*");
  }

  console.log(answer.join("").trimEnd());

  answer.fill(" ");
}