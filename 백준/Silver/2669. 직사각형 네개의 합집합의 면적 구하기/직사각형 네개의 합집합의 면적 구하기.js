const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")


const numbers = input.slice(0).map((row) => row.split(" ").map(Number))
const MAX_LEN = 101;

const arr = Array.from({length : MAX_LEN}, ()=>Array.from({length : MAX_LEN}, ()=>false))
let cnt = 0;

for(let [x1, y1, x2, y2] of numbers){
  for(let x = x1; x < x2; x++){
  for(let y = y1; y < y2; y++){
    if(arr[x][y]) continue;
    arr[x][y] = true;
    cnt++;
  }
  }
}

console.log(cnt);