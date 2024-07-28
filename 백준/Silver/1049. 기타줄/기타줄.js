const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" "));

let [N, M] = input[0];
let list = input.slice(1);

let result = 0;

// 세트와 낱개의 목록에서 최소가격을 구한다 
let minSet = Math.min(...list.map((item) => item[0]));
let minPiece = Math.min(...list.map((item) => item[1]));

while (true) {
    let set = Math.floor(N / 6); // 세트가 몇개 필요한지 구한다
    if (N < 6) { // 필요한 기타줄이 6개 미만일때
        result += Math.min(minPiece * N, minSet); // 낱개와 세트로 사는것중에 저렴한걸 찾는다
        break;
    } else { // 필요한 기타줄이 6개 이상일때
        result += Math.min(minSet * set, minPiece * (set * 6)); // 낱개와 세트로 사는것중에 저렴한걸 찾는다
        N -= 6 * set; // 구매한 줄의 갯수만큼 빼준다
    }
}

console.log(result);