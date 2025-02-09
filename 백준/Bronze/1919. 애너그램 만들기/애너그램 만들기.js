const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')

let A = input[0]
let B = input[1]

for(let a of A){
    if(B.includes(a)){
        A = A.replace(a,'')
        B = B.replace(a,'')
    }
}
console.log(A.length + B.length)