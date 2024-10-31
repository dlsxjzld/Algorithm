const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const positions = [
  0,
  ...input.slice(1).map((val) => Number(val.split(" ")[1])),
  0,
]

let answer = 0

let y = [0]

for (let i=1;i<positions.length;i++) {
  const cur = positions[i]
  
  while(y.at(-1) > cur){
    y.pop()
    answer +=1
  }

  if(y.at(-1) < cur){
    y.push(cur)
  }
}

console.log(answer)
