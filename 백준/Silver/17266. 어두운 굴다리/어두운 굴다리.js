const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const position = input[2].split(" ").map(Number)

// 굴다리 0 ~ n
// 가로등은 모두 높이가 같아야 함
// 가로등의 높이가 h라면 왼쪽으로 h 오른쪽으로 h만큼 비춘다

// 1<= 높이 <= n

// position 에서 -높이 +높이

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