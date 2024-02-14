const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


  const [n,m] = input[0].split(' ').map(Number)
  const reversePlan = input.slice(1,1+m).map(row=>row.split(' ').map(Number))
  const buckets = Array.from({length:n+1},(val,idx)=>idx)
  
  for(let [i,j] of reversePlan){
    const newPart = buckets.slice(i,j+1).reverse()

    buckets.splice(i,j+1-i,...newPart)

    
  }
  console.log(buckets.slice(1,1+n).join(' '))
