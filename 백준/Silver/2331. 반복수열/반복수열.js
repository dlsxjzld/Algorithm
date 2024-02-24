const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)


const array = [n]
const cnt = new Map()

cnt.set(n, 1)

while (true) {
  const convertedN = array.at(-1).toString()
  const sumOfN = convertedN
    .split("")
    .map((val) => Number(val) ** m)
    .reduce((prev, cur) => prev + cur, 0)
  array.push(sumOfN)

  if (!cnt.has(sumOfN)) {
    cnt.set(sumOfN, 1)
  } else {
    const cntOfN = cnt.get(sumOfN)
    if (cntOfN <= 2) {
      cnt.set(sumOfN, cntOfN + 1)
    } else {
      break
    }
  }
}
let answer = 0
for (let [key,value] of cnt.entries()){
  if(value <=1) {
    answer+=1
  }
}
console.log(answer)