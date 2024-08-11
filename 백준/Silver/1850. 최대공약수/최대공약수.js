const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [a,b] = input[0].split(' ').map(BigInt)

const getGcd =(x,y)=>{
    if(y === 0n) return x
    else return getGcd(y,x%y)
}

const gcd = a>b ? getGcd(a,b) : getGcd(b,a)
console.log('1'.repeat(Number(gcd.toString())))
