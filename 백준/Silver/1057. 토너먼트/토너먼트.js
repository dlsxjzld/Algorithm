const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 1번부터 n번
// 홀수명이면 마지막 번호는 다음 라운드로 자동 진출

let [n, kim, im] = input[0].split(" ").map(Number)
let cnt = 0 // 경기 횟수

while (n > 0) {
  n = Math.floor(n / 2)
  cnt += 1
  // 올림 해줘야 맞붙는 것 확인 가능
  kim = Math.ceil(kim / 2)
  im = Math.ceil(im / 2)
  if (kim === im) {
    console.log(cnt)
    break
  }
}
