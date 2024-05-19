const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
let [n, m, k] = input.map(Number);


  let teamCount = 0;
  // 팀만들기
  while (true) {
    if (n < 2 || m < 1 || n + m - 3 < k) break
    n -= 2
    m -= 1
    teamCount++
  }




console.log(teamCount);