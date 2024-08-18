const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let now = '1'

for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(' ')
    if(a === now){
        now = b
    }
    else if(b === now){
        now = a
    }
}
console.log(now)