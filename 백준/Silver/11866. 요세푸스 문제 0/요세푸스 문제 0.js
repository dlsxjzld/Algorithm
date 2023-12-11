const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);
const array = Array.from({ length: n }, (v, i) => i+1);
const result = []

while(array.length>0){
  for(let i=0;i<k-1;i++){
    array.push(array.shift())
  }
  result.push(array.shift())
}

console.log(`<${result.join(', ')}>`)