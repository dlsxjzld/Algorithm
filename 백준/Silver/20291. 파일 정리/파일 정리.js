const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const answer = new Map()

for (let i = 1; i < 1 + n; i++) {
  const extension = input[i].split(".")[1]
  if(answer.has(extension)){
    answer.set(extension,answer.get(extension)+1)
  }else{
    answer.set(extension,1)
  }

}


console.log(Array.from(answer)
  .sort().map(row => row.join(' ')).join('\n'))
