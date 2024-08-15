const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number);
const course = input[0].split(' ').map(Number)
const sum = course.reduce((r, v) => r + v, 0);
let min = Math.ceil(sum / M);
let max = sum
let mid;
let answer = Infinity
while (min <= max) {
  let updateMin = 0;
  mid = Math.floor((min + max) / 2);
  let temp = mid;
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (temp - course[i] >= 0) {
      temp -= course[i];
    } else {
      cnt++;
      temp = mid - course[i];
      if (temp < 0) {
        updateMin = course[i];
        break;
      }
    }
  }

  if (updateMin > 0) {
    min = updateMin;
    continue;
  }

  if (temp < mid) cnt++;

  if (cnt <= M) {
    if (answer > mid) {
      answer = mid
    }
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}

console.log(answer)