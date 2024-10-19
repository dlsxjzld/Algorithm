const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


const getPermutation = (origin, targetCnt) => {
  if (targetCnt == 1) {
    return origin.map((val) => [val])
  }
  const result = []
  origin.forEach((fixed, i) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)]
    const permutation = getPermutation(
      rest,
      targetCnt-1,
    )
    result.push(...permutation.map((val)=> [fixed,...val]))
  })
  return result
}

const [N, M] = input[0].split(" ").map(Number)

const numbers = Array.from({ length: N }, (_, i) => i + 1)
const result = getPermutation(numbers, M)
console.log(result.map((row)=>row.join(' ')).join('\n'))
