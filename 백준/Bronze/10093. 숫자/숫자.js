const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const [a,b] = input[0].split(' ').map(Number)
  
  const cnt = a===b ? 0 : Math.abs(b-a) -1
  console.log(cnt)
  
  const start = Math.min(a,b)
  const answer = Array.from({length:cnt},(_,index)=>index+start+1)
    console.log(answer.join(' '))