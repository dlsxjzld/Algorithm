const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
let cnt = 0
let answer = -1

const merge = (arr, p, q, r) => {
  let i = p
  let j = q + 1
  let t = 1
  const tmp = []
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      tmp[t++] = arr[i++]
      cnt++
      if (cnt === k) {
        answer = arr[i - 1]
      }
    } else {
      tmp[t++] = arr[j++]
      cnt++
      if (cnt === k) {
        answer = arr[j - 1]
      }
    }
  }
  while (i <= q) {
    tmp[t++] = arr[i++]
    cnt++
    if (cnt === k) {
      answer = arr[i - 1]
    }
  }
  while (j <= r) {
    tmp[t++] = arr[j++]
    cnt++
    if (cnt === k) {
      answer = arr[j - 1]
    }
  }
  i = p
  t = 1
  while (i <= r) {
    arr[i++] = tmp[t++]
  }
}

const merge_sort = (arr, p, r) => {
  if (p < r) {
    const mid = Math.floor((p + r) / 2)
    merge_sort(arr, p, mid)
    merge_sort(arr, mid + 1, r)
    merge(arr, p, mid, r)
  }
}
merge_sort(arr, 0, n - 1)
console.log(answer)
