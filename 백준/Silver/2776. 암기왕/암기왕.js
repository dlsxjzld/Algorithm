const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const T = +input.shift();

for (let i = 0; i < T; i++) {
  input.shift();
  const first = input.shift().split(' ').map(Number).sort((a, b) => a - b);
  input.shift();
  const second = input.shift().split(' ').map(Number)
  let answer = [];
  second.forEach(target => {
    let min = 0;
    let max = first.length - 1;
    let mid;
    let success = false;
    while (min <= max) {
      mid = Math.floor((min + max) / 2);
      if (first[mid] == target) {
        success = true;
        break;
      } else if (first[mid] < target) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    const res = success ? 1 : 0;
    answer.push(res)
  })

  console.log(answer.join('\n'))
}