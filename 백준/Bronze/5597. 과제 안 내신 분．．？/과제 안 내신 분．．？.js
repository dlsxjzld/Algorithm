const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const check = new Set(Array.from({length:30},(val,idx)=>idx+1))

for(let i=0;i<30;i++){
    const x = Number(input[i])
    check.delete(x)
}

Array.from(check).sort((a,b)=>a-b).forEach((val)=>console.log(val))
