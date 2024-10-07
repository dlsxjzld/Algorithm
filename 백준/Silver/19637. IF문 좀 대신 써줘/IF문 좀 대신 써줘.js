const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 10000 이하 WEAK
// 10,000 초과 100,000 이하 NORMAL
// 100,000 초과 1,000,000 이하 STRONG

// 칭호의 개수 N 1<= N <= 10^5
// 칭호를 출력해야 하는 캐릭터들의 개수 M 1<= M <= 10^5

const [n, m] = input[0].split(" ").map(Number)

const medals = input.slice(1, 1 + n).map((row) => {
  const [name, value] = row.split(" ")
  return [Number(value), name]
})
const values = input.slice(1 + n).map(Number)
const answer = []

const binarySearch = (s, e, array, target) => {
  let answer = null

  while (s <= e) {
    let mid = Math.floor((s + e) / 2)

    if (array[mid][0] >= target) {
      answer = array[mid][1]
      e = mid - 1
    } else if (array[mid][0] < target) {
      s = mid + 1
    }
  }
  return answer
}

for (let target of values) {
  let s = 0
  let e = n - 1

  answer.push(binarySearch(s, e, medals, target))
}

console.log(answer.join("\n"))
