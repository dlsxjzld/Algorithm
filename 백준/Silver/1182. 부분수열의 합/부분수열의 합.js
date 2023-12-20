const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, s] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

// 부분수열의 크기는 1부터 n까지 될 수 있다
// 순서는 상관 없으므로 조합
// (-7,-3) 과 (-3,-7) 은 같다

let answer = 0;

for (let i = 1; i < n + 1; i++) {
  // 부분수열의 크기

  for (let j = 0; j < n; j++) {
    dfs(array[j], 1, i, j + 1);
  }
}

function dfs(num, cnt, max_size, startIdx) {
  if (cnt === max_size) {
    if (num === s) {
      answer += 1;
    }
    return;
  }
  if (startIdx >= n) return;

  for (let idx = startIdx; idx < n; idx++) {
    dfs(num + array[idx], cnt + 1, max_size, idx + 1);
  }
}

console.log(answer);
