const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let visited = Array.from({ length: 201 }, () =>
  Array.from({ length: 201 }, () => Array(201).fill(false))
);
let result = [];

let [A, B, C] = input;

let queue = [];
queue.push([0, 0, C]);

while (queue.length !== 0) {
  let [x, y, z] = queue.shift();

  if (!visited[x][y][z]) {
    visited[x][y][z] = true;
    if (x === 0) {
      result.push(z);
    }

    // x -> y
    if (x + y > B) {
      queue.push([x + y - B, B, z]);
    } else {
      queue.push([0, x + y, z]);
    }

    // x -> z
    if (x + z > C) {
      queue.push([x + z - C, y, C]);
    } else {
      queue.push([0, y, x + z]);
    }

    // y -> x
    if (x + y > A) {
      queue.push([A, x + y - A, z]);
    } else {
      queue.push([x + y, 0, z]);
    }

    // y -> z
    if (y + z > C) {
      queue.push([x, y + z - C, C]);
    } else {
      queue.push([x, 0, y + z]);
    }

    // z -> x
    if (x + z > A) {
      queue.push([A, y, x + z - A]);
    } else {
      queue.push([x + z, y, 0]);
    }

    // z -> y
    if (y + z > B) {
      queue.push([x, B, y + z - B]);
    } else {
      queue.push([x, y + z, 0]);
    }
  }
}

result.sort((a, b) => a - b);

console.log(result.join(" "));