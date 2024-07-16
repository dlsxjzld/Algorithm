const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    let reward = 0;

    // 1회 상금계산
    if (a === 0) {
        // pass
    } else if (a <= 1) {
        reward += 500;
    } else if (a <= 3) {
        reward += 300;
    } else if (a <= 6) {
        reward += 200;
    } else if (a <= 10) {
        reward += 50;
    } else if (a <= 15) {
        reward += 30;
    } else if (a <= 21) {
        reward += 10;
    }

    // 2회 상금계산
    if (b === 0) {
        // pass
    } else if (b <= 1) {
        reward += 512;
    } else if (b <= 3) {
        reward += 256;
    } else if (b <= 7) {
        reward += 128;
    } else if (b <= 15) {
        reward += 64;
    } else if (b <= 31) {
        reward += 32;
    }

    console.log(reward * 10000);
}
