const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)

const end = n * 60 * 60 + 59 * 60 + 59 // 초단위

const convertTime = (second, k) => {
  const [h, m, s] = [
    Math.floor(second / 3600),
    Math.floor((second % 3600) / 60),
    Math.floor(second % 3600) % 60,
  ].map((val) => {
    const returnVal = val.toString()
    if (returnVal.length === 1) {
      return "0" + returnVal
    } else {
      return returnVal
    }
  })

  if (h.includes(k) || m.includes(k) || s.includes(k)) {
    return 1
  } else {
    return 0
  }
}
let cnt = 0
for (let i = 0; i <= end; i++) {
  cnt += convertTime(i, k)
}

console.log(cnt)
