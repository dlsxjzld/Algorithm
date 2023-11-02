const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const num = input[0];
input.splice(0, 1);
const target = input[0];
input.splice(0, 1);
const words = input;

const replacedWord = words.map((word) => {
    let targetWord = target.split("").join("");
    target.split("").forEach((char) => {
        if (word.includes(char)) {
            word = word.replace(char, "");
            targetWord = targetWord.replace(char, "");
        }
    });
    return [word, targetWord.length];
});

console.log(
    replacedWord.filter(([v, cnt]) => v.length <= 1 && cnt <= 1).length
);
