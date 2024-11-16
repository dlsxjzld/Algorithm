const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const price = input[0].split(' ').map(Number)
const times = input.slice(1).map(row=>row.split(' ').map(Number))
const visited = Array.from({length:101},()=>0)

for(let [s,e] of times){
    for(let i=s;i<e;i++){
        visited[i] +=1
    }
}
let answer =0

for(let visit of visited){

    if(visit != 0){
        answer += price[visit-1] * visit
    }
}
console.log(answer)