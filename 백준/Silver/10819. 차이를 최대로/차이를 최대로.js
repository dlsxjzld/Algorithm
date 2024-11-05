const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const A = input[1].split(" ").map(Number)

const getPermutations = (array, targetNumber) => {
  if (targetNumber === 1) {
    return array.map((val) => [val])
  }
  const result = []
  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]

    const permutation = getPermutations(rest, targetNumber - 1)
    const target = permutation.map((val) => [fixed, ...val])
    result.push(...target)
  })
  return result
}

const permutations = getPermutations(A, N)
let MAX = Number.MIN_SAFE_INTEGER

for (let array of permutations) {
  let sum = 0
  for (let i = 0; i < N - 1; i++) {
    sum += Math.abs(array[i] - array[i + 1])
  }
  MAX = Math.max(MAX, sum)
}
console.log(MAX)