const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [col, row] = input[0].split(" ").map(Number)
const count = Number(input[1])
const lines = input.slice(2).map((val) => val.split(" ").map(Number)).sort((a,b)=>a[1]-b[1])


let prevRow = 0
const filteredRow = [...lines.filter((val)=>val[0] === 0).map(val=>val[1]),row]


const rows = []
const filteredCol = [...lines.filter((val)=>val[0] === 1).map(val=>val[1]),(col)]
const cols = []

for(let r of filteredRow){
  rows.push(r-prevRow)
  prevRow = r
}
let prevCol = 0
for(let c of filteredCol){
  cols.push(c-prevCol)
  prevCol = c
}
const answer = []
for(let c of cols){
for(let r of rows){
  answer.push(r*c)
}
}
console.log(Math.max(...answer))