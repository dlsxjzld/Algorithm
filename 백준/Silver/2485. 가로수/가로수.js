const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>+v);

const N = input.shift();
const trees = input.sort((a,b)=>a-b);
let max = 0;
let interval = [];
let answer = 0;
for(let i = 0; i<trees.length-1; i++){
  const dist = trees[i+1]-trees[i];
  interval.push(dist)
  if(max<dist) max = dist;
}

function gcd(a,b){
  let temp;
  while(b!=0){
    temp = a%b;
    a = b;
    b = temp;
  }
  return a;
}

let GCD = gcd(interval[0],interval[1]);

for(let i = 2; i<interval.length; i++){
  GCD = gcd(GCD,interval[i])
}

interval.forEach(v=>{
  if(v>GCD) answer+=(v/GCD)-1
})

console.log(answer)