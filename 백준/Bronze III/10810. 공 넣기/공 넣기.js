const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  const [n,m] = input[0].split(' ').map(Number)
  const balls = input.slice(1,1+m).map(row=>row.split(' ').map(Number))
  const buckets = Array.from({length:n+1},()=>0)

  balls.forEach(([i,j,k])=>{
    
    for(let start=i;start<j+1;start++){
      buckets[start] = k
    }
  })

  console.log(buckets.slice(1,1+n).join(' '))