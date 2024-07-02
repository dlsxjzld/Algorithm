const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const binarySearch = (s, e, target) => {
  while (s <= e) {
    let mid = Math.floor((s + e) / 2)
    if (mid ** 2 < target) {
      s = mid + 1
    } else if (mid ** 2 > target) {
      e = mid - 1
    } else {
      return mid
    }
  }
  return e + 1
}

console.log(binarySearch(0, n, n))
