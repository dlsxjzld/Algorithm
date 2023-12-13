const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = Array.from({ length: n }, (_, idx) => idx + 1);
const result = [];

while (people.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    people.push(people.shift());
  }
  result.push(people.shift());
}

console.log(`<${result.join(', ')}>`);
