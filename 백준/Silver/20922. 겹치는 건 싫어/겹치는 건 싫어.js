const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)

const solution = (arr, n, k) => {
  let start = 0
  let end = 0
  let cnt = 0
  const check_obj = { [arr[start]]: 0 }
  let answer = 1
  

  while (start <= end && end <= arr.length - 1) {
    if (check_obj[arr[end]] == null) {
      check_obj[arr[end]] = 0
    }
    const check = check_obj[arr[end]] + 1

    if (check <= k) {
      check_obj[arr[end]] += 1
      end += 1
      cnt += 1
    } else {
      check_obj[arr[start]] -= 1
      start += 1
      cnt -= 1
    }
    answer = Math.max(answer, cnt)
  }

  return answer
}
console.log(solution(numbers, n, k))
