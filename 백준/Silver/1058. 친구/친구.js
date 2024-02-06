const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


const n = Number(input[0])
const graph = input.slice(1,1+n).map(row=>row.split(''))
const distance = Array.from({length:n},()=>Array.from({length:n},()=>0))

for(let k=0;k<n;k++){

  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(i!==j && (graph[i][j] === 'Y' || (graph[i][k] === 'Y' && graph[k][j] === 'Y'))){
        
        distance[i][j] = 1

      }
    }
  }
}
let answer = 0
distance.forEach((row)=> answer = Math.max(answer,row.reduce((cnt,element)=>cnt + (element),0)))
console.log(answer)