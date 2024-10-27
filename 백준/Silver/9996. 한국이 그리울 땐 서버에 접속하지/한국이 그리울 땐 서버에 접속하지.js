const fs = require('fs');
const [n, pattern, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [head, tail] = pattern.split('*');


const answer = [];
arr.forEach(v => {
  const front = v.substring(0, head.length);
  const back = v.substring(v.length - tail.length);
  if (v.length < head.length + tail.length) {
    answer.push('NE')
  } else if (head == front && tail == back) {
    answer.push('DA')
  } else {
    answer.push('NE')
  }
})

console.log(answer.join('\n'))