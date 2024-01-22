const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 341
const MAX = 5000000
const n = Number(input[0])
const check = Array.from({ length: MAX }, () => false)

// n보다 크거나 같고, 소수이면서 팰린드롬인 수 중에서, 가장 작은 수

function isPrime(number) {
  const maxIdx = Math.floor(Math.sqrt(number)) + 1

  for (let i = 2; i < maxIdx; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

function isPalindrom(number) {
  const convertedNumber = number.toString()
  const len = convertedNumber.length
  if (len <= 1) {
    return true
  }
  if(len % 2 === 0){
      
  const left = convertedNumber.slice(0, len / 2)
  const right = convertedNumber.slice(len / 2, len + 1)
  const convertedRight = Array.from(right).reverse().join('')
  if (left === convertedRight) {
      
    return true
  } else {
    return false
  }
  }
  if(len % 2 === 1){
      const left = convertedNumber.slice(0, len / 2+1)
  const right = convertedNumber.slice(len / 2, len + 1)
  const convertedRight = Array.from(right).reverse().join('')
  if (left === convertedRight) {
      
    return true
  } else {
    return false
  }
  }
      
}

for (let start = 2; start <= MAX; start++) {
  check[start] = isPrime(start)
}

for (let start = n; start <= MAX; start++) {
  if (check[start] && isPalindrom(start)) {
    console.log(start)
    break
  }
}
