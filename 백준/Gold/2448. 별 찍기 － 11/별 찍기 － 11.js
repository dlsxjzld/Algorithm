const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0])

const makeTriangle = (n) => {
  if (n === 3) {
    return ['  *  ', ' * * ', '*****'].join('\n');
  } else {
    const triangle = makeTriangle(n / 2).split('\n');
    const empty = ' '.repeat(n / 2);
    const first = triangle.map((row) => empty + row + empty);
    const second = triangle.map((row) => row + ' ' + row);
    return [...first, ...second].join('\n');
  }
};

console.log(makeTriangle(n));
