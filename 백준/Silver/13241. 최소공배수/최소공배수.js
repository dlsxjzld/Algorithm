const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ")
const getGcd = (a,b)=>{
    if(b === 0 ) return a
    else return getGcd(b,a%b)
}

const gcd = getGcd(A,B)
console.log((A *B)/gcd)