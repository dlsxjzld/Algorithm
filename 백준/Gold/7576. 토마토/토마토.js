const fs = require("fs");
const file_path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file_path).toString().split("\n");
// your own code here
const [col, row] = input[0].split(" ").map(Number);
const box = Array.from({ length: row }, () => Array(col));

const d_row = [-1, 1, 0, 0];
const d_col = [0, 0, -1, 1];

let unrippen = 0;
const queue = [];

let idx = 0;
for (let r = 0; r < row; r++) {
  box[idx++] = input[r + 1].split(" ").map(Number);
}

let answer = 0;

for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    if (box[r][c] === 1) {
      queue.push([r, c, 0]);
    } else if (box[r][c] === 0) {
      unrippen++;
    }
  }
}

if (unrippen === 0) {
  console.log(0);
  return;
} else {
  let index = 0;
  while (index < queue.length) {
    const [r, c, day] = queue[index++];
    answer = day;

    for (let d = 0; d < d_row.length; d++) {
      const nr = r + d_row[d];
      const nc = c + d_col[d];
      if (nr >= 0 && nr < row && nc >= 0 && nc < col && box[nr][nc] === 0) {
        box[nr][nc] = 1;
        unrippen--;
        queue.push([nr, nc, day + 1]);
      }
    }
  }
}

if (unrippen > 0) {
  console.log(-1);
} else {
  console.log(answer);
}
