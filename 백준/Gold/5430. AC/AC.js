const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const Delete = (arr, isR) => {
  if (isR) {
    arr.pop();
    return arr;
  }

  if (!isR) {
    arr.shift();
    return arr;
  }
};

for (let i = 0; i < input.length; i += 3) {
  const command = input[i].split("");
  let array = JSON.parse(input[i + 2]);
  let isReverse = false;
  let isError = false;

  for (let j = 0; j < command.length; j++) {
    if (command[j] === "R") {
      isReverse = !isReverse;
    }
    if (command[j] === "D") {
      if (array.length === 0) {
        isError = true;
      }
      array = Delete(array, isReverse);
    }
  }

  console.log(
    isError ? "error" : JSON.stringify(isReverse ? array.reverse() : array)
  );
}