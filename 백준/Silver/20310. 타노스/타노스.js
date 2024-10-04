const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 0 과 1의 개수는 모두 짝수
// 절반의 0과 절반의 1을 제거하여 새로운 문자열 S`만들기
// S`로 가능한 문자열 중 사전순으로 가장 빠른 것
// 뒤에서 앞으로 <- 0지우기
// 앞에서 뒤로 갈 때 -> 1지우기

const s = input[0].split("")
let zero = parseInt(s.filter((val) => val == "0").length/2,10)
let one = parseInt(s.filter((val) => val == "1").length/2,10)


while (true) {
  for (let left = 0; left < s.length; left++) {
    if (s[left] === "1") {
      s[left] = "x"
      one -= 1
      if (one === 0) {
        break
      }
    }
  }
  for (let right = s.length - 1; right >= 0; right--) {
    if (s[right] === "0") {
      s[right] = "x"
      zero -= 1
      if (zero === 0) {
        break
      }
    }
  }

  if (one === 0 && zero === 0) break
}

const answer = s.filter((val)=>val !=='x').join('')
console.log(answer)
