const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


const [n, s, r] = input[0].split(" ").map(Number)
const broken = input[1].split(" ").map(Number)
const more = input[2].split(" ").map(Number)

const boats = Array.from({ length: n }, () => 1)

for (let br of broken) {
  boats[br - 1] -= 1
}

for (let mo of more) {
  boats[mo - 1] += 1
}


for (let i = 0; i < n; i += 1) {
  if (i === 0) {
    if (boats[i] >= 2 && boats[i + 1] === 0) {
      boats[i + 1] = 1
      boats[i] -= 1
    }
  } else if (i === n - 1) {
    if (boats[i] >= 2 && boats[i - 1] === 0) {
      boats[i - 1] = 1
      boats[i] -= 1
    }
  } else {
    if (boats[i] >= 2) {
      if (boats[i - 1] === 0) {
        boats[i - 1] = 1
        boats[i] -= 1
      }
    }
    if (boats[i] >= 2) {
      if (boats[i + 1] === 0) {
        boats[i + 1] = 1
        boats[i] -= 1
      }
    }
  }
}

console.log(boats.filter((val) => val < 1).length)