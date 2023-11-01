const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [n, m, b] = input[0].split(" ").map(Number);
input.splice(0, 1);

const arr = input.map((row) => row.split(" ").map(Number));
let resultTime = Number.MAX_SAFE_INTEGER;
let resultHeight = -1;
const answer = [];

for (let height = 0; height <= 256; height += 1) {
    let removeBlock = 0; // 제거한 블록 수
    let addBlock = 0; // 채워넣어야 할 블록 수

    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < m; j += 1) {
            if (arr[i][j] < height) {
                // 인벤토리 블록으로 채워넣기
                addBlock += height - arr[i][j];
            } else {
                removeBlock += arr[i][j] - height;
            }
        }
    }
    if(removeBlock+b < addBlock){
        break
    }
    const totalTime = removeBlock * 2 + addBlock;
    if (resultTime >= totalTime) {
        resultTime = totalTime;
        resultHeight = height;
    }
    
}
console.log(resultTime, resultHeight);