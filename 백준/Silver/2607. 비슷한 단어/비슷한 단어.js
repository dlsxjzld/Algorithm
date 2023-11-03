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

// target : 첫 단어
// words : 비슷한 단어인지 확인할 단어들
const replacedWord = words.map((word) => {
    // targetWord : 첫 단어
    let targetWord = target.split("").join("");

    target.split("").forEach((char) => {
        // 단어가 첫 단어의 문자들을 갖고 있는지 확인
        if (word.includes(char)) {
            word = word.replace(char, "");
            // 단어에서 첫 단어와 겹치는 문자들 지우기
            targetWord = targetWord.replace(char, "");
            // 첫 단어에서 겹치는 문자들 지우기
        }
    });
    // 단어의 남은 문자의 길이 , 첫 단어에서 겹치는 문자 지우고 남은 길이
    return [word.length, targetWord.length];
});

console.log(
    replacedWord.filter(
        ([wordCnt, targetCnt]) => wordCnt <= 1 && targetCnt <= 1
    ).length
);
