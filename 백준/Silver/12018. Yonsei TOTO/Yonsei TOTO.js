const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [n, m] = input[0].split(" ").map(Number)
const costs = []
for (let i = 0; i < n; i += 1) {
  const [p, l] = input[i * 2 + 1].split(" ").map(Number)
  const miles = input[i * 2 + 2].split(" ").map(Number)
  miles.sort((a, b) => b - a)

  if (p >= l) {
    costs.push(miles[l - 1])
  } else {
    costs.push(1)
  }
}

costs.sort((a,b)=>a-b)

let cnt = 0
for(let cost of costs){
  if(m >=cost){
    m-=cost
    cnt+=1
  }else{
    break
  }
}
console.log(cnt)