const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let changed = []

const isPrime = (num) => {
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const bfs = (num, target) => {
  const convertedNum = num.toString().split("")
  const queue = [[...convertedNum]]
  const visited = Array.from({ length: 10000 }, () => false)
  visited[num] = true
  changed[num] = 0

  while (queue.length > 0) {
    const x = queue.shift()
    if (x.join("") === target) {
      return
    }
    for (let i = 0; i < 4; i++) {
      const nx = [...x]
      for (let j = 0; j < 10; j++) {
        nx[i] = j
        const joinedNx = nx.join("")
        const numJoinedNx = Number(joinedNx)
        if (
          numJoinedNx < 1000 ||
          numJoinedNx > 9999 ||
          visited[numJoinedNx] ||
          prime.indexOf(joinedNx) === -1
        )
          continue

        visited[numJoinedNx] = true
        changed[numJoinedNx] = changed[Number(x.join(""))] + 1
        queue.push([...nx])
      }
    }
  }
}

const prime = Array.from({ length: 9000 }, (v, i) => i + 1000)
  .filter((val) => isPrime(val))
  .map(String)

const T = Number(input[0])
for (let tc = 1; tc < T + 1; tc += 1) {
  const [start, end] = input[tc].split(" ").map(Number)

  changed = Array(10000).fill(-1)

  bfs(start, end)

  if (changed[end] === -1) {
    console.log("Impossible")
  } else {
    console.log(changed[end])
  }
}
