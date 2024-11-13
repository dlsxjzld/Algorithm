const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, L] = input[0].split(' ').map(v => +v); 
const place = input[1].split(' ').map(v => +v).sort((a,b) => a-b);

let answer = 1; //처음 구멍난 곳 테이프 하나 쓰기 
let start = place[0]; // 처음 구멍난 곳이 start 지점 
for(let i=1; i<N; i++){
    if(0.5 + place[i] + 0.5 - start > L){ // 좌우 0.5씩 간격이 보장된 거리에서 + 현재위치 -start 를 뺀 값이 테이프 길이보다 길다면?
        answer++; //테이프 하나 추가! 
        start = place[i] //테이프 하나 추가했으니, 현재 위치 값으로 start로 한다! 
    }
}
console.log(answer)