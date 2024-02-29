const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const board = input.slice(0).map(row=>row.split(' ').map(Number))
let max = 0 
let r =0
let c= 0
board.forEach((row,ridx)=>row.forEach((val,cidx)=>{if(max < val){
  r=ridx; c=cidx;
  max= val
}  }))

console.log(max)
console.log(r+1,c+1)