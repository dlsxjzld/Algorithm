const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const numOfswitch = Number(input[0]);
const switches = input[1].split(" ").map(Number);
const numOfstudent = Number(input[2]);
const student = input
    .slice(3, input.length)
    .map((v) => v.split(" ").map(Number));


student.forEach(([gender, number]) => {

    if (gender === 1) {
        // 남학생은 스위치 번호가 자기가 받은 수의 배수이면, 그 스위치의 상태를 바꾼다
        switches.forEach((v, i) => {
            switches[i] = (i + 1) % number === 0 ? Number(!v) : v;
        });
    } else {
        number -= 1;
        // 자기 자신 바꾸기
        switches[number] = Number(!switches[number]);
        let idx = 1;

        while (true) {
            // 스위치 번호가 0보다 작거나 스위치의 갯수보다 크면 탈출
            if (number - idx < 0 || number + idx >= numOfswitch) {
                break;
            }
            // 좌우가 대칭이 안되면 탈출
            if (switches[number - idx] !== switches[number + idx]) {
                break;
            }
            switches[number - idx] = Number(!switches[number - idx]);
            switches[number + idx] = Number(!switches[number + idx]);
            idx += 1;
        }
    }
});

let answer = "";
for (let i = 0; i < switches.length; i++) {
    if (i > 0 && i % 20 === 0) {
        answer += "\n";
    }
    answer += switches[i] + " ";
}

console.log(answer.trim());
