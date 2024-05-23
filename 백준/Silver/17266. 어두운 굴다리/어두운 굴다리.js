const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = +(input[0])
const m = +(input[1])
const position = input[2].split(" ").map(Number)

for (let h = 1; ; h++){
  if (position[0] - h > 0)
    continue;
  if (position[m - 1] + h < n)
    continue;

  let isHeightOkay = true;
  for (let i = 0; i < m; i++){
    let right = position[i] + h, leftNext = position[i + 1] - h;
    if (right < leftNext) {
      isHeightOkay = false;
      break;
    }
  }
  if (isHeightOkay) {
    console.log(h);
    break;
  }
}