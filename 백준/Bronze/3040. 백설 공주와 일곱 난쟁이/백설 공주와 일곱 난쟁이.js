const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력값을 숫자 배열로 변환
const numOfDwarfs = input.map(Number);

// 합에서 100을 뺀 값 계산
const totalOfNotDwarf = numOfDwarfs.reduce((a, b) => a + b, 0) - 100;

let found = false;

// 두 숫자를 찾아 배열에서 제거
for (let i = 0; i < numOfDwarfs.length; i++) {
  for (let j = i + 1; j < numOfDwarfs.length; j++) {
    if (numOfDwarfs[i] + numOfDwarfs[j] === totalOfNotDwarf) {
      numOfDwarfs.splice(j, 1); // j를 먼저 제거
      numOfDwarfs.splice(i, 1); // i를 나중에 제거
      found = true;
      break;
    }
  }
  if (found) break;
}

// 결과 출력
console.log(numOfDwarfs.join('\n'));
