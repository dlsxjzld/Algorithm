const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

let start = 0
let end = 0
let ssum = 0

let result = 0

while (end <=n && start<=end) {
  if(ssum === n){
      // 합 === n
      result++
      end++
      ssum+=end
  }else if(ssum > n){
      // 합 > n
      ssum -= start
      start++
  }else{
      // 합 < n
      end++
      ssum += end
  }
}
console.log(result)
