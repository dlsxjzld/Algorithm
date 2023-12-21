const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1, 1 + n).map((row) => row.split(''));


const answer = []

// 2가지 경우 모두 해야함

// 다시 칠해야하는 정사각형의 개수의 최솟값

// 8*8 크기로 자르기 때문에 행은 n-7, 열은 m-7까지만 하면 됨
for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    // 시작점이 흰색인 경우
    let white = 0;

    // 시작점이 검은색인 경우
    let black = 0;

    for (let row = i; row < i + 8; row++) {
      for (let col = j; col < j + 8; col++) {
        if ((row + col) % 2 === 0) {
          // 시작점과 같은 색이어야 함
          // 시작점이 흰색인 경우 -> 현재 위치가 검은색이면 흰색으로 바꿔야함
          if (board[row][col] !== 'W') {
            white += 1;
          }
          // 시작점이 검은색인 경우 -> 현재 위치가 흰색이면 검은색으로 바꿔야함
          if (board[row][col] !== 'B') {
            black += 1;
          }
        } else {
          // 시작점과 다른 색이어야 함
          // 시작점이 흰색인 경우 -> 현재 위치가 흰색이면 검은색으로 바꿔야 함
          if (board[row][col] !== 'B') {
            white += 1;
          }
          // 시작점이 검은색인 경우 -> 현재 위치가 검은색이면 흰색으로 바꿔야 함
          if (board[row][col] !== 'W') {
            black += 1;
          }
        }
      }
    }
    answer.push(Math.min(black,white))

  }
}
console.log(Math.min(...answer))
