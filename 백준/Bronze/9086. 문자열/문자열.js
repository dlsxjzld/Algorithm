const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const n = Number(input[0])

for(let i=1;i<n+1;i+=1){
    const str = input[i].split('')
    console.log(str[0]+str.at(-1))
}