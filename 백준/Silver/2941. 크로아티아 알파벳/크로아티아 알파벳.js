const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const word = input[0].split("")
let index = 0
let answer = 0

while (index < word.length) {
  if (word[index] === "c") {
    if (word[index + 1] === "=") {
      index += 2
    } else if (word[index + 1] === "-") {
      index += 2
    } else {
      index += 1
    }
    answer += 1
  } else if (word[index] === "d") {
    if (word[index + 1] === "z" && word[index + 2] === "=") {
      index += 3
    } else if (word[index + 1] === "-") {
      index += 2
    } else {
      index += 1
    }
    answer += 1
  } else if (word[index] === "l") {
    if (word[index + 1] === "j") {
      index += 2
    } else {
      index += 1
    }
    answer += 1
  } else if (word[index] === "n") {
    if (word[index + 1] === "j") {
      index += 2
    } else {
      index += 1
    }
    answer += 1
  } else if (word[index] === "s") {
    if (word[index + 1] === "=") {
      index += 2
    } else {
      index += 1
    }
    answer += 1
  } else if (word[index] === "z") {
    if (word[index + 1] === "=") {
      index += 2
    } else {
      index += 1
    }
    answer += 1
  } else {
    index += 1
    answer += 1
  }
}

console.log(answer)

// 한 글자씩 순회
// 이 글자가 크로아티아 단어로 시작한다면
// 분기문에서 확인하고
// 이 글자가 크로아티아 단어로 시작하지 않는다면
// 그냥 한글자씩 answer 더하고 index도 더하기
