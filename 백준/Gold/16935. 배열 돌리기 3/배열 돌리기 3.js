const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
let array = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));
const calcNumbers = input[input.length - 1].split(" ").map(Number);

for (let num = 0; num < r; num++) {
    const calcNumber = calcNumbers[num];
    // 1번 연산 배열 상하 반전
    if (calcNumber === 1) {
        const temp = [];
        let newN = array.length
        for (let idx = newN - 1; idx > -1; idx--) {
            temp.push(array[idx]);
        }
        // array 새로 갱신
        array = temp;
    }

    // 2번 연산 배열 좌우 반전
    else if (calcNumber === 2) {
        const temp = [];
        array.forEach((row, idx) => temp.push([...row].reverse()));
        array = temp;
    }
    // 3번 연산 오른쪽으로 90도 회전
    // n m 이 뒤바뀜
    else if (calcNumber === 3) {
        let tmpN = array.length;
        let tmpM = array[0].length;

        const temp = Array.from({ length: tmpM }, () =>
            Array.from({ length: tmpN }, () => 0)
        );
        array.forEach((row, ridx) =>
            row.forEach((val, cidx) => {
                temp[cidx][tmpN - ridx - 1] = val;
            })
        );
        array = temp;
    }
    // 4번 연산 왼쪽으로 90도 회전
    else if (calcNumber === 4) {
        let tmpN = array.length;
        let tmpM = array[0].length;
        const temp = Array.from({ length: tmpM }, () =>
            Array.from({ length: tmpN }, () => 0)
        );
        array.forEach((row, ridx) =>
            row.forEach((val, cidx) => {
                temp[tmpM - cidx - 1][ridx] = val;
            })
        );
        array = temp;
    }
    // 5번 연산 4개의 부분배열 나누고 1->2 2->3 3->4 4->1
    else if (calcNumber === 5) {
        let tmpN = array.length / 2;
        let tmpM = array[0].length / 2;
        let newN = array.length;
        let newM = array[0].length;
        const temp = Array.from({ length: newN }, () =>
            Array.from({ length: newM }, () => 0)
        );
        // 1 사분면
        for (let ridx = 0; ridx < tmpN; ridx++) {
            for (let cidx = 0; cidx < tmpM; cidx++) {
                temp[ridx][cidx + tmpM] = array[ridx][cidx];
            }
        }

        // 2 사분면
        for (let ridx = 0; ridx < tmpN; ridx++) {
            for (let cidx = tmpM; cidx < newM; cidx++) {
                temp[ridx + tmpN][cidx] = array[ridx][cidx];
            }
        }
        // 3 사분면
        for (let ridx = tmpN; ridx < newN; ridx++) {
            for (let cidx = tmpM; cidx < newM; cidx++) {
                temp[ridx][cidx - tmpM] = array[ridx][cidx];
            }
        }
        // 4 사분면
        for (let ridx = tmpN; ridx < newN; ridx++) {
            for (let cidx = 0; cidx < tmpM; cidx++) {
                temp[ridx - tmpN][cidx] = array[ridx][cidx];
            }
        }
        array = temp;
    }
    // 6번 연산 4개의 부분배열 나누고 1->4 4->3 3->2 2->1
    else if (calcNumber === 6) {
        let tmpN = array.length / 2;
        let tmpM = array[0].length / 2;
        let newN = array.length;
        let newM = array[0].length;
        const temp = Array.from({ length: newN }, () =>
            Array.from({ length: newM }, () => 0)
        );
        // 1 -> 4사분면
        for (let ridx = 0; ridx < tmpN; ridx++) {
            for (let cidx = 0; cidx < tmpM; cidx++) {
                temp[ridx + tmpN][cidx] = array[ridx][cidx];
            }
        }

        // 2->1 사분면
        for (let ridx = 0; ridx < tmpN; ridx++) {
            for (let cidx = tmpM; cidx < newM; cidx++) {
                temp[ridx][cidx - tmpM] = array[ridx][cidx];
            }
        }
        // 3->2 사분면
        for (let ridx = tmpN; ridx < newN; ridx++) {
            for (let cidx = tmpM; cidx < newM; cidx++) {
                temp[ridx - tmpN][cidx] = array[ridx][cidx];
            }
        }
        // 4->3 사분면
        for (let ridx = tmpN; ridx < newN; ridx++) {
            for (let cidx = 0; cidx < tmpM; cidx++) {
                temp[ridx][cidx + tmpM] = array[ridx][cidx];
            }
        }
        array = temp;
    }
}

console.log(array.map((row) => row.join(" ")).join("\n"));
