const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(v => v.trim());

const player = input.slice(1,);

let head = {};
const answer = [];


player.forEach(v => {
  const firstAlpah = v[0];
  if (head.hasOwnProperty(firstAlpah)) {
    head[firstAlpah]++;
  } else {
    head[firstAlpah] = 1;
  }
})


for (let key in head) {
  const value = head[key]
  if (value >= 5) {
    answer.push(key)
  }
}

if (answer.length == 0) {
  console.log('PREDAJA')
} else {
  console.log(answer.sort().join(''))
}