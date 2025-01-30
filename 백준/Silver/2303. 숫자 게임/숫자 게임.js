const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

let m = 1;
let MAX = 0;
let answer = 0;
const cntNums = input.map((v) => {
  let nums = v.split(" ");
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      for (let k = j + 1; k < 5; k++) {
        tmp = String(nums[i] * 1 + nums[j] * 1 + nums[k] * 1);
        if (MAX <= Number(tmp.slice(-1))) {
          answer = m;
          MAX = Number(tmp.slice(-1));
        }
      }
    }
  }
  m += 1;
});

console.log(answer);