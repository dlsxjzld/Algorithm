const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


  const N = Number(input[0])
  const towers = input[1].split(' ').map(Number)
const check = [...towers]
  const heights = {}
  const start = towers.pop()
  const compare = [start]
  heights[start] = 0

  while(towers.length>0){
    heights[towers[towers.length-1]] = 0
    while(compare.length>0){
      if(compare.at(-1) <= towers.at(-1)){
          const cur = compare.pop()
          heights[cur] = towers.length
      }else{
          break
      }
    }
    compare.push(towers.pop())
  }

let char = []
for(let i=0;i<N;i++){
    char.push(heights[check[i]].toString())
}
console.log(char.join(' '))