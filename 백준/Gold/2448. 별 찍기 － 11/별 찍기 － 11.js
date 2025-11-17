const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0])
// N은 항상 3×2k 수이다. (3, 6, 12, 24, 48, ...)

// 3
// 삼각형 1개 + 빈 역삼각형 0개

// 6
// 삼각형 3 *2+ 빈 역삼각형 1개

// 12
// 삼각형 6 * 1개
// 삼각형 6 * 2개 + 빈 역삼각형 1개

const makeTriangle = (n) => {
  if (n === 3) {
    return ['  *  ', ' * * ', '*****'].join('\n');
  } else {
    const triangle = makeTriangle(n / 2).split('\n');
    const empty = ' '.repeat(n / 2);
    const first = triangle.map((row) => empty + row + empty);
    const second = triangle.map((row) => row + ' ' + row);
    const res = [...first, ...second].join('\n');
    return res;
  }
};

console.log(makeTriangle(n));
