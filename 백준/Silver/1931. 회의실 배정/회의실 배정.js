const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
const targets = input.slice(1).map((row)=>row.split(' ').map(Number))

targets.sort((a,b)=> {
    if(a[1] === b[1]){
        return a[0]-b[0]
    }
    return a[1]-b[1]
})

let answer = 0
let end = -1

for(const [a,b] of targets){

    if(a >= end){
        answer +=1
        end = b
    }
}

console.log(answer)