const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let k = Number(input[0])
// k <= 10^6
// k 개를 만들기 위해선
// 1. 2^n 이 k보다 커야함
// 2^n 개는 2로 나눠짐

// x = 2^n
// x 가 k보다 작거나 같으면 그만 쪼개기
// y = k-x
// y 가 될 수 있도록 쪼갠 거에서 찾기

// 1 2 4 8 16 32
// 1, 1 1 , 2 2, 4 4, 8 8, 16 16

const getTarget = (k) => {
  let startIndex = 0

  while (true) {
    if (2 ** startIndex >= k) {
      break
    }
    startIndex += 1
  }
  return 2 ** startIndex
}
const myChocolate = getTarget(k)
let rest = myChocolate
let cnt = 0
if (myChocolate === k) {
  console.log(`${myChocolate} ${cnt}`)
  return
}

const array = Array.from({ length: 2 }, () => rest / 2)

cnt+=1
while (true) {
  const half = array.pop()
  if (half <= k) {
    k -= half
  } else {
    cnt += 1
    array.push(half / 2, half / 2)
  }
  if (k === 0) {
    break
  }
}

console.log(`${myChocolate} ${cnt}`)
