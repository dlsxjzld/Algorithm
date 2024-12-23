const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
let tc = Number(input.shift());

let paper = "";

function check(start, end) {
  if (start === end) return true;

  let mid = Math.floor((start + end) / 2);

  for (let i = start; i < mid; i++) {
    if (paper[i] === paper[end - i]) {
      return false;
    }
  }

  return check(start, mid - 1) && check(mid + 1, end);
}

for (let t = 0; t < tc; t++) {
  paper = input.shift().split("");

  if (check(0, paper.length - 1)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}