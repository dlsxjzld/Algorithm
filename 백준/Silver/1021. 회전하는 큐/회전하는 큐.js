const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n'); //입력값 엔터 기준으로 나누어 배열 생성
 
const test = input[0].split(' '); //입력 첫째줄
const num_list = input[1].split(' '); //입력 둘째줄
 
const n = Number(test[0]); //큐 크기
const m = Number(test[1]); //뽑을 숫자 개수
 
let queue = []; //큐 배열 선언
for (let i = 1; i <= n; i++){ //큐 크기만큼 1~n 값 넣어주기
    queue.push(i);
}
 
let count = 0; //연산 수
 
for (let i = 0; i < m; i++){ //뽑을 숫자 개수 m만큼 반복
    //뽑으려는 수의 인덱스가 현재 큐의 크기/2 보다 큰지 작은지 알기 위해 인덱스 구하기
    let num_index = queue.indexOf(Number((num_list[i])));
 
    while(num_list[i] != queue[0]){ //뽑으려는 수와 큐의 첫번째 원소가 같아질 때까지 반복
        if(num_index <= queue.length / 2){ //만약 뽑으려는 수가 큐의 길이/2보다 작거나 같으면 - 2번 연산
            let qf = queue[0]; //큐 첫번째 원소 저장 (qf - queue first)
            queue.shift(); //shift 연산으로 배열의 모든 요소 왼쪽으로 한칸씩 밀어주기
            queue.push(qf); //push 연산으로 큐 마지막에 다시 첫번째 원소 넣어주기
            count++; //연산 횟수 1추가 
        }
        else if(num_index >= queue.length / 2){ //만약 뽑으려는 수가 큐의 길이/2보다 크거나 같으면 - 3번 연산
            let ql = queue[queue.length - 1]; //큐 마지막 원소 저장 (ql - queue last)
            queue.pop(); //pop연산으로 큐에서 마지막 원소 삭제
            queue.unshift(ql); //unshift연산으로 배열의 모든 요소 오른쪽으로 한칸씩 밀어주기
            //동시에 빈 queue[0]에 (ql) 값 넣어주기
            count++;
        }
    }
    if(num_list[i] == queue[0]){ //뽑으려는 수와 큐의 큐의 첫번째 원소가 같으면 - 1번 연산 
        queue.shift(); //shift 연산으로 배열의 모든 요소 왼쪽으로 한칸씩 밀어주기(첫번째 요소 삭제)
    }
}
 
console.log(count); //결과 출력