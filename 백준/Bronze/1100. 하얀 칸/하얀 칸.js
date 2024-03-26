const board = require("fs").readFileSync("/dev/stdin").toString().split(/\s/);
let count = 0;
for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
        if ((i+j)%2 === 0 && board[i][j] === "F") count++;
    }
}
console.log(count);