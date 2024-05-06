const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  let index = 1
  for(let row of input){
      
      const [l,p,v] = row.split(' ').map(Number)
      
      if(l == 0 && p == 0 && v == 0){
          break
      }
      const lastDays = v%p > l ? l : v%p
      console.log(`Case ${index++}: ${Math.floor(v/p) * l +lastDays}`)
  }