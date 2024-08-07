const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const max = parseInt(input[0].split(" ")[1]);
  let arr = [];
  let roomNum = 0;

  for (let i = 0; i < 6; i++) {
    arr.push([0, 0]);
  }
  for (let i in input) {
    if (i == 0) continue;
    arr[parseInt(input[i].split(" ")[1]) - 1][
      parseInt(input[i].split(" ")[0])
    ]++;
  }
  for (let i in arr) {
    roomNum += Math.ceil(arr[i][0] / max);
    roomNum += Math.ceil(arr[i][1] / max);
  }
  console.log(roomNum);