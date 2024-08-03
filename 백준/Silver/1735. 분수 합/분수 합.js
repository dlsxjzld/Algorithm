const [moles, denoms] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [fM, fD] = moles.split(" ").map(BigInt);
let [sM, sD] = denoms.split(" ").map(BigInt);

let mole = fM * sD + sM * fD;
let denom = fD * sD;

const getGcd = (x,y)=>{
    if(y==0) return x
    else return getGcd(y, x % y)
}

const gcd = getGcd(mole,denom)
console.log(`${mole/gcd} ${denom/gcd}`)