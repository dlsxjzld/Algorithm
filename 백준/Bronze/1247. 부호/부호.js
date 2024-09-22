const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const answer = []
let index = 0
while(input.length>index){
    const n = Number(input[index++])
    let add = 0n
    for(let i=index;i<index+n;i++){
        const num = BigInt(input[i])
        add+=num
    }
    index +=n
    answer.push(add > 0n ? '+' : add<0n ? '-' : '0')
}
console.log(answer.join('\n'))