const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const board = input.slice(1, 1 + n).map((row) => row.split(''));
let answer = 0;

// 바뀐 보드의 사탕 갯수 확인하기
function check(board) {
  // 행 확인

  for (let x = 0; x < n; x++) {
    let tmp = 1;
    for (let y = 0; y < n - 1; y++) {
      if (board[x][y] === board[x][y + 1]) {
        tmp += 1;
        answer = Math.max(answer, tmp);
      } else {
        tmp = 1;
      }
    }
  }

  for (let y = 0; y < n; y++) {
    let tmp = 1;
    for (let x = 0; x < n - 1; x++) {
      if (board[x][y] === board[x + 1][y]) {
        tmp += 1;
        answer = Math.max(answer, tmp);
      } else {
        tmp = 1;
      }
    }
  }
}

const dx = [0, 1]; // 동 남
const dy = [1, 0]; // 동 남

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    for (let idx = 0; idx < 2; idx++) {
      const nx = x + dx[idx];
      const ny = y + dy[idx];

      if (nx >= n || ny >= n) continue; // board 안에만 접근하도록 예외 처리
      let tempCandy = board[x][y];
      board[x][y] = board[nx][ny];
      board[nx][ny] = tempCandy;
      // 사탕 바꾸기
      check(board); // 바뀐 사탕으로 행과 열 확인하기
      tempCandy = board[x][y];
      board[x][y] = board[nx][ny];
      board[nx][ny] = tempCandy;
      // 다시 사탕 바꾸기 (원본 보드 유지)
    }
  }
}
console.log(answer);
