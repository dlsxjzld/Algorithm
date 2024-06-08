const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const skills = input[1].split(" ").map(Number)
const result = Array.from({ length: N }, (_, idx) => N - idx)

const target = []
const enqueue = []
const first = (num, arr) => {
  arr.push(num)
}

const second = (num, arr) => {
  const high = arr.pop()
  arr.push(num)
  arr.push(high)
}

const third = (num, arr) => {
  arr.push(num)
}

for (let idx = 0; idx < N; idx++) {
  const skill = skills[N - 1 - idx]
  const num = result[N - 1 - idx]

  switch (skill) {
    case 1: {
      first(num, target)
      break
    }
    case 2: {
      second(num, target)
      break
    }
    case 3: {
      third(num, enqueue)
      break
    }
  }
}

console.log(target.reverse().concat(enqueue).join(' '))


