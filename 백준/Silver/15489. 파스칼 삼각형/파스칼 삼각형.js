const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c, w] = input[0].split(" ").map(Number)

const dp = Array.from({ length: r + w - 1 }, (v, i) =>
  Array.from({ length: i + 1 }, ()=>0),
)

for (let i = 0; i < r + w - 1; i += 1) {
  dp[i][0] = 1
  dp[i][dp[i].length - 1] = 1
}

for(let i=2;i<r+w-1;i+=1){
    for(let j=1;j<i;j+=1){
        dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
    }
}

let check = 1
let answer =0
for(let i=r-1;i<r+w-1;i+=1){
    for(let j=c-1;j<c-1+check;j+=1){
        answer +=dp[i][j]
    }
    check+=1
}
console.log(answer)