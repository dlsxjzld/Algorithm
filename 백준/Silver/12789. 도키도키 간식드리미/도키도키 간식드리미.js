const fs = require("fs");
const [n, INPUT] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = INPUT.split(" ").map(Number);
const stack = [];
let top = 0;
let cur = 1;
let output = "";

input.forEach((e) => {
  while (stack[top - 1] === cur) {
    stack.pop();
    top--;
    cur++;
  }

  if (e !== cur) {
    stack.push(e);
    top++;
  } else {
    cur++;
  }
});

while (stack.pop() === cur) {
  top--;
  cur++;
}

top === 0 ? (output = "Nice") : (output = "Sad");
console.log(output);