const input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(input[0])
const A = input[1].split(' ').map(Number)
const [b,c] = input[2].split(' ').map(Number)
let num = n
for(let a of A){
    let start = a - b
    if(start>0){
        num += Math.ceil(start/c)
    }
}
console.log(num)