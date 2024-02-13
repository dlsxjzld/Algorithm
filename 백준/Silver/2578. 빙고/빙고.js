const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const board = input.slice(0, 5).map((row) => row.split(" "))

const target = input.slice(5, 10).map((row) => row.split(" "))

const bingo = Array.from({ length: 5 }, () =>
  Array.from({ length: 5 }, () => false),
)

const isCross = (bingo)=>{
  let cnt = 0

  if( bingo[0][0] && bingo[1][1] && bingo[2][2] && bingo[3][3] && bingo[4][4]){
    cnt +=1
  }
  if (bingo[0][4] && bingo[1][3] && bingo[2][2] && bingo[3][1] && bingo[4][0]){
    cnt +=1
  }
  return cnt
}

const isLine = (bingo)=>{
  let cnt = 0

  for(let i=0;i<5;i++){
    // 가로
    if( bingo[i][0] && bingo[i][1] && bingo[i][2] && bingo[i][3] && bingo[i][4]){
      cnt +=1
    }
    // 세로
    if(bingo[0][i] && bingo[1][i] && bingo[2][i] && bingo[3][i] && bingo[4][i]){
      cnt +=1
    }
  }
  return cnt
}

let answer = 25

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const cur = target[i][j]

    board.forEach((row, ridx) => {
      if (row.includes(cur)) {
        const cidx = row.indexOf(cur)
        bingo[ridx][cidx] = true
      }
    })

    let cross = isCross(bingo)
    let line = isLine(bingo)

    if(cross+line >= 3){
      answer = Math.min((i)*5 + (j+1), answer)
      break 
    }
  }
}

console.log(answer)
