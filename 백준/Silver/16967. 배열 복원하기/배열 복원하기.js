const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [h, w, x, y] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))

const answer = Array.from({ length: h }, () =>
  Array.from({ length: w }, () => 0),
)

for (let i = 0; i < x; i++) {
  for (let j = 0; j < w; j++) {
    answer[i][j] = graph[i][j]
  }
}

for(let i=0;i<h;i++){
    if(i < x){
        for(let j=0;j<w;j++){
            answer[i][j] = graph[i][j]
        }
    }else{
        for(let j=0;j<w;j++){
            if(j<y){
                answer[i][j] = graph[i][j]
            }else{
                answer[i][j] = graph[i][j] - answer[i-x][j-y]
            }
        }
    }
}


console.log(answer.map((row) => row.join(" ")).join("\n"))
