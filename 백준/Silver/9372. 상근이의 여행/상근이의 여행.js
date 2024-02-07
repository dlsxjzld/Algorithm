const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let number = Number(input[0]);
let result = [];
let idx = 1;

for (let i = 0; i < number; i++) {
    let arr = [];
    let [nodeNum, edgeNum] = input[idx++].split(" ").map(Number);
    for (let j = 0; j < edgeNum; j++) {
        arr[j] = input[idx++].split(" ").map(Number);
    }

    const visited = new Array(nodeNum).fill(false);
    visited[0] = true;
    const queue = [0];
    let count = 0;

    while (queue.length) {
        const head = queue.shift();
        for (let node of arr) {
            if (node[0] - 1 === head && !visited[node[1] - 1]) {
                queue.push(node[1] - 1);
                visited[node[1] - 1] = true;
                count++;
            } else if (node[1] - 1 === head && !visited[node[0] - 1]) {
                queue.push(node[0] - 1);
                visited[node[0] - 1] = true;
                count++;
            }
        }
        if (!visited.includes(false)) break;
    }
    result[i] = count;
}

console.log(result.join('\n'));